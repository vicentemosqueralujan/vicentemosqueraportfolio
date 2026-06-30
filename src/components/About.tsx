import { siteConfig } from "@/config";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        {children}
      </h2>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{siteConfig.about.sectionTitle}</SectionLabel>
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <p className="reveal text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {siteConfig.about.body}
          </p>
          <div className="reveal">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-5">{siteConfig.about.skillsLabel}</p>
            <div className="flex flex-wrap gap-2">
              {siteConfig.about.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border transition-colors duration-200"
                  style={{
                    color: "var(--accent-color)",
                    borderColor: "color-mix(in srgb, var(--accent-color) 30%, transparent)",
                    backgroundColor: "color-mix(in srgb, var(--accent-color) 8%, transparent)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
