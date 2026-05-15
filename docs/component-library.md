# Component Library (FacePe — Figma-aligned)

All measurements reference **desktop `1440`** frames unless noted. Responsive behavior: **stack + full-width** on small screens; preserve **touch targets ≥ 44px**.

---

## Layout components

### Site header (`3139:29852` / Verify `3139:31024`)

| Property | Value |
|----------|--------|
| Height | **100px** total; inner row **56px** vertically centered |
| Background | `surface-0` |
| Border | Bottom `1px` `border-subtle` |
| Horizontal inset | Content starts **`99px`** from artboard edge → use **`lg:px-[100px]`** + `max-w-[1240px]` center pattern |
| Logo | Glyph `~23×25px` + wordmark **Aeonik Medium ~23px** `ink-950` |
| Nav cluster | `Product`, `Solution` (+ chevron `14px`), `Enterprise` — **Satoshi Medium 14px** `ink-800`, gap **28px** |
| Secondary action | “Contact us” — **Satoshi Bold 16px** `ink-800` |
| Primary CTA | “Get Started” — gradient pill **56px** tall, **20px** horizontal padding, **10px** icon gap, **16px** Lucide-style arrow |

**Mobile:** collapse nav to `site-header__drawer`; keep primary CTA visible in sticky bar when possible.

### Site footer (Home `3139:30809` region)

| Property | Pattern |
|----------|---------|
| Width | Full bleed; inner **1240px** |
| Columns | Logo + blurb + socials (`36px` hit areas, `14px` icons); **Product**, **Solutions**, **Company**, **Resources** link columns |
| Rule | `1px` divider above legal row |
| Legal | “© 2026 FacePe · facepe.ai · All rights reserved” + Privacy / Terms / Security / SOC 2 |

---

## Section templates

### Hero — Home (`3139:29938`)

- **Center stack:** H1 two lines, `64px`, `-2.38px` tracking, `ink-900`.
- **Subhead:** `24px` regular `ink-body`, max width ~`640px`.
- **CTA row:** Primary “Download the App” (gradient, icon left); Secondary “Request Merchant Demo” (white, `border-subtle`, `42px` radius family), **`14px`** gap between buttons.

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

- Left narrative + **“Choose your path”** text button (`180×46` — text `14px` + chevron).
- Below: large **dual path** split cards (consumer vs security story) with checklist rows (`20px` icons, `19px` text).

### Comparison / checklist rows

- Use **tick-square** motif (in Lucide: `SquareCheck` or `Check` inside rounded square styling) at **`20px`**.

### Case study / deployment (`Real Deployments`)

- Wide **`1240×468`** media card + accordion list rows **`72px`** height, **`20px`** horizontal padding, **`+`** expander **`32px`** — FAQ and deployment lists share this **row pattern**.

### Testimonial (`3139:30711`)

- Large opening quote; body copy block; avatar **`48px`** gradient square; name + role/title; **carousel dots** (`32×3` active + `22×3` inactive).

### FAQ (`3139:30758`)

- Left: pill label “FAQ”, H2 “Everything you want to know.”, support copy, **“Contact our team”** link (`179×46`).
- Right: **640px** wide stack; first item **open by default** showing answer; subsequent rows **`81px`** closed height; **`32px`** icon button (`14px` chevron); divider between items.

---

## UI primitives

### Buttons

| Variant | Visual |
|---------|--------|
| Primary | Gradient `9c6cfe → 5000ea`, white text, `shadow-primary`, pill |
| Secondary | White, `border-subtle`, `ink-950` text, pill |
| Ghost / link | Bold `16px`, no border, optional chevron |

### Pills / badges

- **Category:** uppercase small label in contrast fill on `surface-0`.
- **Eyebrow:** not a pill—uppercase text only (`12px`, `brand-600`, `tracking-[0.11em]`).

### Icon wells

- **`26–28px`** circle, `lilac-100` fill, centered **`15px`** glyph.

---

## Assets

- Marketing imagery is **3D / photographic** in Figma; on web use **WebP**, `loading="lazy"` below fold, with dimensions to avoid CLS.
