# Vicente Mosquera Luján — Portfolio

Personal portfolio site. Apple-inspired SaaS Studio aesthetic, dual-theme ambient radials, centered inline socials, config-driven content engine.

> ⚠️ **Looking for the Template?** This specific repository is a highly customized, private production build. If you wish to use this premium minimalist portfolio architecture for your own personal use, please navigate to the official public open-source repository: https://github.com/vicentemosqueralujan/nebulaportfolio

---

## Status

This is a **private, proprietary repository**. It is not licensed for reuse, redistribution, or derivative deployments — see [LICENSE](./LICENSE).

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript 5 |
| Deployment | Vercel |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build — run before every push
npm run start   # serve production build locally
```

---

## Content

All personal content, theme colors, and layout flags live in `src/config.ts` — the single source of truth for this site. No component edits are needed for content or color changes.

Content is authored once, in English, and machine-translated at runtime for every other locale (ES, CA, FR, ZH) — see `src/i18n/translate.ts`. Technical skill terms and technology tags are the exception: `about.skills` (the "About Me" skill list) and each project's `skills` array always stay in raw English across all locales, since terms like "Docker" or "Kubernetes" shouldn't be translated. This is enforced by `SKIP_KEYS` in `src/i18n/translate.ts`, not per-component logic.

---

## UI Conventions

- **Project cards**: single-column, one-per-line stack layout — no grid — for a sleek, scannable read on all viewport widths.
- **Action links**: "View source" and "Read page" render left-aligned and intrinsically sized (not full-width buttons); each hides automatically when its underlying data field (`repoUrl` / `pageSlug`) is empty.
- **Technology badges**: cohesive purple-pill styling, shared between the "About Me" skills list and the "Projects" tech tags, using `var(--accent-color)`-based tinting.
- **Subpage navigation**: the return-to-pages link on `/pages/[slug]` is enlarged and left-aligned for high visibility; inline markdown lists wrap and indent consistently with the surrounding prose.

---

## Project Structure

```
src/
  config.ts                    ← Edit this first. All content lives here.
  app/
    layout.tsx                 ← Root layout: FOUC script, accent CSS var injection
    page.tsx                   ← Home (assembles all sections)
    globals.css                ← Base styles, animations, prose utilities
    pages/
      page.tsx                 ← /pages index
      [slug]/page.tsx          ← /pages/[slug] detail with ToC
  components/
    Nav.tsx                    ← Fixed header: hamburger + dual-position theme toggle
    Hero.tsx                   ← Full-screen hero with centered inline socials
    About.tsx                  ← Bio + skill badges
    Projects.tsx               ← Project cards grid with optional deep-dive links
    Experience.tsx             ← Work history timeline
    Education.tsx              ← Education cards
    Contact.tsx                ← mailto contact form + info card (custom inline validation, see below)
    Footer.tsx                 ← Responsive footer
    Cursor.tsx                 ← Custom cursor (client)
    ScrollReveal.tsx           ← Scroll animations (client)
    TocNav.tsx                 ← Scroll-tracked ToC (client)
    DownloadResumeButton.tsx   ← jsPDF résumé generator (client, see PDF Résumé Export below)
  lib/
    pdfFonts.ts                ← CJK font detection + lazy jsPDF font embedding
public/
  fonts/
    NotoSansSC-Regular-subset.ttf  ← Lazy-fetched CJK font for PDF export
    NotoSansSC-OFL.txt             ← Font license (SIL OFL 1.1)
```

---

## Contact Form Validation

`Contact.tsx` uses its own inline validation instead of native browser tooltips:

- The `<form>` has `noValidate`, so the browser never shows its default validation bubbles.
- Name, Email, and Project Details are validated on submit and on blur (`onBlur`); an error clears as soon as the user types again (`onChange`).
- Errors render as a themed message directly below the field (red text + icon, red border highlight on the input), matching light/dark mode.
- Error copy comes from `contact.form.validation` in `src/config.ts` (`nameRequired`, `emailRequired`, `emailInvalid`, `messageRequired`) and is localized like all other content — see the Localization section above.

---

## PDF Résumé Export

`DownloadResumeButton.tsx` generates the résumé PDF client-side with `jsPDF`, pulling copy straight from the active locale (`useLanguage().t`) so the download always matches whatever language is on screen.

jsPDF's built-in `helvetica` font only covers Latin/WinAnsi glyphs — rendering Chinese (`zh`) content with it produced mojibake/blank tofu boxes instead of characters. `src/lib/pdfFonts.ts` fixes this:

- `containsCJK(text)` scans the résumé's combined text (name, title, about, skills, experience, education) for CJK Unified Ideographs / CJK punctuation / fullwidth-form code points — locale-agnostic, so it also covers any future CJK locale (ja/ko), not just `zh`.
- If CJK text is detected, `ensureCJKFont(doc)` lazy-fetches a subsetted **Noto Sans SC** TrueType font from `public/fonts/NotoSansSC-Regular-subset.ttf` (glyf-outline TTF — jsPDF can only embed `glyf` fonts, not CFF/OTF builds) and registers it into the `jsPDF` instance via `addFileToVFS` + `addFont`. The fetch is cached in-memory so repeat downloads in the same session don't refetch the ~7 MB font.
- The font is only fetched when needed (non-CJK résumés never pay the download cost), and only covers a regular weight — bold/italic styling is dropped for CJK runs, with headings staying visually distinct via color and size instead.
- If the font fails to load (offline, blocked request, etc.), generation falls back to `helvetica` rather than throwing, and a console warning is logged.
- Font is Google's Noto Sans SC, SIL Open Font License 1.1 — see `public/fonts/NotoSansSC-OFL.txt`.

---

## License

All Rights Reserved — Private Personal Use Only. See [LICENSE](./LICENSE).
