import type { Metadata } from "next";
import { siteConfig, content } from "@/config";
import { defaultLocale } from "@/i18n/translations";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: content[defaultLocale].seo.description,
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* FOUC prevention: apply dark class before first paint.
            Defaults to dark mode — falls back to system preference only
            when it explicitly prefers light, and respects any stored
            user choice. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');if(s==='light'){return}if(s==='dark'){document.documentElement.classList.add('dark');return}var prefersLight=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches;if(!prefersLight){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`,
          }}
        />
        {/* Inject accent colors from config as CSS custom properties */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--accent-color:${siteConfig.accentColorLight}}.dark{--accent-color:${siteConfig.accentColorDark}}`,
          }}
        />
      </head>
      <body className="bg-[#f9f9fb] dark:bg-[#111113] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <LanguageProvider>
          {children}
          <ScrollReveal />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
