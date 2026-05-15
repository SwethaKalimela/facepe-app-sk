# Prompt: Build reusable UI component (FacePe)

## References

- `docs/component-library.md` — authoritative measurements  
- `docs/design-system.md` — tokens  
- `.cursor/rules/component-rules.mdc`, `tailwind-rules.mdc`, `naming-rules.mdc`

## Tech

- **Tailwind** + small `@layer components` only if the same 15+ classes repeat **3+** times.  
- **Icons:** Lucide (`createIcons` or inline SVG from Lucide sprite pattern used in repo).  
- **JS:** minimal, `data-*` hooks (`data-accordion`, `data-nav-toggle`, …).

## Component targets (examples)

- `primary-button`, `secondary-button`, `text-link-chevron`  
- `product-card`, `stat-row`, `faq-item`, `site-header`, `site-footer`  
- `eyebrow`, `section-heading` (title + optional description stack)

## Visual rules (from Figma)

- **Primary button:** `h-14`, gradient `9c6cfe → 5000ea`, `shadow-primary`, `rounded-pill`, `text-white font-bold text-[15px]` or `text-base` per context.  
- **Secondary button:** white + `border-border-subtle` + `text-ink-950` + `rounded-[42px]` (tokenize).  
- **Cards:** `rounded-card`, `shadow-card`, `p-6` / `p-8`.

## Accessibility

- Real `<button>` for interactive controls; links use `<a href>`.  
- Focus rings visible (see `accessibility-rules.mdc`).

## DO NOT

- Hardcode marketing copy inside JS—keep copy in HTML for CMS swap later  
- Create a new radius family (no `rounded-md` cards if cards are `28px` system-wide)
