# Design System (FacePe — Figma source)

**Figma file:** `Face-pe-project` · `fileKey` `Jms4ZsFFmzbAI1LyBO0x1E`  
**Reference frames:** Home `3139:29850`, Verify `3139:31023`  
**Stack note:** Values below are the **canonical design tokens**. Implement them once in `tailwind.config.js` (`theme.extend`) and/or CSS variables—do not scatter one-off hex/radius values in markup.

---

## Colors

### Core ink (text)

| Token | Hex | Usage |
|--------|-----|--------|
| `ink-950` | `#0f1117` | Logo wordmark, primary button label on outline, strong labels |
| `ink-900` | `#212325` | Hero H1 (Home), dominant headings |
| `ink-800` | `#2a2d36` | Nav links, secondary UI chrome text |
| `ink-850` | `#2d3148` | Card titles (product tiles) |
| `ink-body` | `#1e1e1e` | Body copy, paragraph text |
| `brand-600` | `#5f15ee` | Accent words in headlines, eyebrow text, emphasis |

### Surfaces

| Token | Hex | Usage |
|--------|-----|--------|
| `surface-page` | `#fefeff` | Full-page background (Verify); slightly warm white |
| `surface-0` | `#ffffff` | Cards, nav bar, secondary surfaces |
| `lilac-50` | `#f9f6ff` | Hero device frame fill, soft panels |
| `lilac-100` | `#f0ebff` | Small circular icon wells (Fast / Secure / Accurate chips) |
| `lilac-200` | `#e0d5ff` | Dashed decorative frames around hero visual |
| `lilac-300` | `#d9c8fa` | Subtle shelf / base under device mockups |

### Borders

| Token | Hex | Usage |
|--------|-----|--------|
| `border-subtle` | `#e2e4eb` | Nav bottom border, outline primary buttons |
| `border-hairline` | `#efefef` | Floating chip borders |
| `border-neutral` | `#d9d9d9` | Icon tiles inside content cards |

### Primary CTA gradient

**Direction:** left → right (`bg-gradient-to-r` in Tailwind terms).

| Stop | Hex |
|------|-----|
| Start | `#9c6cfe` |
| End (~98%) | `#5000ea` |

**Shadow (primary pill):** `0 10px 7.5px rgba(0,0,0,0.1), 0 4px 3px rgba(0,0,0,0.1)` — keeps the CTA “floating” without neon glow.

### Decorative gradients (ambient)

Large blurred shapes use a **low-opacity** (~5%) blend of purples, e.g. stops around `rgb(91, 33, 255)` → `rgb(200, 174, 255)` → `rgb(157, 110, 255)`. Use sparingly behind heroes; never compete with text.

### CTA hierarchy

1. **Primary:** Gradient pill, white `Satoshi` bold `15–16px`, optional leading icon (`16×16`).
2. **Secondary:** White fill, `border-subtle`, `ink-950` label, pill radius slightly smaller than primary (`42px` height path vs `58px` radius family—normalize to `rounded-pill-secondary` / `rounded-pill` tokens).
3. **Tertiary:** Text link `Satoshi` bold `16px` (e.g. “Contact us”) same ink as nav.

---

## Typography

### Families (Figma)

| Role | Figma family | Web implementation |
|------|----------------|---------------------|
| Logo | **Aeonik Medium** | Load licensed font OR substitute **Inter** `font-semibold` with tracking tuned to match |
| UI + marketing | **Satoshi** (Regular / Medium / Bold) | Use Fontshare CDN or self-hosted; set as `font-sans` |
| Eyebrow / label | **TT Firs Neue** (Medium, uppercase) | Use **Inter** or **DM Sans** `font-medium` + letterspacing as token `eyebrow` |

### Scale (desktop, from frames)

| Style | Size | Weight | Tracking | Leading | Color |
|--------|------|--------|----------|---------|--------|
| Hero H1 (Home) | `64px` | Bold | `-2.38px` | `1.3` | `ink-900` |
| Hero H1 (Verify) | `68px` | Bold | `-2.38px` | `1.3` | `ink-900` + `brand-600` span |
| Hero supporting | `24px` (Home) / `20px` (Verify lead) | Regular | — | `normal` / tight | `ink-body` |
| Nav links | `14px` | Medium | — | `normal` | `ink-800` |
| Nav CTA text | `16px` | Bold | — | `normal` | `ink-800` / white on gradient |
| Section H2 | `44px` | Bold | `-1.32px` | `50px` | `ink-950` + optional `brand-600` |
| Section body | `18px` | Regular | — | `28px` | `ink-body` |
| Eyebrow | `12px` | Medium | `1.32px` (all caps) | `16px` | `brand-600` |
| Feature card title | `20px` | Bold | — | — | `#2d3148` (map to `ink-850` token) |
| Step / stat number | `14px` in `22px` circle | Bold | — | — | Inherits container |

### Hierarchy rhythm

1. Eyebrow (optional) → 12px / purple / wide tracking.  
2. H2 → 44px / tight tracking.  
3. Supporting line → 18px / `28px` leading.  
4. Grid of cards or split media.

---

## Spacing & layout

### Design canvas

- **Desktop composition width:** `1440px` artboard; **live content** aligns to **100px** side margins → **1240px** wide rows (`px-6` mobile → `sm:px-10` → `lg:px-[100px]` pattern).

### Vertical section rhythm

- Common section wrapper: **`py-[60px]`** with horizontal **`px-[100px]`** on desktop (from Verify hero + content strips).
- Large narrative blocks (e.g. “3 steps”): internal **top `193px` offset** between header cluster and card—use **~32–48px** mobile / **~64–96px** desktop as equivalent rhythm (do not copy raw pixel gaps on small screens).

### Component spacing

| Pattern | Value |
|---------|--------|
| Hero stack (title → sub) | `16px` gap (`gap-4`) |
| Hero sub → CTAs | `40px` gap (`gap-10`) |
| CTA pair | `14–20px` gap (`gap-3.5` / `gap-5`) |
| Nav items | `28px` gap between links; **`24px`** before CTA cluster |
| Product grid columns | ~`33px` gutter (`gap-8` approx) |

### Grid

- **4-up product cards:** `294px` column, `270px` card, **`12px`** inset (`p-3` gutter).
- **Stats / split sections:** asymmetric split (e.g. `~681px` + `~420px`) — stack on mobile, two-column `lg:`.

---

## Radius

| Element | Radius |
|---------|--------|
| Primary CTA pill | `58px` full pill (`rounded-full` if `h-14` / `h-[56px]`) |
| Secondary outline CTA | `42px` |
| Large content cards | `28px` |
| Small tiles / icon holders | `16px` |
| Step segmented control container | `~29px` outer, inner pills `22px` circles |

---

## Shadows

| Token | Value | Usage |
|--------|--------|--------|
| `shadow-card` | `0 4px 10px 4px rgba(0,0,0,0.04)` | Large white cards (Verify “How identity…” panel) |
| `shadow-chip` | `0 2px 2px rgba(0,0,0,0.1)` | Floating “Fast / Secure / Accurate” chips |
| `shadow-primary` | `0 10px 7.5px rgba(0,0,0,0.1), 0 4px 3px rgba(0,0,0,0.1)` | Primary gradient buttons |

---

## Iconography

- Figma uses **14–16px** chevrons / arrows next to links and buttons.
- In code: **Lucide** at `size={16}` (or `w-4 h-4`), `stroke-width` **1.5** for parity with thin marketing icons.

---

## Variable collections (Figma)

Published variable sample in file: **`Netural-white` → `#ffffff`**. Treat full palette as **documented above** until additional variables are published—extend tokens when Figma variables grow.
