/**
 * Stacked card scroll animation — Figma 3139:30415
 * @param {ParentNode} [root]
 */
export function initUnifiedCommerceStack(root = document) {
  const stack = root.querySelector("[data-unified-commerce-stack]");
  if (!stack) return;

  const cards = [...stack.querySelectorAll("[data-commerce-card]")];
  if (cards.length === 0) return;

  stack.style.setProperty("--commerce-card-count", String(cards.length));

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  /** @param {number} index */
  const setActiveIndex = (index) => {
    cards.forEach((card, i) => {
      let state = "upcoming";
      if (i < index) state = "past";
      else if (i === index) state = "active";

      card.dataset.state = state;
      card.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
  };

  const updateFromScroll = () => {
    if (reducedMotion.matches || !desktopQuery.matches) {
      cards.forEach((card, i) => {
        card.dataset.state = "active";
        card.setAttribute("aria-hidden", "false");
      });
      return;
    }

    const rect = stack.getBoundingClientRect();
    const scrollable = stack.offsetHeight - window.innerHeight;
    if (scrollable <= 0) {
      setActiveIndex(0);
      return;
    }

    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    const progress = scrolled / scrollable;
    const segment = 1 / (cards.length - 1);
    const index = Math.min(cards.length - 1, Math.round(progress / segment));

    setActiveIndex(index);
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateFromScroll();
      ticking = false;
    });
  };

  const onLayoutChange = () => {
    updateFromScroll();
  };

  setActiveIndex(0);
  updateFromScroll();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onLayoutChange);

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", onLayoutChange);
    desktopQuery.addEventListener("change", onLayoutChange);
  } else {
    reducedMotion.addListener(onLayoutChange);
    desktopQuery.addListener(onLayoutChange);
  }
}
