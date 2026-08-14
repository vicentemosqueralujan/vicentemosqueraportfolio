import { content } from "@/config";
import type { LocaleContent } from "@/config";

// ─── i18n Structure ───────────────────────────────────────────────────────
// `content` (defined in src/config.ts) is the single source of truth for all
// localized, user-facing strings — everything from navigation labels to the
// full engineering-page markdown. This module only owns the Locale type and
// re-exports the per-locale content dictionary as `translations`.

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export type { LocaleContent };

export const translations: Record<Locale, LocaleContent> = content;
