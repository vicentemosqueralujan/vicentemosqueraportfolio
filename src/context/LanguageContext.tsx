"use client";
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { Locale, defaultLocale, locales, baseContent, LocaleContent } from "@/i18n/translations";
import { translateContent } from "@/i18n/translate";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: LocaleContent;
  isTranslating: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  // Always start from the English base so content is never blank/partial —
  // a locale switch shows English until its translation resolves, then
  // swaps in place. This is what keeps sections (e.g. Projects) from ever
  // disappearing mid-switch.
  const [t, setT] = useState<LocaleContent>(baseContent);
  const [isTranslating, setIsTranslating] = useState(false);
  const requestId = useRef(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("language") as Locale | null;
      if (stored && locales.includes(stored)) {
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable — keep default locale
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;

    if (locale === "en") {
      setT(baseContent);
      setIsTranslating(false);
      return;
    }

    const thisRequest = ++requestId.current;
    setIsTranslating(true);
    translateContent(baseContent, locale)
      .then((translated) => {
        // Ignore stale responses from a locale the user has since switched
        // away from.
        if (requestId.current === thisRequest) {
          setT(translated);
        }
      })
      .finally(() => {
        if (requestId.current === thisRequest) {
          setIsTranslating(false);
        }
      });
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem("language", next);
    } catch {
      // localStorage unavailable — in-memory state still updates
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
