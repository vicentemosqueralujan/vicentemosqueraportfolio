# CLAUDE.md — Private Portfolio Assistant

You are the AI collaborator for Vicente Mosquera Luján's **private, proprietary** portfolio application. This is not the public template — it is a personalized production build licensed All Rights Reserved (see `LICENSE`).

**Workspace boundary**: all file reads and writes for this project MUST stay within
`/home/xatvml/Documents/myprojects/my-workspace/workdesk/my_resume_page/vicentemosqueraportfolio`.
Do not reference or operate on any other workspace path, including prior or sibling copies of this template.

If a user asks how to get the public, reusable version of this layout, point them to the open-source template at https://github.com/vicentemosqueralujan/nebulaportfolio rather than treating this repo as a template source.

## Agent Role

Help users:
- Populate `src/config.ts` with their own personal data
- Change the color theme via `accentColorLight` / `accentColorDark` in `src/config.ts`
- Add, remove, or reorder sections
- Add engineering pages to the `/pages` system
- Deploy to Vercel, Netlify, or Cloudflare Pages

## Operational Rules

1. **Always edit `src/config.ts` first.** Direct the user there before touching any component.
2. **Protect components.** Only modify files under `src/components/` or `src/app/` if the user explicitly requests a design or layout change.
3. **Enforce TypeScript types.** New projects, experience, education, or engineering pages must conform to the `Project`, `Experience`, `Education`, and `EngineeringPage` interfaces in `src/config.ts`.
4. **Maintain the design language.** When suggesting Tailwind classes, match the Apple-inspired SaaS Studio light/dark aesthetic — centralized typography, ambient radial gradients, balanced negative space. Do not introduce external component libraries.
5. **No hardcoded text in components.** All user-facing strings must originate from `src/config.ts`. Never write literal names, titles, or labels directly into component JSX.
6. **Keep section spacing uniform.** Use the established section padding rhythm. Do not add ad-hoc margin/padding overrides that break vertical balance.
7. **No structural clutter.** Do not reintroduce sidebar social layouts, macOS mockup decorations, or asymmetric card grids. The canonical layout is centered, streamlined, and minimal.

## Developer Execution Playbook

### Development Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server at http://localhost:3000
npm run build        # production build (run before every GitHub push)
npm run start        # serve production build locally
```

### Pre-Push Checklist

1. `npm run build` — must complete with zero errors and zero TypeScript diagnostics.
2. Verify no `.env.local` or `.next/` artifacts are staged (`git status`).
3. Confirm `src/config.ts` is the only file changed for content updates.

### TypeScript Compilation

- `tsconfig.json` controls all compilation. Path alias `@/*` maps to `./src/*`.
- `next.config.ts` must remain a minimal `NextConfig` export — do not add experimental flags unless tested.
- Never remove `"noEmit": true` from `tsconfig.json`; Next.js handles emit via its own pipeline.
- Run `npx tsc --noEmit` to validate types without triggering a full build.

### Styling Rules (Enforced)

- **Theme token**: use `var(--accent-color)` for any accent-colored element. Never hardcode accent hex values in components.
- **Dark mode**: use `dark:` Tailwind variants. The `.dark` class is applied to `<html>` by the FOUC script.
- **Typography**: `font-sans` (system font stack). No external font imports.
- **Backgrounds**: `bg-[#f5f5f7]` light / `dark:bg-[#1d1d1f]` dark. No solid black or pure white.
- **Radial glows**: defined in `globals.css`. Do not replicate inline.

## Project Overview

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript 5
- **Content source**: `src/config.ts` (Centralized Data Engine — single source of truth)

## Architecture

```
src/
  config.ts                    ← Edit this first. All content lives here.
  app/
    layout.tsx                 ← Root layout, FOUC script, accent CSS var injection
    page.tsx                   ← Single-page layout, imports all sections
    globals.css                ← Base styles, CSS custom properties, prose/animation utilities
    pages/
      page.tsx                 ← /pages index (engineering pages list)
      [slug]/page.tsx          ← /pages/[slug] detail with ToC sidebar
  components/
    Nav.tsx                    ← Fixed top nav: hamburger mobile, desktop/mobile theme toggle
    Hero.tsx                   ← Full-screen hero with centered inline socials
    About.tsx                  ← Bio and skills
    Projects.tsx               ← Project cards grid with optional page deep-dive links
    Experience.tsx             ← Work history timeline
    Education.tsx              ← Education cards
    Contact.tsx                ← Contact section: mailto form + info card
    Footer.tsx                 ← Responsive footer with social icons and nav links
    Cursor.tsx                 ← Custom cursor effect (client component)
    ScrollReveal.tsx           ← IntersectionObserver scroll animations (client component)
    TocNav.tsx                 ← Scroll-tracked ToC sidebar for /pages/[slug] (client component)
```

## Theme Customization

Change the two accent values at the top of `src/config.ts`:

```ts
accentColorLight: "#6366f1",  // used in light mode
accentColorDark:  "#a855f7",  // used in dark mode
```

Propagates automatically via `--accent-color` CSS custom property. No other files need editing.

## Dark / Light Mode

- Mode stored in `localStorage` under key `"theme"`.
- Defaults to OS preference via `prefers-color-scheme`.
- FOUC-prevention inline script in `layout.tsx` applies `.dark` to `<html>` before first paint.
- Toggle available in both desktop nav and mobile menu.

## Engineering Pages System

Pages live in `src/config.ts` under the `pages` array. Each entry:

```ts
{
  id: string;
  title: string;
  subtitle: string;
  slug: string;              // URL: /pages/[slug]
  markdownContent: string;   // supports ## h2, ### h3, **bold**, `code`, - lists
}
```

Add `pageSlug` to any project in `projects.items` to link the project card to its detail page.

## Deployment

```bash
npm run build
```

Deploy to Vercel (recommended), Netlify, or Cloudflare Pages. Never commit `.next/`, `node_modules/`, `.env*`, or `*.tsbuildinfo`.
