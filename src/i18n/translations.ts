import { siteConfig } from "@/config";

// ─── i18n Structure ───────────────────────────────────────────────────────
// Basic translation dictionary. Defaults to "en" (sourced from siteConfig,
// the single source of truth for all English strings). Additional locales
// are added here as sibling entries — extend `locales` below and provide a
// matching translation object to support a new language.

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export type NavigationStrings = typeof siteConfig.navigation;

export const translations: Record<Locale, { navigation: NavigationStrings }> = {
  en: {
    navigation: siteConfig.navigation,
  },
  es: {
    navigation: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      pages: "Páginas",
      contact: "Contacto",
      aria: {
        toggleTheme: "Cambiar tema",
        toggleMenu: "Alternar menú de navegación",
        toggleLanguage: "Cambiar idioma",
      },
    },
  },
};
