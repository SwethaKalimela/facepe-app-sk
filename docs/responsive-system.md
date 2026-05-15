# Responsive System (FacePe)

## Design baseline

- Figma desktop frames: **`1440px`** wide; primary content **`max-w-content`** (**1240px**) + **`px-gutter`** (**100px**) side padding (`tailwind.config.js`).
- Home scroll height **`~11812px`** — sections **reflow**; never scale typography with `vw` alone.

## Breakpoints (Tailwind defaults)

| Token | Width | FacePe behavior |
|-------|-------|------------------|
| default | `<640px` | Single column; nav drawer; hero CTAs **stack**; **hide** decorative lines/stars |
| `sm` | `≥640px` | Comfortable `px-4` / `px-6`; still mostly single column for complex splits |
| `md` | `≥768px` | 2-column grids (product cards **2×2**) |
| `lg` | `≥1024px` | **`px-gutter`** + split heroes; FAQ **two-column** + `gap-faq-split` |
| `xl` | `≥1280px` | Full marketing grids (**4-up** products) |
| `2xl` | `≥1536px` | Center content; cap prose **`max-w-prose`** / **`~65ch`** inside wide bands |

## Containers (token-first)

```text
Outer: w-full
Inner: max-w-content mx-auto px-4 sm:px-8 lg:px-gutter
```

Avoid duplicating **`100px`** in markup—use **`px-gutter`** from theme.

## Typography scaling

| Element | Mobile | `lg+` (Figma) |
|---------|--------|----------------|
| Hero H1 (Home) | `text-4xl` / `sm:text-5xl` | `text-display-home` |
| Hero H1 (Verify) | `text-4xl sm:text-5xl` | `text-display-verify` |
| Section H2 | `text-2xl sm:text-3xl` | `text-heading-2` |
| FAQ H2 | same as H2 path | `text-heading-faq` |
| Body / FAQ intro | `text-base` | `text-body-lg` |
| FAQ answer | `text-sm` | `text-body-faq` |
| Eyebrow | `text-xs` uppercase | `text-eyebrow` or `text-faq-badge` |

**Rule:** change **font-size and line-height together**; do not crush heading `line-height` below **1.2** equivalent.

## Grid rules

- **Products:** `grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8`.
- **FAQ:** `flex-col lg:flex-row lg:gap-faq-split`; right column `w-full lg:max-w-[640px]`.

## Vertical rhythm

- Default section: **`py-10`** mobile → **`lg:py-section-y`** (**60px**).
- Footer: **`lg:py-section-y-footer`** (**74px**).

## Touch targets

- FAQ **`32px`** toggles → **`min-h-11 min-w-11`** (**44px**) hit slop.
- Footer social **`36px`** → wrap with **`p-1`** or **`min-w-11`** to reach **44px**.

## Performance

- Decorative layers: `hidden md:block` or `max-md:opacity-0 max-md:pointer-events-none` so mobile does less paint.
