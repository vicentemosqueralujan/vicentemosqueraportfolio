"use client";
import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/config";

const { navigation, projects, experience, education } = siteConfig;
const hasProjects = projects.items.length > 0;
const hasExperience = experience.items.length > 0;
const hasEducation = education.items.length > 0;

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8-9v1m8 8h1m-9 8v1m-5.7-13.7.7.7m12-.7-.7.7m0 11.4.7.7m-12-.7-.7.7" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line
        x1="3" y1="7" x2="17" y2="7"
        stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
        style={{
          transformOrigin: "10px 7px",
          transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.2s",
          transform: open ? "rotate(45deg) translate(0px, 3px)" : "none",
        }}
      />
      <line
        x1="3" y1="13" x2="17" y2="13"
        stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"
        style={{
          transformOrigin: "10px 13px",
          transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1), opacity 0.2s",
          transform: open ? "rotate(-45deg) translate(0px, -3px)" : "none",
        }}
      />
    </svg>
  );
}

export default function Nav() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, [isDark]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/#hero", label: navigation.home },
    { href: "/#about", label: navigation.about },
    ...(hasProjects ? [{ href: "/#projects", label: navigation.projects }] : []),
    ...(hasExperience ? [{ href: "/#experience", label: navigation.experience }] : []),
    ...(hasEducation ? [{ href: "/#education", label: navigation.education }] : []),
    { href: "/pages", label: navigation.pages },
    { href: "/#contact", label: navigation.contact },
  ];

  const headerBg = scrolled
    ? "bg-white/60 dark:bg-black/60 backdrop-blur-2xl border-b border-white/30 dark:border-white/10 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-3 min-w-0">

          {/* Logo placeholder — keeps flex balance */}
          <span className="shrink-0" aria-hidden="true" />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] tracking-wide text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200 font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                aria-label={navigation.aria.toggleTheme}
                className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 transition-all duration-200"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
            </li>
          </ul>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1.5 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={navigation.aria.toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 transition-all duration-200"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={navigation.aria.toggleMenu}
              aria-expanded={menuOpen}
              className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 transition-all duration-200"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — full frosted glass overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ WebkitBackdropFilter: menuOpen ? "blur(28px)" : undefined }}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-white/75 dark:bg-black/75 backdrop-blur-2xl"
          style={{ WebkitBackdropFilter: "blur(28px) saturate(1.8)" }}
        />
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <ul className="pt-20 pb-10 px-8 flex flex-col">
          {navLinks.map((l, i) => (
            <li
              key={l.href}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "0.35s",
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: menuOpen ? `${i * 40 + 60}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <a
                href={l.href}
                onClick={closeMenu}
                className="block py-4 text-[22px] font-medium tracking-tight text-neutral-800 dark:text-neutral-100 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] border-b border-neutral-200/50 dark:border-neutral-800/50 last:border-0 transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
