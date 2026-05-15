# SEO System (FacePe)

## Defaults (replace per deployment)

| Field | Guideline |
|-------|-----------|
| Title | `FacePe — {page topic} · Biometric payments & identity` (≤60 chars where possible) |
| Meta description | Lead with **outcome** (speed, fraud reduction) + **audience** (merchants, banks); ≤155 chars |
| Canonical | Absolute URL on `facepe.ai` (per footer copy in Figma) |
| OG image | `1200×630`, white/lilac field + product wordmark—match `design-system.md` colors |

## Heading rules

- **One `h1`** per page: Home uses payment identity headline; Verify uses verification speed headline.
- **Section headings** align with Figma `Heading 2` strings (do not demote for style—use CSS for size).
- **Cards** use `h3` for product names (“FacePe Verify”, etc.).

## Structured data

- **`Organization`** on all pages: name `FacePe`, url `https://facepe.ai`, logo URL.
- **`SoftwareApplication`** or **`Product`** on product pages when content stabilizes.
- **`FAQPage`** on Home: use FAQ copy from `faq-section` (e.g. “Is my face data safe with FacePe?”, “How fast is FacePe checkout compared to cards?”, …).

## Content & keywords

- Primary entities: **biometric payments**, **identity verification**, **fraud reduction**, **3D liveness**, **merchants**, **banks**, **PCI / SOC 2 / GDPR** (only if legally approved on site).
- Avoid keyword stuffing; mirror **natural** Figma copy where accurate.

## Images

- **Alt text:** describe the **user benefit** (“Customer verifying payment with FacePe at checkout”) not “image10134”.
- **Lazy load:** all imagery below first screen; **priority** only for LCP hero visual.
- **Formats:** WebP/AVIF with PNG fallback if needed.

## Performance (Core Web Vitals)

- Preload **Satoshi** (or subset) + critical CSS; defer GSAP.
- Reserve space for hero media (`aspect-ratio` / explicit `width`/`height`).
- No layout-affecting webfonts without `font-display: swap`.

## Accessibility ↔ SEO

- Visible FAQ questions must exist in **DOM text** (not canvas-only).
- Accordion triggers must be **real `<button>`** elements with `aria-expanded`.

## Internationalization (future)

- Keep headings short for **German length expansion**; avoid fixed-width text boxes in CMS.
