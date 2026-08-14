function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function parseMarkdown(md: string): string {
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
