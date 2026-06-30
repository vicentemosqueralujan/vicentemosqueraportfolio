"use client";

import { useState } from "react";
import { siteConfig } from "@/config";

export default function DownloadResumeButton({ label }: { label: string }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const { jsPDF } = await import("jspdf");
    const { accentColorLight, accentColorDark, name, title, social, about, experience, education } = siteConfig;

    const isDark = document.documentElement.classList.contains("dark");

    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 18;
    const contentW = pageW - margin * 2;
    let y = 0;

    const hex = (h: string) => ({
      r: parseInt(h.slice(1, 3), 16),
      g: parseInt(h.slice(3, 5), 16),
      b: parseInt(h.slice(5, 7), 16),
    });

    const ac = hex(isDark ? accentColorDark : accentColorLight);
    // Dark mode palette: near-black background, high-contrast light text
    const bg   = isDark ? { r: 15,  g: 15,  b: 19  } : null;
    const txt  = isDark ? { r: 226, g: 232, b: 240 } : { r: 40,  g: 40,  b: 40  };
    const sub  = isDark ? { r: 148, g: 163, b: 184 } : { r: 100, g: 100, b: 100 };
    const body = isDark ? { r: 203, g: 213, b: 225 } : { r: 60,  g: 60,  b: 60  };

    const fillPageBg = () => {
      if (!bg) return;
      doc.setFillColor(bg.r, bg.g, bg.b);
      doc.rect(0, 0, pageW, pageH, "F");
    };

    fillPageBg();

    const checkY = (need: number) => {
      if (y + need > 277) { doc.addPage(); fillPageBg(); y = margin; }
    };

    // Header
    doc.setFillColor(ac.r, ac.g, ac.b);
    doc.rect(0, 0, pageW, 42, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text(name, margin, 18);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(title, margin, 27);
    const contacts = [
      social?.email,
      social?.linkedin?.replace("https://", ""),
      social?.github?.replace("https://", ""),
    ].filter(Boolean).join("  |  ");
    doc.text(contacts, margin, 36);
    y = 52;

    const sectionHeader = (t: string) => {
      checkY(10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(ac.r, ac.g, ac.b);
      doc.text(t.toUpperCase(), margin, y);
      doc.setDrawColor(ac.r, ac.g, ac.b);
      doc.setLineWidth(0.4);
      doc.line(margin, y + 1.5, margin + contentW, y + 1.5);
      y += 6;
      doc.setTextColor(txt.r, txt.g, txt.b);
    };

    const bodyText = (text: string, indent = 0) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(body.r, body.g, body.b);
      const lines = doc.splitTextToSize(text, contentW - indent);
      checkY(lines.length * 4.5);
      doc.text(lines, margin + indent, y);
      y += lines.length * 4.5;
    };

    sectionHeader("Profile");
    bodyText(about.body);
    y += 4;

    sectionHeader("Skills");
    bodyText(about.skills.join("  ·  "));
    y += 4;

    sectionHeader("Experience");
    for (const exp of experience.items) {
      checkY(12);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(txt.r, txt.g, txt.b);
      doc.text(exp.title, margin, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(sub.r, sub.g, sub.b);
      doc.text(exp.dateRange, pageW - margin - doc.getTextWidth(exp.dateRange), y);
      y += 4.5;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(ac.r, ac.g, ac.b);
      doc.text(exp.company, margin, y);
      y += 5;
      for (const bullet of exp.bullets) {
        doc.setTextColor(body.r, body.g, body.b);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        const lines = doc.splitTextToSize(`• ${bullet}`, contentW - 4);
        checkY(lines.length * 4.2);
        doc.text(lines, margin + 2, y);
        y += lines.length * 4.2;
      }
      y += 3;
    }

    sectionHeader("Education");
    for (const edu of education.items) {
      checkY(10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(txt.r, txt.g, txt.b);
      doc.text(edu.degree, margin, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(sub.r, sub.g, sub.b);
      doc.text(edu.dateRange, pageW - margin - doc.getTextWidth(edu.dateRange), y);
      y += 4.5;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(ac.r, ac.g, ac.b);
      doc.text(edu.school, margin, y);
      y += 5;
    }

    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const filename = `${slug}-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}-${pad(now.getHours())}-${pad(now.getMinutes())}.pdf`;
    doc.save(filename);
    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      aria-label={label}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold border tracking-wide transition-all duration-200 hover:-translate-y-px active:translate-y-0 glass-card disabled:opacity-60 disabled:cursor-wait"
      style={{ color: "var(--accent-color)", borderColor: "color-mix(in srgb, var(--accent-color) 40%, transparent)" }}
    >
      {loading ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          <path d="M7 11l5 5 5-5" />
          <path d="M12 4v12" />
        </svg>
      )}
      {loading ? siteConfig.hero.buttons.resumeLoading : label}
    </button>
  );
}
