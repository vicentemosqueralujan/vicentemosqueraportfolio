import { siteConfig } from "@/config";
import { SectionLabel } from "./About";

function ProjectCard({ project, index }: { project: typeof siteConfig.projects.items[number]; index: number }) {
  const { projects } = siteConfig;

  return (
    <div
      className="reveal group relative rounded-2xl glass-card hover:border-[color-mix(in_srgb,var(--accent-color)_50%,transparent)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(99,102,241,0.10)] transition-all duration-300 overflow-hidden"
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base group-hover:text-[var(--accent-color)] transition-colors duration-200">
            {project.name}
          </h3>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
          {project.description}
        </p>
        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] px-2.5 py-1 rounded-xl bg-white dark:bg-neutral-800/60 shadow-sm border border-neutral-100 dark:border-neutral-700/50 text-neutral-500 dark:text-neutral-400 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {(project.link || project.pageSlug) && (
          <div className="flex flex-col gap-2 mt-auto">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.name}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-semibold text-sm bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {projects.sourceCodeLabel}
              </a>
            )}
            {project.pageSlug && (
              <a
                href={`/pages/${project.pageSlug}`}
                aria-label={`${projects.deepDiveLabel}: ${project.name}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-semibold text-sm border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 12h6M9 16h6M9 8h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
                {projects.deepDiveLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


export default function Projects() {
  const { projects } = siteConfig;

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{projects.sectionTitle}</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.items.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
