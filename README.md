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
    Contact.tsx                ← mailto contact form + info card
    Footer.tsx                 ← Responsive footer
    Cursor.tsx                 ← Custom cursor (client)
    ScrollReveal.tsx           ← Scroll animations (client)
    TocNav.tsx                 ← Scroll-tracked ToC (client)
```

---

## License

All Rights Reserved — Private Personal Use Only. See [LICENSE](./LICENSE).
