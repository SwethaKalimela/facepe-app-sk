# Prompt: Add / tune animation (FacePe)

## Authority

- `docs/animation-system.md`  
- `.cursor/rules/animation-rules.mdc`

## Stack

- Prefer **CSS transitions** + `IntersectionObserver`.  
- **GSAP** only for optional staggered card reveals; import lazily; run **once** per element group.

## Parameters

| Name | Use from `tailwind.config.js` |
|------|-------------------------------|
| Duration | `duration-fast`, `duration-md`, `duration-slow` |
| Easing | `ease-premium` |
| Properties | `opacity`, `transform` only |
| Translate | ≤ `12px` for reveals; `2px` for hovers |

## Patterns

- **Section reveal:** `opacity 0→1`, `translateY(12px)→0`, `300ms`, on `is-inview` class.  
- **Card hover:** `translateY(-2px)`, shadow token bump, `280ms`.  
- **Primary CTA hover:** brightness or `0.5px` press—**one** pattern globally.

## Reduced motion

- Wrap timelines in `matchMedia('(prefers-reduced-motion: reduce)')` checks or set final state immediately.

## DO NOT

- Animate layout props (`width`, `height`, `top`, `margin`)  
- Add bounce, blur reveals, infinite motion, or scroll-jacked sections  
- Fire GSAP on every `scroll` event without throttling / ScrollTrigger batching
