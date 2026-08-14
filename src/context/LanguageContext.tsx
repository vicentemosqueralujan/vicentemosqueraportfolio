"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Locale, defaultLocale, locales, translations } from "@/i18n/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

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

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem("language", next);
    } catch {
      // localStorage unavailable — in-memory state still updates
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
