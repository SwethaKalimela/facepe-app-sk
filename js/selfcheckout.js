import { createIcons, icons } from "lucide";

import { initFaqAccordion } from "./home.js";

const SELFCHECKOUT_FLOW = {
  download: {
    label: "STEP 01",
    title: "Download app",
    desc: "Sign up with your name, email, and phone in just 3 minutes and you're all set!",
    showStores: true,
    image: "https://www.figma.com/api/mcp/asset/00871601-06cb-4472-ab15-c3299c6748e5",
    imageAlt: "FacePe app download and enrollment flow",
  },
  enroll: {
    label: "STEP 02",
    title: "Enroll face & ID",
    desc: "Complete a 3D face scan and link your government ID once. Every future visit skips enrollment entirely.",
    showStores: false,
    image: "https://www.figma.com/api/mcp/asset/3fc422e5-604d-483d-9c00-caba04f97f35",
    imageAlt: "Customer enrolling face and ID in the FacePe app",
  },
  shop: {
    label: "STEP 03",
    title: "Shop & scan items",
    desc: "Scan groceries at the self-checkout lane as usual. Your basket builds in real time on the terminal.",
    showStores: false,
    image: "https://www.figma.com/api/mcp/asset/a4367200-1ecd-47b4-b721-a1d0a2ad8fc0",
    imageAlt: "Shopper scanning items at a FacePe self-checkout lane",
  },
  look: {
    label: "STEP 04",
    title: "Look at the camera",
    desc: "3D liveness and facial match confirm identity in under two seconds. Age-restricted items gate automatically.",
    showStores: false,
    image: "https://www.figma.com/api/mcp/asset/a4367200-1ecd-47b4-b721-a1d0a2ad8fc0",
    imageAlt: "Customer completing face payment at checkout terminal",
  },
  receipt: {
    label: "STEP 05",
    title: "Receipt & out",
    desc: "Payment clears, digital receipt sends instantly, and an immutable audit record logs the transaction.",
    showStores: false,
    image: "https://www.figma.com/api/mcp/asset/a4367200-1ecd-47b4-b721-a1d0a2ad8fc0",
    imageAlt: "Checkout complete with receipt sent on FacePe terminal",
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
function initSelfcheckoutFlowTabs(root = document) {
  const container = root.querySelector("[data-selfcheckout-flow-tabs]");
  if (!container) return;

  const label = container.querySelector("[data-selfcheckout-flow-label]");
  const title = container.querySelector("[data-selfcheckout-flow-title]");
  const desc = container.querySelector("[data-selfcheckout-flow-desc]");
  const stores = container.querySelector("[data-selfcheckout-flow-stores]");
  const image = container.querySelector("[data-selfcheckout-flow-image]");

  /** @param {keyof typeof SELFCHECKOUT_FLOW} key */
  const apply = (key) => {
    const data = SELFCHECKOUT_FLOW[key];
    if (!data) return;
    if (label) label.textContent = data.label;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
    if (image instanceof HTMLImageElement) {
      image.src = data.image;
      image.alt = data.imageAlt;
    }
    if (stores instanceof HTMLElement) {
      stores.hidden = !data.showStores;
    }
  };

  container.querySelectorAll("[data-selfcheckout-flow-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-selfcheckout-flow-tab");
      if (!key || !(key in SELFCHECKOUT_FLOW)) return;
      container.querySelectorAll("[data-selfcheckout-flow-tab]").forEach((b) => {
        setTabActive(/** @type {HTMLButtonElement} */ (b), b === btn);
      });
      apply(/** @type {keyof typeof SELFCHECKOUT_FLOW} */ (key));
    });
  });
}

/** @param {ParentNode} [root] */
export function initSelfcheckoutPage(root = document) {
  mountIcons(root);
  initSelfcheckoutFlowTabs(root);
  initFaqAccordion(root);
}
