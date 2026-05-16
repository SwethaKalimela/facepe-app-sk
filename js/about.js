/** About page — timeline + layout audit */
const DEBUG_ENDPOINT =
  "http://127.0.0.1:7368/ingest/21cae3c4-b5a2-4e23-80d2-495230f9c8f2";
const DEBUG_SESSION = "e3fd7c";

function debugLog(location, message, data, hypothesisId) {
  // #region agent log
  fetch(DEBUG_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": DEBUG_SESSION,
    },
    body: JSON.stringify({
      sessionId: DEBUG_SESSION,
      location,
      message,
      data,
      hypothesisId,
      timestamp: Date.now(),
      runId: "about-align-v2",
    }),
  }).catch(() => {});
  // #endregion
}

function auditAboutLayout() {
  const width = window.innerWidth;
  const bp = width >= 1280 ? "xl" : width >= 1024 ? "lg" : width >= 768 ? "md" : "sm";

  const probes = [
    { id: "about-hero-heading", expect: bp === "sm" ? 24 : 44, prop: "fontSize" },
    { id: "about-platform-heading", expect: bp === "sm" ? 34 : 44, prop: "fontSize" },
    { id: "about-story-heading", expect: bp === "sm" ? 24 : 36, prop: "fontSize" },
  ];

  const metrics = probes.map(({ id, expect, prop }) => {
    const el = document.getElementById(id);
    if (!el) return { id, missing: true };
    const computed = getComputedStyle(el);
    const value = Math.round(parseFloat(computed[prop]) || 0);
    return { id, expect, actual: value, delta: value - expect, match: value === expect };
  });

  const invalidTags = document
    .querySelectorAll("main#about-hero-section, main#main")
    .length
    ? 0
    : 0;
  const domBroken = !!document.querySelector("about-hero-section") || invalidTags;

  const teamVisible =
    getComputedStyle(document.getElementById("about-team-section") || document.body)
      .display !== "none";

  debugLog("about.js:audit", "layout audit", { width, bp, metrics, teamVisible, domBroken }, "B");

  const brokenClosers = /<\/?motion\/div/i.test(document.body.innerHTML);
  debugLog("about.js:audit", "invalid close tags", { brokenClosers }, "A");

  return { metrics, brokenClosers };
}

export function initAboutPage() {
  auditAboutLayout();

  const section = document.getElementById("about-story-section");
  if (!section) return;

  const steps = Array.from(section.querySelectorAll("[data-timeline-step]"));
  const cards = Array.from(section.querySelectorAll("[data-timeline-card]"));
  if (!steps.length || !cards.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktopTimeline = () => window.matchMedia("(min-width: 1024px)").matches;

  function setActive(index) {
    steps.forEach((step, i) => {
      const active = i === index;
      step.classList.toggle("about-timeline__step--active", active);
      step.setAttribute("aria-current", active ? "step" : "false");
    });
    cards.forEach((card, i) => {
      card.classList.toggle("about-timeline__card--active", i === index);
    });

    if (isDesktopTimeline()) {
      const lines = section.querySelectorAll(".about-timeline__line");
      lines.forEach((line, i) => {
        line.classList.toggle("about-timeline__line--active", i < index);
      });
    }

    const activeCard = cards[index];
    if (activeCard) {
      const inner = activeCard.querySelector(".about-timeline__card-inner");
      debugLog(
        "about.js:setActive",
        "timeline card active",
        {
          index,
          hasInner: !!inner,
          hasActiveClass: activeCard.classList.contains("about-timeline__card--active"),
          innerBg: inner ? getComputedStyle(inner).backgroundColor : null,
          yearColor: inner
            ? getComputedStyle(inner.querySelector(".about-timeline__year")).color
            : null,
        },
        "C"
      );
    }
  }

  steps.forEach((step, index) => {
    step.addEventListener("click", () => setActive(index));
    step.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive(index);
      }
    });
  });

  if (prefersReduced || !isDesktopTimeline()) {
    debugLog("about.js:timeline", "mobile timeline mode", { steps: steps.length }, "D");
    return;
  }

  setActive(0);
  debugLog("about.js:timeline", "desktop timeline mode", { steps: steps.length }, "D");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = Number(entry.target.dataset.timelineCard);
        if (!Number.isNaN(index)) setActive(index);
      });
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: 0 }
  );

  cards.forEach((card) => observer.observe(card));

  window.addEventListener(
    "resize",
    () => {
      auditAboutLayout();
      if (!isDesktopTimeline()) {
        observer.disconnect();
        return;
      }
      setActive(0);
      cards.forEach((card) => observer.observe(card));
    },
    { passive: true }
  );
}
