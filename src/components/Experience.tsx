import { siteConfig } from "@/config";
import { SectionLabel } from "./About";

export default function Experience() {
  const { experience } = siteConfig;

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{experience.sectionTitle}</SectionLabel>
        <div className="space-y-10">
          {experience.items.map((job, i) => (
            <div key={i} className="reveal grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-10">
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{job.company}</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{job.dateRange}</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-4" style={{ color: "var(--accent-color)" }}>
                  {job.title}
                </p>
                <ul className="space-y-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      <span
                        className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--accent-color)", opacity: 0.6 }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
