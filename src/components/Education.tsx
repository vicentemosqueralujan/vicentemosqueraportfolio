import { siteConfig } from "@/config";
import { SectionLabel } from "./About";

export default function Education() {
  const { education } = siteConfig;

  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{education.sectionTitle}</SectionLabel>
        <div className="space-y-4">
          {education.items.map((edu, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl glass-card hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{edu.school}</h3>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">{edu.dateRange}</span>
              </div>
              <p className="text-sm font-medium mb-4" style={{ color: "var(--accent-color)" }}>
                {edu.degree}
              </p>
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="space-y-1.5">
                  {edu.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                      <span
                        className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--accent-color)", opacity: 0.5 }}
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
