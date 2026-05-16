import { createIcons, icons } from "lucide";

import { initFaqAccordion } from "./home.js";

const ONLINE_IMG = "/assets/images/online";

const ONLINE_FLOW = {
  pay: {
    step: "STEP 01",
    titleHtml: 'Customer clicks &ldquo;Pay with <span class="text-brand-600">FacePe</span>&rdquo;',
    desc: "At checkout, the FacePe button appears alongside other payment methods — embedded, single-click, no redirect.",
    pills: ["Embedded Checkout", "Single-click Trigger"],
    pillStyle: "gradient",
    media: "layers",
    imageAlt: "Mobile checkout screen showing Pay with FacePe button",
  },
  face: {
    step: "STEP 02",
    titleHtml: 'Face detected in <span class="text-brand-600">real time</span>',
    desc: "The browser camera captures a 3D depth-mapped scan in milliseconds. No download. No app required.",
    pills: ["Browser camera", "3D depth-map"],
    image: `${ONLINE_IMG}/flow-step-02-face-detected.png`,
    imageAlt: "FacePe 3D face scan during online checkout",
  },
  identity: {
    step: "STEP 03",
    titleHtml: 'Identity <span class="text-brand-600">authenticated</span>',
    desc: "Encrypted template matched against the on-device profile at 99.8% confidence no biometric ever leaves the device.",
    pills: ["On-device template", "99.8% confidence"],
    image: `${ONLINE_IMG}/flow-step-03-identity-verified.png`,
    imageAlt: "On-device identity authentication during FacePe checkout",
  },
  payment: {
    step: "STEP 04",
    titleHtml: 'Payment confirmed <span class="text-brand-600">instantly</span>',
    desc: "Charge authorized through your existing processor Stripe, PayPal, Razorpay under one face scan.",
    pills: ["Sub-2s authorization", "Your processor"],
    image: `${ONLINE_IMG}/flow-step-04-payment-authorized.png`,
    imageAlt: "Payment confirmed instantly via FacePe",
  },
  receipt: {
    step: "STEP 05",
    titleHtml: 'Receipt <span class="text-brand-600">delivered</span>',
    desc: "Digital receipt and immutable audit record sent to the shopper. Conversion logged to your dashboard.",
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
      pills.innerHTML = renderOnlinePills(data.pills, data.pillStyle ?? "lilac");
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

/** @param {ParentNode} [root] */
export function initOnlinePage(root = document) {
  mountIcons(root);
  initOnlineFlowTabs(root);
  initFaqAccordion(root);
}
