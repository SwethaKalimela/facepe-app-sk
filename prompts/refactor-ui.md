# Prompt: Refactor UI (FacePe)

## Goals

- Reduce duplication; align with **tokens** in `docs/design-system.md`.  
- Keep **visual parity** with Figma references (Home `3139:29850`, Verify `3139:31023`).

## Process

1. Map repeated class chains → **`tailwind.config.js`** theme keys or `@layer components`.  
2. Normalize **button** variants to `primary-button` / `secondary-button` patterns only.  
3. Ensure **section IDs** and headings still match `docs/page-architecture.md`.  
4. Replace inline decorative positioning with responsive-safe flex/grid.  
5. Verify **a11y:** focus, landmarks, FAQ buttons—see `.cursor/rules/accessibility-rules.mdc`.

## DO NOT

- Change spacing/typography away from documented tokens “for taste”  
- Merge sections in a way that breaks heading hierarchy or SEO (`docs/seo-system.md`)  
- Introduce new colors or motion not covered by `docs/animation-system.md`
