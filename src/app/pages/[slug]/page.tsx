import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return siteConfig.pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = siteConfig.pages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: `${page.title} — ${siteConfig.name}`, description: page.subtitle };
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function parseMarkdown(md: string): string {
  const lines = md.split("\n");
  const output: string[] = [];
  let inList = false;
  let inCodeBlock = false;
  let codeBlockLang = "";
  let codeBlockLines: string[] = [];

  for (const raw of lines) {
    const fence = raw.trim().match(/^```(\w*)$/);
    if (fence) {
      if (inCodeBlock) {
        const langClass = codeBlockLang ? ` class="language-${codeBlockLang}"` : "";
        output.push(`<pre><code${langClass}>${escapeHtml(codeBlockLines.join("\n"))}</code></pre>`);
        codeBlockLines = [];
        codeBlockLang = "";
        inCodeBlock = false;
      } else {
        if (inList) { output.push("</ul>"); inList = false; }
        inCodeBlock = true;
        codeBlockLang = fence[1];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(raw);
      continue;
    }

    const line = raw.trim();

    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      if (inList) { output.push("</ul>"); inList = false; }
      const text = h2[1].replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
      output.push(`<h2 id="${slugify(h2[1])}">${text}</h2>`);
      continue;
    }

    const h3 = line.match(/^### (.+)$/);
    if (h3) {
      if (inList) { output.push("</ul>"); inList = false; }
      const text = h3[1].replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
      output.push(`<h3 id="${slugify(h3[1])}">${text}</h3>`);
      continue;
    }

    const li = line.match(/^- (.+)$/);
    if (li) {
      if (!inList) { output.push("<ul>"); inList = true; }
      const text = li[1].replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
      output.push(`<li>${text}</li>`);
      continue;
    }

    if (inList) { output.push("</ul>"); inList = false; }

    if (line.trim() === "") {
      output.push("");
      continue;
    }

    const text = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
    output.push(`<p>${text}</p>`);
  }

  if (inList) output.push("</ul>");
  if (inCodeBlock) {
    const langClass = codeBlockLang ? ` class="language-${codeBlockLang}"` : "";
    output.push(`<pre><code${langClass}>${escapeHtml(codeBlockLines.join("\n"))}</code></pre>`);
  }

  return output.join("\n");
}

export default async function PageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = siteConfig.pages.find((p) => p.slug === slug);
  if (!page) notFound();

  const html = parseMarkdown(page.markdownContent);

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-16 bg-[#f9f9fb] dark:bg-[#111113]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Back breadcrumb */}
          <div className="mb-6 animate-fade-in-up">
            <a
              href="/pages"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] hover:-translate-x-0.5 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6 6 6" />
              </svg>
              {siteConfig.navigation.pages}
            </a>
          </div>

          {/* Header */}
          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {page.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {page.subtitle}
            </p>
          </div>

          {/* Full-width article */}
          <article
            className="prose-content animate-fade-in-up"
            style={{ animationDelay: "0.12s" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
