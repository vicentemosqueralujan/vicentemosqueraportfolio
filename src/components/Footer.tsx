import { siteConfig } from "@/config";

const { navigation, projects, experience, education } = siteConfig;
const hasProjects = projects.items.length > 0;
const hasExperience = experience.items.length > 0;
const hasEducation = education.items.length > 0;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f9f9fb] dark:bg-[#111113] border-t border-neutral-200/70 dark:border-neutral-800/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Branding + social */}
          <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
              {siteConfig.title}
            </p>
            <div className="flex gap-4 text-gray-500 dark:text-gray-500">
              {siteConfig.social?.email && (
                <a href={`mailto:${siteConfig.social.email}`} aria-label={siteConfig.social.aria.email} className="hover:text-[var(--accent-color)] transition-colors duration-200 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </a>
              )}
              {siteConfig.social?.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={siteConfig.social.aria.linkedin} className="hover:text-[var(--accent-color)] transition-colors duration-200 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" />
                    <path d="M16 16v-3a2 2 0 1 0-4 0" />
                    <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
                  </svg>
                </a>
              )}
              {siteConfig.social?.github && (
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label={siteConfig.social.aria.github} className="hover:text-[var(--accent-color)] transition-colors duration-200 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Nav links + copyright */}
          <div className="flex flex-col items-center text-center md:items-end gap-5">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-end">
              <a href="/#hero" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:-translate-y-px">{navigation.home}</a>
              <a href="/#about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:-translate-y-px">{navigation.about}</a>
              {hasProjects && (
                <a href="/#projects" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:-translate-y-px">{navigation.projects}</a>
              )}
              {hasExperience && (
                <a href="/#experience" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:-translate-y-px">{navigation.experience}</a>
              )}
              {hasEducation && (
                <a href="/#education" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:-translate-y-px">{navigation.education}</a>
              )}
              <a href="/pages" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:-translate-y-px">{navigation.pages}</a>
              <a href="/#contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 hover:-translate-y-px">{navigation.contact}</a>
            </nav>
            <p className="text-xs text-gray-400 dark:text-gray-600">
              © {year} {siteConfig.name}. {siteConfig.footer.copyright}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-700">
              {siteConfig.footer.builtWithLabel}{" "}
              <a href={siteConfig.footer.builtWithUrl} className="hover:text-gray-600 dark:hover:text-gray-500 transition-colors">
                {siteConfig.footer.builtWithName}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
