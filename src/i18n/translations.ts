import { content } from "@/config";
import type { LocaleContent } from "@/config";

// ─── i18n Structure ───────────────────────────────────────────────────────
// `content` (defined in src/config.ts) is the single source of truth for all
// localized, user-facing strings, written ONLY in English. Every other
// supported locale is derived from it automatically at runtime by the
// dynamic translation layer in ./translate.ts — see LanguageContext.tsx for
// how it's wired into `useLanguage().t`.

export type Locale = "en" | "es" | "ca" | "fr" | "zh";

export const locales: Locale[] = ["en", "es", "ca", "fr", "zh"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ca: "Català",
  fr: "Français",
  zh: "中文",
};

export type { LocaleContent };

// The canonical, English-only content tree. Non-English locales are produced
// on demand — see translateContent() in ./translate.ts.
export const baseContent: LocaleContent = content;
