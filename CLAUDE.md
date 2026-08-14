# CLAUDE.md — Private Portfolio Assistant

You are the AI collaborator for Vicente Mosquera Luján's **private, proprietary** portfolio application. This is not the public template — it is a personalized production build licensed All Rights Reserved (see `LICENSE`).

**Workspace boundary**: all file reads and writes for this project MUST stay within
`./vicentemosqueraportfolio`.
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

1. **Always edit `src/config.ts` first.** Direct the user there before touching any component — specifically, edit the localized `LocaleContent`/`translations` structures for user-facing copy, not `siteConfig`.
2. **Protect components.** Only modify files under `src/components/` or `src/app/` if the user explicitly requests a design or layout change.
3. **Enforce TypeScript types.** New projects, experience, education, or engineering pages must conform to the `Project`, `Experience`, `Education`, and `EngineeringPage` interfaces in `src/config.ts`.
4. **Maintain the design language.** When suggesting Tailwind classes, match the Apple-inspired SaaS Studio light/dark aesthetic — centralized typography, ambient radial gradients, balanced negative space. Do not introduce external component libraries.
5. **No hardcoded text in components.** All user-facing strings must originate from `src/config.ts` and be consumed via `useLanguage().t`. Never write literal names, titles, or labels directly into component JSX.
6. **Keep section spacing uniform.** Use the established section padding rhythm. Do not add ad-hoc margin/padding overrides that break vertical balance.
7. **No structural clutter.** Do not reintroduce sidebar social layouts, macOS mockup decorations, or asymmetric card grids. The canonical layout is centered, streamlined, and minimal.
8. **Single-column project layout.** `Projects.tsx` cards render one per line (stacked), never a multi-column grid.
9. **Left-align action elements.** Conditional action links ("View source", "Read page") must be left-aligned and intrinsically sized, not centered or full-width, and must hide when their backing config field is empty.
10. **Unified purple badge language.** Technology/skill badges in `About.tsx` and `Projects.tsx` share one purple-pill style driven by `var(--accent-color)` — do not fork badge styling per section.
11. **Markdown wrapping in engineering pages.** Inline lists and prose in `[slug]/page.tsx` must wrap and indent consistently with surrounding text; do not let list items overflow or lose indentation on narrow viewports.

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

## Localization Architecture (src/config.ts & i18n)

`src/config.ts` is split into two parts:

- **`siteConfig`** — shared, locale-independent data: `name`, `accentColorLight`/`accentColorDark`, social URLs, image paths, and other values that never change between languages.
- **`LocaleContent`** (type) — the full shape of translatable copy (navigation, hero, about, projects, experience, education, contact, footer, pages, aria labels, etc.). Each locale's concrete content lives in `src/i18n/translations.ts` as `translations.en` / `translations.es`, both conforming to `LocaleContent`.

Components no longer read static strings off `siteConfig`. Instead they call `useLanguage()` (from `src/context/LanguageContext.tsx`) and consume `t`, e.g. `const { t } = useLanguage(); t.hero.buttons.primary`. `LanguageProvider` holds the active `locale` in state (persisted to `localStorage` under `"language"`, initialized from that stored value or the default locale) and exposes `t = translations[locale]`.

Switching locale (via the navbar language switcher) calls `setLocale`, which updates state and `localStorage`, and a `LanguageProvider` effect sets `document.documentElement.lang = locale`. Because `t` is derived from React state, every consuming component — Hero, About, Projects, Experience, Education, Contact, Footer, Nav, and the `/pages` index and `/pages/[slug]` detail views — re-renders instantly with the new language. No page reload occurs.

Server-rendered metadata (`generateMetadata`, `generateStaticParams` in `src/app/pages/[slug]/page.tsx` and elsewhere) runs outside the client `LanguageProvider` and has no access to the active locale, so it always defaults to the English strings for SEO purposes (page titles, descriptions).

## Config Schema Notes

`hero.greeting` and `hero.buttons.secondary` were removed from `src/config.ts` as dead fields — the Hero section no longer reads a separate greeting string or a secondary CTA button. Do not reintroduce them; `hero` only defines `namePrefix` and `buttons.{primary,resume,resumeLoading}`.

`contact.form.validation` (`nameRequired`, `emailRequired`, `emailInvalid`, `messageRequired`) holds the localized inline-validation error strings consumed by `Contact.tsx` — see "Contact Form Validation" below. Add new validation copy here, not as literals in the component.

## Contact Form Validation

`Contact.tsx` implements its own inline validation instead of relying on native HTML5 tooltips:

- The `<form>` sets `noValidate` so the browser never renders its default validation bubble UI.
- Name, Email, and Project Details each validate on blur (`onBlur`) and on submit; a field's error clears the moment the user resumes typing in it (`onChange`).
- Errors render as a `<p>` directly below the field — themed with `text-red-500`/`dark:text-red-400`, an inline warning icon, and a matching red border on the input — consistent with the light/dark design system rather than forking a separate style.
- Email format is checked with a simple `@`/`.` regex in addition to the required-field check.
- Error copy is never hardcoded in the component: it comes from `t.contact.form.validation` (English source in `src/config.ts`, auto-translated per locale like all other copy — see Localization Architecture above).

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
