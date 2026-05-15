# Prompt: Build marketing page (FacePe)

You are implementing **static HTML** in a **HTML + Tailwind CDN + vanilla JS** repo (no Vite, npm, or bundler). Visual source: Figma file `Jms4ZsFFmzbAI1LyBO0x1E` (Home `3139:29850`, Verify `3139:31023`).

## Mandatory reading (project)

- `docs/design-system.md` — colors, type, radii, shadows  
- `docs/page-architecture.md` — section order + **section IDs**  
- `docs/component-library.md` — component specs  
- `docs/responsive-system.md` — breakpoints + stacking  
- `docs/animation-system.md` + `.cursor/rules/animation-rules.mdc`  
- `.cursor/rules/tailwind-rules.mdc`, `component-rules.mdc`, `accessibility-rules.mdc`, `naming-rules.mdc`

## Stack constraints

- **HTML** partials under `components/`, pages under `pages/`; assemble with `js/load-partial.js` + `fetch` (no bundler)  
- **CSS:** Tailwind Play CDN + `js/tailwind-config.js` + `styles/globals.css` + `styles/animations.css`  
- **Tailwind** only for styling; **use the tokens already defined** in `tailwind.config.js`—avoid raw hex in markup  
- **Links:** page-relative (`verify.html`, not `/verify.html`) because pages live in `pages/`  
- **Icons:** **Lucide** via import map + `createIcons` (`stroke-width` **1.5**, `16px` default)  
- **Motion:** **GSAP** only where `docs/animation-system.md` allows; prefer CSS + `IntersectionObserver`  
- **Local preview:** static server required for `fetch` partials (`npx serve .` or Live Server)

## Page structure template

1. `site-header` (sticky, `100px` height pattern)  
2. `main`  
3. Sections in **exact** order from `docs/page-architecture.md` for the target page  
4. `site-footer`

## Design fidelity

- **Nav / CTAs / hero** must match theme utilities (`bg-gradient-primary`, `text-ink-*`, `border-border-subtle`, `rounded-pill-secondary`, …).  
- **Do not** invent new section types or accent colors.  
- **Decorative** grid lines/stars: `aria-hidden="true"`; omit on small screens if cluttered.

## SEO

- Follow `docs/seo-system.md` (one `h1`, `FAQPage` where FAQ exists).

## DO NOT (this prompt)

- Generate unrelated backend or CMS code  
- Add a second brand gradient or heavy glassmorphism  
- Use inline `style=""` for things that belong in theme tokens  
- Swap Lucide for random SVG asset packs unless matching an existing Figma export
