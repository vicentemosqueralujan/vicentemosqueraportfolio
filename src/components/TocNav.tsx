"use client";
import { useEffect, useState } from "react";

export type TocEntry = { level: number; text: string; id: string };

export default function TocNav({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!entries.length) return;
    const headings = entries
      .map((e) => document.getElementById(e.id))
      .filter(Boolean) as HTMLElement[];

    const update = () => {
      const scrollY = window.scrollY + 130;
      let current = headings[0];
      for (const h of headings) {
        if (h.getBoundingClientRect().top + window.scrollY <= scrollY) current = h;
      }
      setActiveId(current?.id ?? null);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [entries]);

  if (!entries.length) return null;

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <p className="text-[10px] font-mono tracking-[0.15em] uppercase text-gray-400 dark:text-gray-600 mb-3">
          Contents
        </p>
        <nav className="flex flex-col gap-0.5 border-l border-gray-200/60 dark:border-gray-700/50">
          {entries.map((entry) => (
            <a
              key={entry.id}
              href={`#${entry.id}`}
              data-toc-id={entry.id}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(entry.id);
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 112;
                  window.scrollTo({ top, behavior: "smooth" });
                  setActiveId(entry.id);
                }
              }}
              className={`toc-link block text-xs leading-snug transition-all duration-200 py-1 border-l-2 ${
                entry.level === 3 ? "pl-5" : "pl-3"
              } ${
                activeId === entry.id
                  ? "toc-active text-[var(--accent-color)] border-l-[var(--accent-color)]"
                  : "text-gray-400 dark:text-gray-600 border-transparent hover:text-gray-700 dark:hover:text-gray-300 hover:border-l-gray-300 dark:hover:border-l-gray-600"
              }`}
            >
              {entry.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
