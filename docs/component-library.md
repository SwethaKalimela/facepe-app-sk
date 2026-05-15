# Component Library (FacePe — Figma-aligned)

All measurements reference **desktop `1440`** frames unless noted. Responsive behavior: **stack + full-width** on small screens; preserve **touch targets ≥ 44px**.

---

## Layout components

### Site header (`3139:29852` / Verify `3139:31024`)

| Property | Value |
|----------|--------|
| Height | **100px** total; inner row **56px** vertically centered |
| Background | `surface-0` |
| Border | Bottom `1px` → `border-border-subtle` |
| Horizontal inset | Content starts **`99px`** from artboard edge → use **`lg:px-[100px]`** + `max-w-[1240px]` center pattern |
| Logo | Glyph `~23×25px` + wordmark **Aeonik Medium ~23px** `ink-950` |
| Nav cluster | `Product`, `Solution` (+ chevron `14px`), `Enterprise` — **Satoshi Medium 14px** `ink-800`, gap **28px** |
| Secondary action | “Contact us” — **Satoshi Bold 16px** `ink-800` |
| Primary CTA | “Get Started” — gradient pill **56px** tall, **20px** horizontal padding, **10px** icon gap, **16px** Lucide-style arrow |

**Mobile:** collapse nav to `site-header__drawer`; keep primary CTA visible in sticky bar when possible.

### Site footer (Home `3139:30809` — Figma MCP)

| Property | Value |
|----------|--------|
| Background | `bg-ink-950` (`#0f1117`) |
| Padding | `px-gutter py-section-y-footer` (**100px × 74px**) |
| Main stack | `gap-10` (**40px**) between link grid and legal block |
| Brand column | Logo `32px` + wordmark **Satoshi Black ~19.8px** white, tracking **-0.397px** |
| Tagline | `14px` / **20px** lh → `text-sm leading-5 text-footer-muted` |
| Social | **`36px`** circles, `gap-2.5` (**10px**), `bg-footer-icon-well` + `border` `footer-icon-ring`, icon **14px** |
| Column groups | `gap-footer-columns` (**170px**) horizontal between Product / Solutions / Company / Resources blocks |
| Column title | **JetBrains Mono** bold `11px` uppercase `text-footer-label`, tracking **1.1px**, lh **16.5px** |
| Links | **Satoshi** regular `14px` lh **21px** `text-footer-link`; **14px** vertical gap title → first link (`gap-3.5`) |
| Legal | Divider full width; copyright **12px** uppercase `text-footer-legal` (tracking **0.88px**); Privacy row **14px** `text-footer-legal-link`, gap **36px** |

**Mobile:** stack columns; increase social hit targets to **44px** minimum.

---

## Section templates

### Hero — Home (`3139:29938`)

- **Center stack:** H1 two lines, `64px`, `-2.38px` tracking, `ink-900`.
- **Subhead:** `24px` regular `ink-body`, max width ~`640px`.
- **CTA row:** Primary “Download the App” (gradient, icon left); Secondary “Request Merchant Demo” (white, `border-border-subtle`, `rounded-pill-secondary`), **`14px`** gap between buttons.

### Hero — Verify (`3139:31056` region)

- **Split:** Left column **`610px`** text block; right column hero visual with **dashed lilac** frame (`lilac-50` fill, `lilac-200` border).
- **H1:** `68px`, accent on “5 seconds.” (`brand-600`).
- **Lead:** `20px`; bold inline for accuracy claim.
- **Floating chips:** White pill, `border-hairline`, `shadow-chip`, `10px` padding, **`12px`** gap icon/text, icon well **`26px`** circle `lilac-100`.

### Logo strip (“Trusted by top companies”)

- Eyebrow + grayscale logotype row; fade masks on edges (`Rectangle 34624442/43` pattern) → implement as gradient masks in CSS, not extra DOM.

### Steps / onboarding (`03 STEPS` block)

- **Eyebrow:** `03 STEPS` (uppercase micro style).
- **H2:** “Complete your payment setup in 3 easy steps”.
- **Segmented control:** `Background+Border` bar with **3** steps; active step uses filled circular number badge (**22px** circle, `14px` figures).

### Product grid — four tiles (`FacePe Verify`, `Self-Checkout`, `AI Avatar`, `Online`)

| Element | Spec |
|---------|------|
| Card | `270×272` content area, **`24px`** inner padding, `shadow-card`, `rounded-[28px]` family |
| Top row | **`44px`** icon tile + **category pill** (`Banking`, `RETAIL`, etc.) — pill **`24px` height**, **`12px`** horizontal padding, **`15px`** uppercase label |
| Title | Product name + category subtitle |
| Body | ~`60px` tall description block |
| Link | “Learn more” + **`14px`** chevron |

### Stats / proof card (`Performance that speaks for itself`)

- **Right column card** overlays image: stat value **`44px`**, label **`21px`**, supporting line **`19.5px`**, horizontal dividers between rows.

### “Bridge” split CTA (`The Bridge Between Shopper and Store`)

- **“Choose your path”** control (`3139:30208`): white pill, `border-border-subtle`, **`rounded-pill-soft`**, **`h-btn-ghost`** **`px-btn-ghost-x`**, **`12px`** gap text ↔ **14px** chevron; **Satoshi Bold 15px** `ink-950` (`leading-snug`).
- Below: large **dual path** split cards (consumer vs security story) with checklist rows (`20px` icons, `19px` text).

### Comparison / checklist rows

- Use **tick-square** motif (in Lucide: `SquareCheck` or `Check` inside rounded square styling) at **`20px`**.

### Case study / deployment (`Real Deployments`)

- Wide **`1240×468`** media card + accordion list rows **`72px`** height, **`20px`** horizontal padding, **`+`** expander **`32px`** — FAQ and deployment lists share this **row pattern**.

### Testimonial (`3139:30711`)

- Large opening quote; body copy block; avatar **`48px`** gradient square; name + role/title; **carousel dots** (`32×3` active + `22×3` inactive).

### FAQ (`3139:30758`)

- Section padding: **`px-gutter py-section-y`**. Two columns: `gap-faq-split` (**193px**) at `lg+`.
- **Left (`~407px`):** vertical `gap-10` between CTA block and upper stack; inner stack `gap-4`.
- **FAQ pill:** `bg-lilac-25` + `border-lilac-200` **`30.5px`** tall pill; **6px** `bg-brand-600` dot + `shadow-faq-dot`; label **11px** uppercase `text-brand-600` `tracking-[0.1em]` (**TT Firs** in Figma → `font-display`).
- **H2:** `text-heading-faq text-ink-950` (two lines); intro **`gap-[15px]`** between heading block lines → use `gap-15` token.
- **Body:** `text-body-lg text-ink-body`.
- **“Contact our team”:** ghost pill — `h-btn-ghost` `px-btn-ghost-x` `py-2` `rounded-pill-soft` `border-border-subtle` `text-ink-950` **15px** bold + **14px** chevron (`gap-3`).
- **Right (`640px`):** accordion `gap-5` (**20px**) between groups; each row **`border-t border-border-subtle`**.
- **Question:** `text-heading-3 text-ink-950`; **Answer:** `text-body-faq text-ink-700` (**16px** / **24px** lh).
- **Toggle:** **`32px`** circle — **open** = `bg-gradient-primary` + white icon; **closed** = `bg-accordion-toggle-idle` + dark icon. First row **expanded** in design.

---

## UI primitives

### Buttons

| Variant | Visual |
|---------|--------|
| Primary | Gradient `9c6cfe → 5000ea`, white text, `shadow-primary`, pill |
| Secondary | White, `border-border-subtle`, `ink-950` text, `rounded-pill-secondary` |
| Ghost / link | Bold `16px`, no border, optional chevron |

### Pills / badges

- **Category:** uppercase small label in contrast fill on `surface-0`.
- **Eyebrow:** not a pill—uppercase text only (`12px`, `brand-600`, `tracking-[0.11em]`).

### Icon wells

- **`26–28px`** circle, `lilac-100` fill, centered **`15px`** glyph.

---

## Assets

- Marketing imagery is **3D / photographic** in Figma; on web use **WebP**, `loading="lazy"` below fold, with dimensions to avoid CLS.
