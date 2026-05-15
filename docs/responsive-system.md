# Responsive System (FacePe)

## Design baseline

- Figma desktop frames are **`1440px`** wide; content column **`1240px`** with **`100px`** side gutters.
- Home artboard height **`~11812px`** — long-scroll marketing; components must **reflow**, not shrink arbitrarily.

## Breakpoints (Tailwind defaults + meaning)

| Token | Width | FacePe behavior |
|-------|-------|------------------|
| default | `<640px` | Single column; nav drawer; hero CTAs **stack**; reduce decorative layers to **zero** if needed |
| `sm` | `≥640px` | Comfortable padding; stat + image sections still mostly stacked |
| `md` | `≥768px` | Introduce **2-column** grids (product cards 2×2) |
| `lg` | `≥1024px` | Full **100px** gutters; split heroes side-by-side |
| `xl` | `≥1280px` | Matches **1240** inner width comfortably |
| `2xl` | `≥1536px` | Center `max-w-[1240px]`; **do not** stretch text lines beyond ~`65ch` |

## Containers

```text
page: w-full
inner: max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-[100px]
```

On **`2xl`**, horizontal padding can remain `100px` **or** switch to auto centering only—pick one pattern project-wide.

## Typography scaling

| Element | Mobile | `lg+` (Figma) |
|---------|--------|----------------|
| Hero H1 | `text-4xl` / `tracking-tight` | `text-[64px]` or `text-6xl` if token-snapped |
| Verify H1 | `text-4xl` → `text-5xl` | `text-[68px]` token |
| Section H2 | `text-2xl` | `text-[44px]` leading `[50px]` |
| Body | `text-base` leading-7 | `text-lg` `leading-[28px]` |
| Eyebrow | `text-xs` uppercase | `text-[12px]` `tracking-[1.32px]` |

**Rule:** shrink by **step** (font-size + line-height together), never compress line-height alone below `1.25` on headings.

## Grid rules

- **Product 4-up:** `grid-cols-1` → `md:grid-cols-2` → `xl:grid-cols-4` with `gap-8` (~`32px`).
- **FAQ:** `flex-col` → `lg:flex-row` with left intro **`~406px`** max, right list **`640px`** equivalent (`lg:w-[640px]` / `flex-1`).

## Spacing rhythm

- Section: **`60px`** vertical padding desktop; mobile **`40px`** minimum.
- Hero top: preserve **breathing room** (`pt-24` mobile, `pt-32` desktop) so nav + headline never collide.

## Content stacking logic

1. Eyebrow → heading → body → CTAs → media (media **below** copy on mobile for hero splits).
2. For **stats-on-image** cards: stack image on top, stats below, on narrow screens.

## Touch & tap targets

- FAQ `32px` icon buttons → expand hit area to **`44px`** minimum with invisible padding.
- Footer social **`36px`** → increase to **`44px`** tap zone.

## Performance

- Hide purely decorative SVG/lines on **`max-md`** via CSS (not conditional JS).
