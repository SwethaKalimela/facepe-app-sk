# Prompt: Build / extend one section (FacePe)

## Context

- **Stack:** Vite, HTML, Tailwind, vanilla JS, Lucide, minimal GSAP.  
- **Design system:** `docs/design-system.md`, `docs/component-library.md`, `docs/responsive-system.md`.  
- **Figma:** `Jms4ZsFFmzbAI1LyBO0x1E` — reuse patterns from Home / Verify frames.

## Input from author

- Target **`section-id`** from `docs/page-architecture.md` (e.g. `products-grid-section`, `faq-section`).  
- Optional: CMS JSON shape later—keep markup **data-attribute friendly** (`data-section`, `data-cms="slug"`).

## Requirements

- **Semantic:** one section root `<section id="…" aria-labelledby="…">`.  
- **Spacing:** section `py-10 md:py-[60px]`; inner `max-w-[1240px] mx-auto` + horizontal padding per `docs/responsive-system.md`.  
- **Typography:** eyebrow (if any) = `12px` uppercase `brand-600` + `tracking-[1.32px]`; H2 = `44px` / `50px` leading where applicable.  
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
