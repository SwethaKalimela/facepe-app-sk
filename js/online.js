import { createIcons, icons } from "lucide";

import { initFaqAccordion } from "./home.js";

const ONLINE_IMG = "/assets/images/online";

const ONLINE_FLOW = {
  pay: {
    step: "STEP 01",
    titleHtml:
      'Customer selects &ldquo;Pay with <span class="text-brand-600">FacePe</span>&rdquo;',
    desc: "FacePe integrates directly into the checkout flow — no redirects, no interruptions.",
    pills: ["Embedded Checkout", "One-click checkout"],
    pillStyle: "gradient",
    media: "layers",
    imageAlt: "Mobile checkout screen showing Pay with FacePe button",
  },
  face: {
    step: "STEP 02",
    titleHtml: 'Face detected in <span class="text-brand-600">real time</span>',
    desc: "The browser camera captures a 3D depth-mapped scan in milliseconds — no downloads or apps required.",
    pills: ["Browser camera", "3D depth scan"],
    image: `${ONLINE_IMG}/flow-step-02-face-detected.png`,
    imageAlt: "FacePe 3D face scan during online checkout",
  },
  identity: {
    step: "STEP 03",
    titleHtml: 'Identity <span class="text-brand-600">verified</span>',
    desc: "Encrypted biometric matching happens directly on-device with 99.8% accuracy — no biometric data ever leaves the device.",
    pills: ["On-device template", "99.8% accuracy"],
    image: `${ONLINE_IMG}/flow-step-03-identity-verified.png`,
    imageAlt: "On-device identity authentication during FacePe checkout",
  },
  payment: {
    step: "STEP 04",
    titleHtml:
      '<span class="text-brand-600">Instant payment</span> confirmation',
    desc: "Payments are authorized through your existing processor — including Stripe, PayPal, and Razorpay — using a single face scan.",
    pills: ["Sub-2-second authorization", "Works with your processor"],
    image: `${ONLINE_IMG}/flow-step-04-payment-authorized.png`,
    imageAlt: "Payment confirmed instantly via FacePe",
  },
  receipt: {
    step: "STEP 05",
    titleHtml: 'Receipt <span class="text-brand-600">delivered</span>',
    desc: "A digital receipt and immutable audit record are instantly delivered to the shopper and securely logged to your dashboard.",
    pills: ["Digital receipt", "Audit record"],
    image: `${ONLINE_IMG}/flow-step-05-receipt-delivered.png`,
    imageAlt: "Digital receipt and audit record delivered after checkout",
  },
};

/** @param {string[]} pillTexts @param {"gradient" | "lilac"} style */
function renderOnlinePills(pillTexts, style = "lilac") {
  if (!pillTexts.length) return "";
  const [first, ...rest] = pillTexts;
  const firstClass =
    style === "gradient"
      ? "inline-flex h-[43px] items-center rounded-[24px] border border-border-neutral/40 bg-gradient-to-br from-brand-600/20 to-lilac-100/10 px-3 text-[13px] font-medium text-brand-600"
      : "inline-flex h-[43px] items-center rounded-[24px] bg-lilac-100 px-3 text-[13px] font-medium text-brand-600";
  const restClass =
    "inline-flex h-[43px] items-center rounded-[24px] border border-border-neutral/40 bg-white/20 px-3 text-[13px] font-medium text-ink-body";
  return [
    `<span class="${firstClass}">${first}</span>`,
    ...rest.map((text) => `<span class="${restClass}">${text}</span>`),
  ].join("");
}

/** @param {ParentNode} root */
function mountIcons(root = document) {
  createIcons({
    icons,
    attrs: { "stroke-width": 1.5 },
    nameAttr: "data-lucide",
    root,
  });
}

/** @param {HTMLButtonElement} btn @param {boolean} active */
function setTabActive(btn, active) {
  btn.setAttribute("aria-selected", active ? "true" : "false");
  btn.classList.toggle("bg-lilac-100", active);
  btn.classList.toggle("font-bold", active);
  btn.classList.toggle("text-ink-950", active);
  btn.classList.toggle("font-medium", !active);
  btn.classList.toggle("text-ink-700", !active);
}

/** @param {ParentNode} root */
function initOnlineFlowTabs(root = document) {
  const container = root.querySelector("[data-online-flow-tabs]");
  if (!container) return;

  const label = container.querySelector("[data-online-flow-label]");
  const title = container.querySelector("[data-online-flow-title]");
  const desc = container.querySelector("[data-online-flow-desc]");
  const pills = container.querySelector("[data-online-flow-pills]");
  const image = container.querySelector("[data-online-flow-image]");
  const layers = container.querySelector("[data-online-flow-layers]");
  const phone = container.querySelector("[data-online-flow-phone]");

  /** @param {keyof typeof ONLINE_FLOW} key */
  const apply = (key) => {
    const data = ONLINE_FLOW[key];
    if (!data) return;
    if (label) label.textContent = data.step;
    if (title) title.innerHTML = data.titleHtml;
    if (desc) desc.textContent = data.desc;

    const useLayers = data.media === "layers";
    if (layers instanceof HTMLElement) {
      layers.hidden = !useLayers;
    }
    if (image instanceof HTMLImageElement) {
      image.hidden = useLayers;
      if (!useLayers && data.image) {
        image.src = data.image;
        image.alt = data.imageAlt;
      }
    }
    if (phone instanceof HTMLImageElement && useLayers) {
      phone.alt = data.imageAlt;
    }
    if (pills instanceof HTMLElement && data.pills?.length) {
      pills.innerHTML = renderOnlinePills(
        data.pills,
        data.pillStyle ?? "lilac",
      );
      pills.hidden = false;
    } else if (pills instanceof HTMLElement) {
      pills.hidden = true;
    }
  };

  apply("pay");

  container.querySelectorAll("[data-online-flow-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-online-flow-tab");
      if (!key || !(key in ONLINE_FLOW)) return;
      container.querySelectorAll("[data-online-flow-tab]").forEach((b) => {
        setTabActive(/** @type {HTMLButtonElement} */ (b), b === btn);
      });
      apply(/** @type {keyof typeof ONLINE_FLOW} */ (key));
    });
  });
}

/** @param {ParentNode} root */
function debugHeroOnlineLayout(root) {
  const visual = root.querySelector("[data-hero-online-visual]");
  if (!(visual instanceof HTMLElement)) return;

  const measure = () => {
    const section = root.querySelector("#hero-online-section");
    const row = section?.querySelector(".container-page > div");
    const wrap = visual.parentElement;
    const sectionStyle =
      section instanceof HTMLElement ? getComputedStyle(section) : null;
    const rowStyle = row instanceof HTMLElement ? getComputedStyle(row) : null;
    const visualRect = visual.getBoundingClientRect();
    const wrapRect =
      wrap instanceof HTMLElement ? wrap.getBoundingClientRect() : null;
    const chips = [...visual.querySelectorAll("[data-hero-online-chip]")].map(
      (chip) => {
        const el = /** @type {HTMLElement} */ (chip);
        const rect = el.getBoundingClientRect();
        const name = el.getAttribute("data-hero-online-chip") ?? "unknown";
        const overflowRight = rect.right - visualRect.right;
        const overflowLeft = visualRect.left - rect.left;
        return {
          name,
          left: Math.round(rect.left - visualRect.left),
          top: Math.round(rect.top - visualRect.top),
          width: Math.round(rect.width),
          overflowRight: Math.round(overflowRight),
          overflowLeft: Math.round(overflowLeft),
          clipped: overflowRight > 1 || overflowLeft > 1,
        };
      },
    );

    // #region agent log
    fetch("http://127.0.0.1:7368/ingest/21cae3c4-b5a2-4e23-80d2-495230f9c8f2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "099c44",
      },
      body: JSON.stringify({
        sessionId: "099c44",
        runId: "post-fix-1440",
        hypothesisId: "G",
        location: "online.js:debugHeroOnlineLayout",
        message: "hero online layout metrics",
        data: {
          viewportW: window.innerWidth,
          layoutMode: rowStyle?.flexDirection ?? "unknown",
          sectionOverflow: sectionStyle?.overflow,
          wrapW: wrapRect ? Math.round(wrapRect.width) : null,
          visualW: Math.round(visualRect.width),
          visualH: Math.round(visualRect.height),
          visualMinWidthOk:
            (window.innerWidth < 1280 &&
              rowStyle?.flexDirection === "column") ||
            (window.innerWidth >= 1280 &&
              rowStyle?.flexDirection === "row" &&
              visualRect.width >= 480),
          chips,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  };

  measure();
  window.addEventListener("resize", measure, { passive: true });
}

/** @param {ParentNode} [root] */
export function initOnlinePage(root = document) {
  mountIcons(root);
  initOnlineFlowTabs(root);
  initFaqAccordion(root);
  debugHeroOnlineLayout(root);
}
