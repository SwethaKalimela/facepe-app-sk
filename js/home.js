import { createIcons, icons } from "lucide";

import { initLogoMarquee } from "./animation.js";



const STEPS = {

  1: {

    label: "01",

    title: 'Download <span class="text-[#5b21ff]">&amp; Register</span>',

    desc: "Download FacePe, create your account with name, email & phone. Takes under a minute.",

    listHtml: `

      <div class="flex flex-wrap items-center gap-6">

        <a href="contact.html" class="inline-flex items-center gap-3 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">

          <span class="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-ink-950">

            <img src="https://www.figma.com/api/mcp/asset/dc065a9f-fb7b-4b5a-aa0c-13e77267018c" alt="" width="20" height="20" class="size-5" decoding="async" />

          </span>

          <span>

            <span class="block font-mono text-[10px] uppercase tracking-wider text-ink-700">Download on</span>

            <span class="block text-[15px] font-bold text-ink-950">App Store</span>

          </span>

        </a>

        <a href="contact.html" class="inline-flex items-center gap-3 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">

          <span class="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-ink-950">

            <img src="https://www.figma.com/api/mcp/asset/9cc4ba50-ca7a-417b-8827-0e26d98f4dac" alt="" width="24" height="25" class="size-6 object-contain" decoding="async" />

          </span>

          <span>

            <span class="block font-mono text-[10px] uppercase tracking-wider text-ink-700">Get it on</span>

            <span class="block text-[15px] font-bold text-ink-950">Google Play</span>

          </span>

        </a>

      </div>`,

    image: "https://www.figma.com/api/mcp/asset/39ef6bb0-96f0-4fe5-afbe-1ca760377c72",

    imageAlt: "Person downloading the FacePe app on a smartphone",

  },

  2: {

    label: "02",

    title: 'Enroll Your Face &amp; Link <span class="text-[#5b21ff]">Your Card</span>',

    desc: "Scan your face in 30 seconds. Link a secure card; details aren't stored.",

    list: [

      '<span class="font-semibold text-ink-950">3D face</span> scan via front camera',

      '<span class="font-semibold text-ink-950">Card tokenized by Stripe,</span> not stored raw',

      '<span class="font-semibold text-ink-950">Set your default</span> card for payments',

      '<span class="font-semibold text-ink-950">One-time setup,</span> <span class="text-[#5b21ff]">never repeat this again</span>',

    ],

    image: "https://www.figma.com/api/mcp/asset/50e52fb9-b569-4855-8d49-3726453ebc3a",

    imageAlt: "User completing a 3D face scan and linking a payment card in FacePe",

  },

  3: {

    label: "03",

    title: 'Walk Up. <span class="text-[#5b21ff]">Look. Done.</span>',

    desc: "Walk up to any FacePe terminal, look at the camera, and you're done.",

    list: [

      "Face scanned in under 1 second",

      "Identity verified and payment authorized.",

      "Push notification confirms payment",

      "Works in retail, banking, QSR, online.",

    ],

    image: "https://www.figma.com/api/mcp/asset/31822284-0a6c-4a9d-9810-4dfb921e3f36",

    imageAlt: "Customer paying at a FacePe self-checkout kiosk",

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



const STEP_TRANSITION_MS = 300;
/** @type {Map<string, HTMLImageElement>} */
const stepImageCache = new Map();

function preloadStepImages() {
  Object.values(STEPS).forEach(({ image }) => {
    if (stepImageCache.has(image)) return;
    const img = new Image();
    img.decoding = "async";
    img.src = image;
    stepImageCache.set(image, img);
  });
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** @param {number} ms */
function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/** @param {string} url */
function waitForStepImage(url) {
  const cached = stepImageCache.get(url);
  if (cached?.complete && cached.naturalWidth > 0) {
    return Promise.resolve(cached);
  }

  return new Promise((resolve) => {
    const img = cached ?? new Image();
    const done = () => resolve(img);
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
    if (!cached) {
      img.decoding = "async";
      img.src = url;
      stepImageCache.set(url, img);
    }
  });
}

/** @param {ParentNode} root */
function initStepsTabs(root = document) {
  const tablist = root.querySelector("[data-steps-tabs]");
  if (!tablist) return;

  const panel = root.querySelector("[data-steps-panel]");
  const label = root.querySelector("[data-step-label]");
  const title = root.querySelector("[data-step-title]");
  const desc = root.querySelector("[data-step-desc]");
  const list = root.querySelector("[data-step-list]");
  const image = root.querySelector("[data-step-image]");
  const visual = root.querySelector("[data-step-visual]");

  preloadStepImages();

  let currentStep = "2";
  let isTransitioning = false;

  /** @param {HTMLButtonElement} btn */
  const setTabActive = (btn, active) => {
    const badge = btn.querySelector("span:first-child");
    btn.setAttribute("aria-selected", active ? "true" : "false");
    btn.classList.toggle("rounded-[48px]", active);
    btn.classList.toggle("rounded-full", !active);
    btn.classList.toggle("bg-lilac-100", active);
    btn.classList.toggle("text-ink-950", active);
    btn.classList.toggle("text-ink-700", !active);
    if (badge) {
      badge.classList.toggle("bg-brand-600", active);
      badge.classList.toggle("text-white", active);
      badge.classList.toggle("bg-accordion-toggle-idle", !active);
    }
  };

  /** @param {keyof typeof STEPS} step */
  const applyStep = (step) => {
    const data = STEPS[step];
    if (!data) return;

    if (label) label.textContent = data.label;
    if (title) title.innerHTML = data.title;
    if (desc) desc.textContent = data.desc;
    if (list) {
      if ("listHtml" in data && data.listHtml) {
        list.innerHTML = data.listHtml;
      } else if ("list" in data && data.list) {
        list.innerHTML = `<ul class="max-w-[334px] list-disc space-y-3 pl-6 text-base leading-normal text-[#545454] marker:text-ink-950">${data.list
          .map((item) => `<li>${item}</li>`)
          .join("")}</ul>`;
      }
    }

    if (image instanceof HTMLImageElement) {
      image.src = data.image;
      image.alt = data.imageAlt;
    }

    if (visual instanceof HTMLElement) {
      visual.dataset.stepAlign = step === "1" ? "start" : "end";
    }
  };

  /** @param {keyof typeof STEPS} step @param {HTMLButtonElement} activeBtn */
  const switchStep = async (step, activeBtn) => {
    if (isTransitioning || step === currentStep || !(step in STEPS)) return;

    isTransitioning = true;
    const reduced = prefersReducedMotion();
    const data = STEPS[step];

    if (!reduced && panel instanceof HTMLElement) {
      panel.classList.add("is-step-transitioning");
      await wait(STEP_TRANSITION_MS);
    }

    await waitForStepImage(data.image);
    applyStep(step);

    tablist.querySelectorAll("[data-step-tab]").forEach((b) => {
      setTabActive(/** @type {HTMLButtonElement} */ (b), b === activeBtn);
    });

    if (!reduced && panel instanceof HTMLElement) {
      panel.classList.remove("is-step-transitioning");
      await wait(STEP_TRANSITION_MS);
    }

    currentStep = step;
    isTransitioning = false;
  };

  tablist.querySelectorAll("[data-step-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const step = btn.getAttribute("data-step-tab");
      if (!step || !(step in STEPS)) return;
      switchStep(/** @type {keyof typeof STEPS} */ (step), /** @type {HTMLButtonElement} */ (btn));
    });
  });

}



/** @param {ParentNode} root */
function initDeploymentsAccordion(root = document) {
  const container = root.querySelector("[data-deployments-accordion]");
  if (!container) return;

  container.querySelectorAll("details").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      container.querySelectorAll("details").forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

/** @param {ParentNode} root */
export function initFaqAccordion(root = document) {

  const container = root.querySelector("[data-faq-accordion]");

  if (!container) return;



  container.querySelectorAll("details").forEach((item) => {

    item.addEventListener("toggle", () => {

      if (!item.open) return;

      container.querySelectorAll("details").forEach((other) => {

        if (other !== item) other.open = false;

      });

    });

  });

}



/** @param {ParentNode} [root] */

export function initHomePage(root = document) {

  mountIcons(root);

  initLogoMarquee(root);

  initStepsTabs(root);

  initDeploymentsAccordion(root);

  initFaqAccordion(root);

}


