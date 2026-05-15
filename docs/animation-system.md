# Animation System (FacePe)

## Motion personality

**Calm, precise, financial.** Motion confirms state—it never entertains for its own sake. Match the restraint of Stripe / Linear: **short fades** and **small translates** only.

## Allowed effects

| Effect | Spec | Usage |
|--------|------|--------|
| Fade | `opacity 0 → 1` | Section reveals, lazy media |
| Fade + rise | `translateY(12px → 0)` + fade | Primary section entrance |
| Hover lift (cards) | `translateY(-2px)` | Feature / product cards |
| Hover press (buttons) | `translateY(0.5px)` or brightness filter | Primary CTA subtle feedback |
| Icon nudge | `translateX(2px)` on link hover | “Learn more” rows |
| Stagger | `60–100ms` between siblings | List of cards only (max **6** items) |

## Durations

| Concept | Time | Tailwind utility |
|---------|------|------------------|
| Fast | `150ms` | `duration-fast` |
| Medium | `280–320ms` (use **300ms** token) | `duration-md` |
| Slow | `450–500ms` (use **480ms** token) | `duration-slow` |

## Easing

- Default: **`ease-premium`** in Tailwind → `cubic-bezier(0.22, 1, 0.36, 1)` (smooth deceleration).
- **No** `ease-in` on enter (feels sluggish for premium SaaS).

## Scroll behavior

- **GSAP (minimal):** one timeline per section **optional**; prefer **`IntersectionObserver` + CSS class** toggling `opacity` / `transform` for static marketing pages.
- **Trigger:** when **`10–15%`** of section enters viewport.
- **Stagger cap:** `120ms` × `n` with `n ≤ 6`.

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

Also skip decorative star/line parallax entirely.

## Forbidden

- Bounce, elastic, overshoot curves.
- Blur-in of large regions.
- Continuous floating / rotating of CTAs or logos.
- Parallax on text.

## GSAP policy

- **Use for:** staggered card reveals on high-value sections only (e.g. product grid).
- **Avoid for:** navigation, accordions (use CSS or small vanilla `max-height` patterns), anything on `scroll` firehose without `ScrollTrigger` batching.

## Performance

- Animate only **`transform`** and **`opacity`**.
- Apply `will-change: transform` on hover targets **sparingly** (remove after transition).
