import type { Metadata } from "next";
import { siteConfig } from "@/config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Pages — ${siteConfig.name}`,
  description: siteConfig.engineeringPages.description,
};

export default function PagesIndex() {
  const { engineeringPages, pages } = siteConfig;

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-16 bg-[#f9f9fb] dark:bg-[#111113]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {engineeringPages.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {engineeringPages.description}
            </p>
          </div>

          <div className="grid gap-4">
            {pages.map((page, i) => (
              <a
                key={page.slug}
                href={`/pages/${page.slug}`}
                className="group block bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-700/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[var(--accent-color)] hover:-translate-y-0.5 hover:shadow-sm animate-fade-in-up"
                style={{ animationDelay: `${0.1 + i * 0.06}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[var(--accent-color)] transition-colors duration-200">
                      {page.title}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {page.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center text-gray-300 dark:text-gray-600 group-hover:text-[var(--accent-color)] group-hover:translate-x-1 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
