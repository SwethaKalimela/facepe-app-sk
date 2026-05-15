# Design System (FacePe — Figma source)

**Figma file:** `Face-pe-project` · `fileKey` `Jms4ZsFFmzbAI1LyBO0x1E`  
**Homepage frame:** `3139:29850` (deep pass: nav `3139:29852`, hero `3139:29938`, FAQ `3139:30758`, footer `3139:30809`, bridge CTA `3139:30208`)  
**Also aligned:** Verify `3139:31023`

**Implementation:** `tailwind.config.js` is the **runtime token map**—use utilities like `text-ink-800`, `px-gutter`, `shadow-card`. This doc is the rationale + Figma numbers.

---

## Tailwind ↔ token map (quick reference)

| Concept | Config path | Example utilities |
|---------|-------------|---------------------|
| Page gutters | `theme.spacing.gutter` | `px-gutter` |
| Section vertical | `theme.spacing.section-y` | `py-section-y` |
| Footer vertical | `theme.spacing.section-y-footer` | `py-section-y-footer` |
| Content max width | `theme.maxWidth.content` | `max-w-content` |
| Primary gradient | `theme.backgroundImage.gradient-primary` | `bg-gradient-primary` |
| FAQ column gap | `theme.spacing.faq-split` | `gap-faq-split` (desktop) |

---

## Colors

### Ink (text on light)

| Token | Hex | Usage |
|--------|-----|--------|
| `ink-950` | `#0f1117` | Logo wordmark, strong UI, FAQ questions, outline CTA text |
| `ink-900` | `#212325` | Home hero H1 |
| `ink-850` | `#2d3148` | Product card titles |
| `ink-800` | `#2a2d36` | Nav links, secondary chrome |
| `ink-700` | `#5e6472` | FAQ answer body (MCP `3139:30781`) |
| `ink-body` | `#1e1e1e` | Marketing body, FAQ intro |

### Brand

| Token | Hex | Usage |
|--------|-----|--------|
| `brand-600` | `#5f15ee` | Accent headlines, eyebrow text, FAQ pill dot |

### Surfaces (light)

| Token | Hex | Usage |
|--------|-----|--------|
| `surface-page` | `#fefeff` | Alternate page wash (Verify) |
| `surface-0` | `#ffffff` | Nav, cards, main field |
| `lilac-25` | `#f5f0ff` | FAQ “FAQ” pill background (MCP) |
| `lilac-50` | `#f9f6ff` | Soft panels, device frames |
| `lilac-100` | `#f0ebff` | Icon wells |
| `lilac-200` | `#e0d5ff` | Dashed frames, FAQ pill border |
| `lilac-300` | `#d9c8fa` | Device base / shelf |

### Borders

| Token path | Hex | Border utility |
|------------|-----|----------------|
| `border.subtle` | `#e2e4eb` | `border-border-subtle` |
| `border.hairline` | `#efefef` | `border-border-hairline` |
| `border.neutral` | `#d9d9d9` | `border-border-neutral` |

### Primary CTA gradient

Linear **90deg**, `#9c6cfe` → `#5000ea` with end stop **~98%** (`bg-gradient-primary` in config).

**Shadow:** `shadow-primary` — `0 10px 7.5px rgba(0,0,0,0.1), 0 4px 3px rgba(0,0,0,0.1)`.

### Footer (dark band — Home `3139:30809`)

| Token | Value | Usage |
|--------|--------|--------|
| `footer-bg` | `#0f1117` | Same as `ink-950`; full-width footer |
| `footer-label` | `#c4aaff` | Column titles (**JetBrains Mono** uppercase) |
| `footer-muted` | `rgba(255,255,255,0.55)` | Tagline under logo |
| `footer-link` | `rgba(255,255,255,0.7)` | Footer link list |
| `footer-legal` | `rgba(255,255,255,0.4)` | Copyright line (uppercase tracking) |
| `footer-legal-link` | `rgba(255,255,255,0.5)` | Privacy / Terms row |
| `footer-icon-well` | `rgba(255,255,255,0.06)` + border `rgba(255,255,255,0.1)` | `36px` social circles |

### Accordion (FAQ)

| Token | Hex | Usage |
|--------|-----|--------|
| `accordion-toggle-idle` | `#f1f2f6` | Closed row chevron pill (`32px` tall) |

**Open row toggle:** `bg-gradient-primary` (`32px` circle, white icon).

**FAQ badge dot ring:** `shadow-faq-dot` → `0 0 0 3px rgba(91, 33, 255, 0.15)` on `6px` purple core.

### Decorative (hero)

Large blurred shapes: **~5% opacity**, stops around `rgb(91, 33, 255)` → `rgb(200, 174, 255)` → `rgb(157, 110, 255)` — **never** behind small type.

---

## Typography

### Families

| Role | Figma | Web |
|------|--------|-----|
| Logo | Aeonik Medium | `font-logo` + fallback Inter |
| UI / marketing | Satoshi | `font-sans` |
| Eyebrows on light | TT Firs Neue Medium | `font-display` (load or substitute Inter) |
| Footer column labels | JetBrains Mono Bold | `font-mono` |
| Footer wordmark | Satoshi **Black** | `font-black` + `text-footer-wordmark` size |

### Scale (MCP-extracted)

| Use | Spec | Tailwind helper |
|-----|------|-------------------|
| Home hero H1 | `64px` bold, tracking **-2.38px**, lh **1.3** | `text-display-home` |
| Verify hero H1 | `68px` (same tracking) | `text-display-verify` |
| Hero sub (Home) | `24px` regular `ink-body` | `text-2xl font-normal text-ink-body` |
| Nav links | `14px` medium `ink-800` | `text-nav-link text-ink-800` |
| Contact (nav) | `16px` bold `ink-800` | `text-base font-bold` |
| Section H2 | `44px` bold, **-1.32px** tracking, **50px** lh | `text-heading-2` |
| FAQ H2 | `44px` bold, **-1.2px** tracking, **44px** lh | `text-heading-faq` |
| FAQ question row | `18px` bold `ink-950`, **-0.18px** tracking | `text-heading-3` |
| FAQ answer | `16px` regular `ink-700`, **24px** lh | `text-body-faq text-ink-700` |
| FAQ intro body | `18px` / **28px** lh | `text-body-lg text-ink-body` |
| Eyebrow (purple, TT Firs) | `12px` / **1.32px** tracking (Verify crisis strip) | `text-eyebrow text-brand-600 tracking-eyebrow-wide` |
| FAQ pill label | `11px` uppercase **1.1px** tracking | `text-faq-badge font-display` |
| Footer column label | `11px` uppercase **1.1px** tracking | `text-eyebrow-mono text-footer-label` |
| Footer links | `14px` / **21px** lh | `text-footer-link` |
| Legal | `12px` uppercase **0.88px** tracking | `text-footer-legal uppercase tracking-wide` |

---

## Spacing & layout

- **Artboard:** `1440px`. **Content:** `max-w-content` (1240px) + `px-gutter` (**100px** desktop).
- **Section default:** `py-section-y` (**60px**) — matches FAQ + many strips (`3139:30758`).
- **Footer block:** `py-section-y-footer` (**74px**) + `px-gutter`.
- **FAQ split:** `gap-faq-split` (**193px**) between intro column and accordion at `lg+`.
- **Footer link columns:** `gap-footer-columns` (**170px**) between column groups.
- **Nav inner offset:** first content **~99px** from edge — use same `px-gutter` (100px token) for parity.

### Common gaps

| Pattern | px | Token / utility |
|---------|-----|-----------------|
| Hero title → sub | 16 | `gap-4` |
| Hero sub → CTAs | 40 | `gap-10` |
| CTA pair | 14 | `gap-3.5` |
| Nav links | 28 | `gap-7` |
| Nav → CTA cluster | 24 | `gap-6` |
| FAQ intro vertical | 16 / 15 / 40 | `gap-4`, `gap-15` (token **15px**), `gap-10` |
| Footer major stacks | 40 | `gap-10` |
| Brand column internal | 20 / 33 | `gap-5`, `gap-[33px]` only if added to theme |

---

## Radius

| Element | Value | Token |
|---------|-------|--------|
| Primary CTA | Full pill on `h-14` | `rounded-pill` |
| Secondary CTA (hero) | `42px` | `rounded-pill-secondary` |
| Large cards | `28px` | `rounded-card` |
| Icon tiles | `16px` | `rounded-tile` |
| FAQ / ghost text CTAs | Full pill | `rounded-pill-soft` (`999px` in Figma) |

---

## Shadows

| Token | CSS |
|--------|-----|
| `shadow-card` | `0 4px 10px 4px rgba(0,0,0,0.04)` |
| `shadow-chip` | `0 2px 2px rgba(0,0,0,0.1)` |
| `shadow-primary` | dual drop (see colors) |
| `shadow-faq-dot` | `0 0 0 3px rgba(91,33,255,0.15)` |

---

## Iconography

- **16px** in nav / primary CTAs; **14px** inline chevrons; **20px** checklist rows.
- **Lucide** `stroke-width` **1.5**.

---

## Motion (see `docs/animation-system.md`)

- Timing fn: **`ease-premium`**; durations **`duration-fast`**, **`duration-md`**, **`duration-slow`** (`tailwind.config.js`).

---

## Figma variables

Published sample: `Netural-white` → `#ffffff`. Remaining values are **layer-inspected** from MCP.
