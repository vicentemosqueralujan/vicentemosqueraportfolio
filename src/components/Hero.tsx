import { siteConfig } from "@/config";
import DownloadResumeButton from "@/components/DownloadResumeButton";

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Hero() {
  const { hero, name, title, social } = siteConfig;

  return (
    <section
      id="hero"
      className="relative isolate flex justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 pb-8 text-center">
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.05] mb-5">
          {hero.namePrefix}{" "}
          <span className="hero-name">
            {name}
          </span>
        </h1>

        <p className="animate-fade-in-up animate-fade-in-up-d1 text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed">
          {title}
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up animate-fade-in-up-d2 flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:opacity-90 hover:-translate-y-px active:translate-y-0 shadow-lg"
            style={{
              backgroundColor: "var(--accent-color)",
              boxShadow: "0 8px 32px color-mix(in srgb, var(--accent-color) 50%, transparent), 0 2px 8px color-mix(in srgb, var(--accent-color) 25%, transparent)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M3 10h18" />
              <path d="M10 3v18" />
            </svg>
            {hero.buttons.primary}
          </a>
          <DownloadResumeButton label={hero.buttons.resume} />
        </div>

        {/* Social icons — centered horizontal row */}
        <div className="animate-fade-in-up animate-fade-in-up-d3 flex items-center justify-center gap-3">
          <a
            href={`mailto:${social.email}`}
            aria-label={social.aria.email}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/60 shadow-sm text-neutral-500 dark:text-neutral-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <EmailIcon />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.aria.linkedin}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/60 shadow-sm text-neutral-500 dark:text-neutral-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <LinkedInIcon />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.aria.github}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/60 shadow-sm text-neutral-500 dark:text-neutral-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
