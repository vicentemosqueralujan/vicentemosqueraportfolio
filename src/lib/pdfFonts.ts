import type { jsPDF } from "jspdf";

/**
 * CJK font support for the résumé PDF generator (DownloadResumeButton.tsx).
 *
 * jsPDF's built-in fonts (helvetica, times, courier) only cover WinAnsi/Latin
 * glyphs. Rendering Chinese (or any other CJK) text with them produces
 * mojibake / blank tofu boxes instead of characters. jsPDF can embed a custom
 * TrueType font via `addFileToVFS` + `addFont`, but it only understands
 * `glyf`-outline TTFs — not CFF/OTF fonts (e.g. the OTF build of Noto Sans SC
 * doesn't work here).
 *
 * We lazy-fetch a subsetted Noto Sans SC (TTF, glyf outlines) from
 * `/public/fonts` on demand — only when the résumé actually contains CJK
 * text — and register it into the jsPDF instance. The subset covers Basic
 * Latin, general/CJK punctuation, fullwidth forms, and the full CJK Unified
 * Ideographs block, which is enough for auto-translated Chinese resume
 * content. See `public/fonts/NotoSansSC-OFL.txt` for the font license.
 */

export const CJK_FONT_NAME = "NotoSansSC";
const CJK_FONT_URL = "/fonts/NotoSansSC-Regular-subset.ttf";

// Matches CJK Unified Ideographs, CJK punctuation/symbols, and fullwidth
// forms — enough to detect "this string needs a CJK-capable font" without
// hardcoding a locale check (works for zh today, and ja/ko if ever added).
const CJK_PATTERN = /[　-〿㐀-鿿豈-﫿＀-￯]/;

export function containsCJK(text: string): boolean {
  return CJK_PATTERN.test(text);
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

// Cache the fetched/base64-encoded font across downloads in the same session
// so switching locale or re-downloading the résumé doesn't refetch ~7MB
// every time.
let cjkFontBase64Promise: Promise<string> | null = null;

async function getCJKFontBase64(): Promise<string> {
  if (!cjkFontBase64Promise) {
    cjkFontBase64Promise = fetch(CJK_FONT_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch CJK font: ${res.status}`);
        return res.arrayBuffer();
      })
      .then(arrayBufferToBase64)
      .catch((err) => {
        // Reset so a later retry (e.g. transient network failure) can try
        // again instead of being stuck on a rejected promise forever.
        cjkFontBase64Promise = null;
        throw err;
      });
  }
  return cjkFontBase64Promise;
}

/**
 * Registers the CJK font on the given jsPDF document if it isn't already
 * registered, returning the font name to use with `doc.setFont(...)`.
 * Returns `null` if the font failed to load (offline, blocked, etc.) so
 * callers can fall back to the default Latin font instead of throwing.
 */
export async function ensureCJKFont(doc: jsPDF): Promise<string | null> {
  try {
    const base64 = await getCJKFontBase64();
    const vfsName = "NotoSansSC-Regular.ttf";
    // addFont/addFileToVFS are idempotent to call repeatedly, but guard
    // anyway to avoid redundant VFS writes when generating multiple PDFs.
    const alreadyRegistered = doc
      .getFontList()
      [CJK_FONT_NAME]?.includes("normal");
    if (!alreadyRegistered) {
      doc.addFileToVFS(vfsName, base64);
      doc.addFont(vfsName, CJK_FONT_NAME, "normal");
    }
    return CJK_FONT_NAME;
  } catch (err) {
    console.warn("CJK font could not be loaded; falling back to Latin font.", err);
    return null;
  }
}
