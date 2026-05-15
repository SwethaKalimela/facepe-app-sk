# Prompt: Build / extend one section (FacePe)

## Context

- **Stack:** Vite, HTML, Tailwind, vanilla JS, Lucide, minimal GSAP.  
- **Design system:** `docs/design-system.md`, `docs/component-library.md`, `docs/responsive-system.md`, and **`tailwind.config.js`** theme keys.  
- **Figma:** `Jms4ZsFFmzbAI1LyBO0x1E` — reuse patterns from Home / Verify frames.

## Input from author

- Target **`section-id`** from `docs/page-architecture.md` (e.g. `products-grid-section`, `faq-section`).  
- Optional: CMS JSON shape later—keep markup **data-attribute friendly** (`data-section`, `data-cms="slug"`).

## Requirements

- **Semantic:** one section root `<section id="…" aria-labelledby="…">`.  
- **Spacing:** section `py-10 lg:py-section-y`; inner `max-w-content mx-auto px-4 sm:px-8 lg:px-gutter`.
- **Typography:** use `text-eyebrow` / `text-heading-2` / `text-body-lg` etc. from `tailwind.config.js` where applicable; eyebrow purple + wide tracking per `docs/design-system.md`.  
- **CTAs:** max **1 primary + 1 secondary** in hero-like sections; elsewhere text links with chevron.  
- **Icons:** Lucide only, `16px` in buttons, `14px` in inline links where Figma shows smaller chevrons.

## Responsive

- Mobile: single column; split heroes → **image below copy**.  
- `md+`: introduce grids per component doc.

## Motion

- Subtle `opacity` + small `translateY` on enter; respect `prefers-reduced-motion`.

## DO NOT

- Add sections not in the architecture doc without updating that doc first  
- Use one-off arbitrary values that belong in `tailwind.config.js`  
- Block keyboard focus inside carousels without full a11y behavior
