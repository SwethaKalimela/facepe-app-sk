# Prompt: Mobile optimization (FacePe)

## Goals

- Align with `docs/responsive-system.md` + `docs/component-library.md` touch targets.  
- Preserve **FacePe** premium spacing without overflow.

## Checklist

1. **Nav:** hamburger + full-screen / drawer menu; **Get Started** remains reachable without scrolling the drawer list endlessly.  
2. **Hero:** split layouts → **single column**; hero image **below** text; remove decorative lines/stars.  
3. **Typography:** apply responsive type tokens (hero steps down from `64/68px` to `text-4xl` / `text-5xl`).  
4. **Grids:** product `xl:grid-cols-4` → `md:grid-cols-2` → `grid-cols-1`.  
5. **FAQ:** stack intro above questions; triggers **44px** min hit target.  
6. **CTAs:** full-width buttons only when both CTAs would wrap awkwardly (`sm:flex-row` preferred).  
7. **Media:** `max-w-full h-auto`, `aspect-ratio` where Figma uses fixed boxes.

## Performance

- Strip decorative layers on `max-md`.  
- Lazy-load non-LCP images.

## DO NOT

- Shrink fonts below **16px** for body text  
- Introduce horizontal scroll for marketing content  
- Remove touch padding on icon-only controls
