/**
 * Infinite logo banner — pauses off-screen and respects reduced motion.
 * @param {ParentNode} [root]
 */
export function initLogoMarquee(root = document) {
  const marquees = root.querySelectorAll("[data-logo-marquee]");
  if (marquees.length === 0) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /** @param {Element} marquee */
  const syncMotion = (marquee) => {
    const track = marquee.querySelector(".logo-marquee__track");
    if (!track || !(track instanceof HTMLElement)) return;

    if (reducedMotion.matches) {
      track.style.animation = "none";
      marquee.classList.remove("is-paused");
      return;
    }

    track.style.removeProperty("animation");
  };

  marquees.forEach((marquee) => {
    syncMotion(marquee);

    if (reducedMotion.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        marquee.classList.toggle("is-paused", !entry.isIntersecting);
      },
      { root: null, threshold: 0.15 },
    );

    observer.observe(marquee);
  });

  const onMotionChange = () => {
    marquees.forEach((marquee) => syncMotion(marquee));
  };

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", onMotionChange);
  } else {
    reducedMotion.addListener(onMotionChange);
  }
}
