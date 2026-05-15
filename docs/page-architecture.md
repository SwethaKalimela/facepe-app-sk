# Page Architecture (FacePe)

## Global primitives

- **Marketing shell:** `site-header` (sticky) → `main` → `site-footer`.
- **Content width:** `max-w-[1240px]` inner; **horizontal padding** `100px` at `lg+` (Figma `x:100` content blocks).
- **Section default:** `py-[60px]` horizontal band; alternate **white** vs **near-white** (`surface-page`) only when Figma shows a tonal shift.

## Home page (`3139:29850` — “Home Page”)

Vertical order from Figma structure (names are canonical **section IDs** for HTML + prompts):

| # | Section ID | Figma content summary |
|---|------------|------------------------|
| 1 | `site-header` | Logo, Product/Solution/Enterprise, Contact us, Get Started |
| 2 | `hero-section` | “Pay with Your Identity. Not Your Wallet.” + dual CTAs + hero visual with floating status chips (“3D Liveness”, “Verified in 0.3s”, etc.) |
| 3 | `social-proof-section` | “Trusted by top companies” logo row |
| 4 | `steps-section` | “03 STEPS” + 3-step segmented explainer + large **Download & Register** card + phone mock |
| 5 | `products-grid-section` | “One platform · Four products” + **4** product cards (Verify, Self-Checkout, AI Avatar, Online) |
| 6 | `demo-impact-section` | “Proven impact” + “Watch FacePe in action” + video / stats card (`2s`, `60%`, `99.8%`) |
| 7 | `bridge-section` | “The Bridge Between Shopper and Store” + dual-path layout (shopper vs merchant/security narratives) |
| 8 | `comparison-section` | Wallet vs FacePe style comparison (headline + two-column feature lists) |
| 9 | `deployments-section` | “Real Deployments” + wide media + **accordion** industry list (`72px` rows) |
|10 | `testimonial-section` | Quote + avatar + pagination dashes |
|11 | `faq-section` | Two-column FAQ (per `3139:30758`) |
|12 | `site-footer` | Multi-column + legal |

**Note:** Decorative lines/stars are **non-semantic**; implement as a single absolutely positioned `aria-hidden="true"` layer per section max.

## Verify page (`3139:31023` — “Verify page”)

Same header/footer **pattern** as Home. Main narrative:

| # | Section ID | Summary |
|---|------------|---------|
| 1 | `site-header` | Same IA; Verify frame uses “Contact us” + “Get Started” |
| 2 | `hero-verify-section` | Split hero — “Identity Verified in under **5 seconds.**” + pilot / demo CTAs + device visual + Fast/Secure/Accurate chips |
| 3 | `problem-statement-section` | Eyebrow “The Identity Fraud crisis” + H2 + supporting copy |
| 4 | `identity-flow-section` | Large white card `623px` / inner `540px` — “How identity verification works” + icon rows |
| 5 | *(Additional blocks per file)* | Continue stacking **`py-[60px]`** sections following same card/accordion patterns as Home |

## CTA philosophy

- **One primary** gradient action per viewport (hero).
- **One secondary** outline action alongside.
- Lower sections: **text + chevron** links (“Learn more”, “Choose your path”, “Read the story”) — do not promote every link to a pill.

## CMS readiness

- Each **section** = one content record with: `id`, `eyebrow`, `title`, `body`, `media`, `ctas[]`, `items[]` (for grids/accordions).
- Rich text lives in **body** only; stats and FAQ rows are **structured arrays** for schema.org generation.

## Accessibility landmarks

- One `header`, one `main`, one `footer`, each section a `section` with `aria-labelledby` pointing at visible headings.
