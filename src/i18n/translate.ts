// ─── Dynamic Translation Layer ──────────────────────────────────────────────
//
// src/config.ts is English-only (the single source of truth). Every other
// supported locale is produced from it automatically, at runtime, by this
// module — nobody hand-maintains a duplicate copy of the content tree per
// language. `translateContent` walks the English `LocaleContent` tree,
// machine-translates each user-facing string leaf, and returns a new
// `LocaleContent` of the same shape.
//
// Design constraints that shaped this file:
// - Never throw, never return a partially-built object. Any failure (network,
//   rate limit, malformed response) falls back to the original English
//   string for that leaf — a broken translation must degrade to English
//   text, not to a missing/blank field (that's the exact bug class task 1
//   fixed: a locale switch must never hide content).
// - Route around structural fields that must stay verbatim (`slug`,
//   `pageSlug`, `link`, `id`) and protect markdown code fences, inline code,
//   and `{token}` placeholders so a translated string is still valid
//   markdown / still contains its interpolation tokens.
// - Cache aggressively (in-memory + localStorage) so a locale is only ever
//   translated once per content version, not on every switch.

import type { LocaleContent } from "@/config";
import type { Locale } from "./translations";

const SKIP_KEYS = new Set(["slug", "pageSlug", "link", "id"]);
const CACHE_VERSION = "v1";
const memoryCache = new Map<string, LocaleContent>();

function hash(input: string): string {
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    h = (h * 33) ^ input.charCodeAt(i);
  }
  return (h >>> 0).toString(36);
}

function cacheKey(locale: Locale, base: LocaleContent): string {
  return `i18n:${CACHE_VERSION}:${locale}:${hash(JSON.stringify(base))}`;
}

function readLocalStorage(key: string): LocaleContent | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as LocaleContent) : null;
  } catch {
    return null;
  }
}

function writeLocalStorage(key: string, value: LocaleContent): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or unavailable — in-memory cache still serves this session
  }
}

// ─── Placeholder protection ─────────────────────────────────────────────────
// Fenced code blocks, inline code, and `{token}` interpolation markers must
// survive translation byte-for-byte. Swap them for inert tokens before
// sending text to the translation API, then restore them afterward.

const PROTECT_PATTERNS = [/```[\s\S]*?```/g, /`[^`\n]+`/g, /\{[a-zA-Z]+\}/g];

function protect(text: string): { protected: string; restore: (s: string) => string } {
  const slots: string[] = [];
  let out = text;
  for (const pattern of PROTECT_PATTERNS) {
    out = out.replace(pattern, (match) => {
      const token = `⦅${slots.length}⦆`; // ⦅N⦆ — punctuation, unlikely to be mangled by MT
      slots.push(match);
      return token;
    });
  }
  const restore = (translated: string) =>
    translated.replace(/⦅(\d+)⦆/g, (_, idx) => slots[Number(idx)] ?? "");
  return { protected: out, restore };
}

// ─── MT transport ────────────────────────────────────────────────────────────
// Lightweight, keyless client wrapper around Google's public "gtx" translate
// endpoint. No API key, no backend — a plain fetch from the browser. Long
// text is chunked on paragraph boundaries to stay under the endpoint's
// practical request-size limit, then rejoined in order.

const MAX_CHUNK = 1800;

function chunkText(text: string): string[] {
  if (text.length <= MAX_CHUNK) return [text];
  const paragraphs = text.split(/\n\n/);
  const chunks: string[] = [];
  let current = "";
  for (const para of paragraphs) {
    if (current && (current.length + para.length + 2) > MAX_CHUNK) {
      chunks.push(current);
      current = para;
    } else {
      current = current ? `${current}\n\n${para}` : para;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

async function fetchTranslation(text: string, target: Locale): Promise<string> {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`translate: ${res.status}`);
  const data = await res.json();
  // Response shape: [[[translatedChunk, originalChunk, ...], ...], ...]
  const segments: unknown = data?.[0];
  if (!Array.isArray(segments)) throw new Error("translate: malformed response");
  return segments.map((seg) => (Array.isArray(seg) ? String(seg[0] ?? "") : "")).join("");
}

async function translateString(text: string, target: Locale): Promise<string> {
  if (!text.trim()) return text;
  const { protected: protectedText, restore } = protect(text);
  try {
    const chunks = chunkText(protectedText);
    const translatedChunks = await Promise.all(chunks.map((c) => fetchTranslation(c, target)));
    return restore(translatedChunks.join(chunks.length > 1 ? "\n\n" : ""));
  } catch {
    // Never let a single failed string break the whole locale — fall back
    // to the original English text for just this leaf.
    return text;
  }
}

// ─── Tree walk ───────────────────────────────────────────────────────────────

const CONCURRENCY = 6;

async function mapWithConcurrency<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const i = cursor++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function translateNode(node: unknown, target: Locale, key?: string): Promise<unknown> {
  if (key && SKIP_KEYS.has(key)) return node;
  if (typeof node === "string") return translateString(node, target);
  if (Array.isArray(node)) {
    return mapWithConcurrency(node, CONCURRENCY, (item) => translateNode(item, target));
  }
  if (node && typeof node === "object") {
    const entries = Object.entries(node as Record<string, unknown>);
    const translatedEntries = await mapWithConcurrency(entries, CONCURRENCY, async ([k, v]) => [
      k,
      await translateNode(v, target, k),
    ]);
    return Object.fromEntries(translatedEntries as [string, unknown][]);
  }
  return node;
}

/**
 * Translate the canonical English `LocaleContent` tree into `target`.
 * Falls back to the original English string per-leaf on any failure, so the
 * returned object always has the same shape as `base` and is never partial.
 */
export async function translateContent(base: LocaleContent, target: Locale): Promise<LocaleContent> {
  if (target === "en") return base;

  const key = cacheKey(target, base);
  const cached = memoryCache.get(key) ?? readLocalStorage(key);
  if (cached) {
    memoryCache.set(key, cached);
    return cached;
  }

  const translated = (await translateNode(base, target)) as LocaleContent;
  memoryCache.set(key, translated);
  writeLocalStorage(key, translated);
  return translated;
}
