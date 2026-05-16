import { createIcons, icons } from "lucide";

import { initFaqAccordion } from "./home.js";

const SELFCHECKOUT_FLOW = {
  download: {
    label: "STEP 01",
    title: "Download app",
    desc: "Sign up with your name, email, and phone in just 3 minutes and you're all set!",
    showStores: true,
    icon: null,
    image: "../assets/images/selfcheckout/flow-step-01-download.png",
    imageAlt: "FacePe app download on smartphone with enrollment screens",
  },
  enroll: {
    label: "STEP 02",
    title: "Enroll face & ID",
    desc: "3D face scan + government ID upload, encrypted and stored on-device.",
    showStores: false,
    icon: "../assets/images/selfcheckout/icon-step-enroll.svg",
    image: "../assets/images/selfcheckout/flow-step-02-enroll.png",
    imageAlt: "Customer enrolling face and government ID in the FacePe app",
  },
  shop: {
    label: "STEP 03",
    title: "Shop & scan items",
    desc: "Customer scans items at the kiosk just like today — nothing changes for the shopper.",
    showStores: false,
    icon: "../assets/images/selfcheckout/icon-step-shop.svg",
    image: "../assets/images/selfcheckout/flow-step-03-shop.png",
    imageAlt: "Shopper scanning items at a FacePe self-checkout kiosk",
  },
  look: {
    label: "STEP 04",
    title: "Look at the camera",
    desc: "Identity matched against the on-device template at 99.8% confidence in under 2 seconds.",
    showStores: false,
    icon: "../assets/images/selfcheckout/icon-step-look.svg",
    image: "../assets/images/selfcheckout/flow-step-04-look.png",
    imageAlt: "Customer completing face verification at checkout terminal",
  },
  receipt: {
    label: "STEP 05",
    title: "Receipt & out",
    desc: "Auto-payment, digital receipt, immutable audit record. Customer walks out.",
    showStores: false,
    icon: "../assets/images/selfcheckout/icon-step-receipt.svg",
    image: "../assets/images/selfcheckout/flow-step-05-receipt.png",
    imageAlt: "Checkout complete with digital receipt and customer leaving store",
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
  const iconWrap = container.querySelector("[data-selfcheckout-flow-icon-wrap]");
  const icon = container.querySelector("[data-selfcheckout-flow-icon]");
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
      image.classList.remove("object-top");
      image.classList.add("object-center");
    }
    if (iconWrap instanceof HTMLElement) {
      const showIcon = Boolean(data.icon);
      iconWrap.classList.toggle("hidden", !showIcon);
      iconWrap.classList.toggle("inline-flex", showIcon);
    }
    if (icon instanceof HTMLImageElement && data.icon) {
      icon.src = data.icon;
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
