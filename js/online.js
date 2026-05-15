import { createIcons, icons } from "lucide";

import { initFaqAccordion } from "./home.js";

const ONLINE_FLOW = {
  pay: {
    step: "STEP 01",
    title: 'Customer clicks "Pay with FacePe"',
    titleHtml: 'Customer clicks &ldquo;Pay with <span class="text-brand-600">FacePe</span>&rdquo;',
    desc: "At checkout, the FacePe button appears alongside other payment methods — embedded, single-click, no redirect.",
    showPills: true,
    image: "https://www.figma.com/api/mcp/asset/5bd45443-2b3a-45fd-ac59-11f0dd367f12",
    imageAlt: "Mobile checkout screen showing Pay with FacePe button",
  },
  face: {
    step: "STEP 02",
    title: "Face detected",
    titleHtml: "Face <span class=\"text-brand-600\">detected</span>",
    desc: "3D liveness runs in the browser or app. A depth map confirms a real person — not a photo or video replay.",
    showPills: false,
    image: "https://www.figma.com/api/mcp/asset/a856bcf9-1b6e-4660-b175-54b2601c893b",
    imageAlt: "FacePe scanning a customer's face during online checkout",
  },
  identity: {
    step: "STEP 03",
    title: "Identity verified",
    titleHtml: "Identity <span class=\"text-brand-600\">verified</span>",
    desc: "Biometric template matched against enrollment. Risk score and device fingerprint checked in parallel.",
    showPills: false,
    image: "https://www.figma.com/api/mcp/asset/a856bcf9-1b6e-4660-b175-54b2601c893b",
    imageAlt: "Identity verification confirmed on FacePe checkout",
  },
  payment: {
    step: "STEP 04",
    title: "Payment authorized",
    titleHtml: "Payment <span class=\"text-brand-600\">authorized</span>",
    desc: "Payment token sent to your processor — Stripe, Razorpay, PayPal, or Cashfree. No OTP or CVV step required.",
    showPills: false,
    image: "https://www.figma.com/api/mcp/asset/a856bcf9-1b6e-4660-b175-54b2601c893b",
    imageAlt: "Payment authorization completing via FacePe",
  },
  receipt: {
    step: "STEP 05",
    title: "Receipt delivered",
    titleHtml: "Receipt <span class=\"text-brand-600\">delivered</span>",
    desc: "Order confirmed, digital receipt sent, and an immutable audit log written for chargeback defense.",
    showPills: false,
    image: "https://www.figma.com/api/mcp/asset/a856bcf9-1b6e-4660-b175-54b2601c893b",
    imageAlt: "Checkout complete with receipt delivered",
  },
};

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

  /** @param {keyof typeof ONLINE_FLOW} key */
  const apply = (key) => {
    const data = ONLINE_FLOW[key];
    if (!data) return;
    if (label) label.textContent = data.step;
    if (title) title.innerHTML = data.titleHtml;
    if (desc) desc.textContent = data.desc;
    if (image instanceof HTMLImageElement) {
      image.src = data.image;
      image.alt = data.imageAlt;
    }
    if (pills instanceof HTMLElement) {
      pills.hidden = !data.showPills;
    }
  };

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
