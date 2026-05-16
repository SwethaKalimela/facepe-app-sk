import { createIcons, icons } from "lucide";

import { initFaqAccordion } from "./home.js";

const VERIFY_FLOW = {
  enroll: {
    label: "STEP 01 · ONE-TIME SETUP",
    titlePre: "Enroll ",
    titleEm: "Once",
    titlePost: "",
    desc: "Customer downloads the FacePe app, registers their face via 3D scan, and uploads a government-issued ID for matching. The whole flow takes under 3 minutes and it's done forever.",
    badges: ["2 Minutes", "No staff handling, no paper"],
    showStores: true,
    image: "/assets/images/verify/card-01.jpeg",
    imageAlt: "FacePe app enrollment and face registration",
  },
  arrive: {
    label: "STEP 02 · IN-BRANCH",
    titlePre: "Arrive at the ",
    titleEm: "branch",
    titlePost: ".",
    desc: "Walk straight past the queue. Identity is matched the moment the customer steps in front of the FacePe terminal — no documents, no staff handling, no friction.",
    badges: ["No queue", "No physical ID"],
    showStores: false,
    image: "../../assets/images/verify/card-02.jpeg",
    imageAlt:
      "Customer approaching a FacePe verification kiosk at a bank branch",
  },
  scan: {
    label: "STEP 03 · BIOMETRIC MATCH",
    titlePre: "Face scan in ",
    titleEm: "under 5 seconds",
    titlePost: ".",
    desc: "The 3D depth camera captures a liveness-verified scan. Our facial-matching engine compares the scan to the on-device template at 99.8% confidence.",
    badges: ["Under 5 sec", "99% accuracy"],
    showStores: false,
    image: "../../assets/images/verify/card-03.jpeg",
    imageAlt: "Biometric face scan at a FacePe terminal",
  },
  verified: {
    label: "STEP 04 · DONE",
    titlePre: "",
    titleEm: "Verified",
    titlePost: "",
    desc: "An immutable audit record is written. The customer's profile is unlocked at the staff terminal. The whole exchange takes less time than a card swipe.",
    badges: ["Audit trail", "SOC 2 compliant"],
    showStores: false,
    image: "../../assets/images/verify/card-04.jpeg",
    imageAlt: "Verification complete notification on FacePe terminal",
  },
};

const VERIFY_DEPLOY = {
  branches: {
    title: "Bank branch identity verification.",
    desc: "Automate KYC checks. Customers are verified in under 5 seconds, with no document handling, and every visit produces an immutable audit record.",
    benefits: [
      "Sub-5-second verification replaces 15-min manual checks",
      "66% reduction in account-takeover fraud (KPMG)",
      "Plug-and-play — under 1 hour per device installation",
    ],
    stats: [
      { value: "<5s", lines: ["Verification time", "vs. 15 min before"] },
      { value: "66%", lines: ["Account takeover", "fraud reduction"] },
      { value: "<1hr", lines: ["Per device", "installation time"] },
    ],
    image:
      "../assets/images/site/ff898ccf-3afe-4181-90bf-b82939b86047.png",
    imageAlt: "FacePe Verify deployment at a bank branch",
  },
  atm: {
    title: "ATM network identity access.",
    desc: "Cardless ATM authentication with sub-5-second face verification. No card insertion required for enrolled customers.",
    benefits: [
      "Cardless access for enrolled users",
      "3D liveness prevents spoofing at the ATM",
      "Immutable transaction audit records",
    ],
    stats: [
      { value: "<5s", lines: ["Auth time", "vs. card + PIN"] },
      { value: "99%", lines: ["Verification", "accuracy"] },
      { value: "24/7", lines: ["Self-service", "availability"] },
    ],
    image:
      "../assets/images/site/264bc9bb-fd9c-4020-866c-d2f4ad87c069.png",
    imageAlt: "FacePe Verify at an ATM network",
  },
  healthcare: {
    title: "Healthcare patient identity.",
    desc: "Verify patients at check-in without manual ID handling. Reduce fraud and accelerate intake for returning visitors.",
    benefits: [
      "Instant patient recognition at intake",
      "HIPAA-aligned privacy controls",
      "No repeated manual ID checks",
    ],
    stats: [
      { value: "<5s", lines: ["Check-in time", "per patient"] },
      { value: "80%", lines: ["Fewer manual", "ID checks"] },
      { value: "99%", lines: ["Match", "accuracy"] },
    ],
    image:
      "../assets/images/site/50e52fb9-b569-4855-8d49-3726453ebc3a.png",
    imageAlt: "FacePe Verify in a healthcare setting",
  },
  enterprise: {
    title: "Enterprise employee onboarding.",
    desc: "Replace manual background checks and badge issuance with biometric enrollment. One-time setup, verified every access.",
    benefits: [
      "One-time biometric enrollment",
      "Role-based access integration",
      "SOC 2 Type II audit trail",
    ],
    stats: [
      { value: "3 min", lines: ["Enrollment", "per employee"] },
      { value: "99%", lines: ["Identity match", "accuracy"] },
      { value: "SOC 2", lines: ["Type II", "compliant"] },
    ],
    image:
      "../assets/images/site/31822284-0a6c-4a9d-9810-4dfb921e3f36.png",
    imageAlt: "FacePe Verify for enterprise onboarding",
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
  btn.classList.toggle("text-ink-950", active);
  btn.classList.toggle("px-4", active);
  btn.classList.toggle("px-2.5", !active);
  btn.classList.toggle("text-ink-700", !active);
}

/** @param {ParentNode} root */
function initVerifyFlowTabs(root = document) {
  const container = root.querySelector("[data-verify-flow-tabs]");
  if (!container) return;

  const label = container.querySelector("[data-verify-flow-label]");
  const titlePre = container.querySelector("[data-verify-flow-title-pre]");
  const titleEm = container.querySelector("[data-verify-flow-title-em]");
  const titlePost = container.querySelector("[data-verify-flow-title-post]");
  const desc = container.querySelector("[data-verify-flow-desc]");
  const badges = container.querySelector("[data-verify-flow-badges]");
  const stores = container.querySelector("[data-verify-flow-stores]");
  const image = container.querySelector("[data-verify-flow-image]");

  /** @param {keyof typeof VERIFY_FLOW} key */
  const apply = (key) => {
    const data = VERIFY_FLOW[key];
    if (!data) return;
    if (label) label.textContent = data.label;
    if (titlePre) titlePre.textContent = data.titlePre;
    if (titleEm) titleEm.textContent = data.titleEm;
    if (titlePost) titlePost.textContent = data.titlePost;
    if (desc) desc.textContent = data.desc;
    if (image instanceof HTMLImageElement) {
      image.src = data.image;
      image.alt = data.imageAlt;
    }
    if (badges) {
      badges.innerHTML = data.badges
        .map((b, i) =>
          i === 0
            ? `<span class="inline-flex h-[43px] items-center rounded-[24px] bg-lilac-25 px-3 text-[13px] font-medium text-brand-600">${b}</span>`
            : `<span class="inline-flex h-[43px] items-center rounded-[24px] border border-border-neutral/60 bg-white/20 px-3 text-[13px] font-medium text-ink-body">${b}</span>`,
        )
        .join("");
    }
    if (stores instanceof HTMLElement) {
      stores.hidden = !data.showStores;
    }
  };

  container.querySelectorAll("[data-verify-flow-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-verify-flow-tab");
      if (!key || !(key in VERIFY_FLOW)) return;
      container.querySelectorAll("[data-verify-flow-tab]").forEach((b) => {
        setTabActive(/** @type {HTMLButtonElement} */ (b), b === btn);
      });
      apply(/** @type {keyof typeof VERIFY_FLOW} */ (key));
    });
  });
}

/** @param {ParentNode} root */
function initVerifyDeployTabs(root = document) {
  const container = root.querySelector("[data-verify-deploy-tabs]");
  if (!container) return;

  const title = container.querySelector("[data-verify-deploy-title]");
  const desc = container.querySelector("[data-verify-deploy-desc]");
  const benefits = container.querySelector("[data-verify-deploy-benefits]");
  const stats = container.querySelector("[data-verify-deploy-stats]");
  const image = container.querySelector("[data-verify-deploy-image]");

  /** @param {keyof typeof VERIFY_DEPLOY} key */
  const apply = (key) => {
    const data = VERIFY_DEPLOY[key];
    if (!data) return;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
    if (image instanceof HTMLImageElement) {
      image.src = data.image;
      image.alt = data.imageAlt;
    }
    if (benefits) {
      benefits.innerHTML = data.benefits
        .map(
          (b) =>
            `<li class="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-0 px-5 py-3.5 text-sm text-ink-950">
              <i data-lucide="check" class="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true"></i>
              ${b}
            </li>`,
        )
        .join("");
      mountIcons(benefits);
    }
    if (stats) {
      stats.innerHTML = data.stats
        .map(
          (s) =>
            `<div>
              <p class="text-[32px] font-bold text-brand-600">${s.value}</p>
              <p class="mt-1 text-sm text-ink-700">${s.lines[0]}</p>
              <p class="text-sm text-ink-700">${s.lines[1]}</p>
            </div>`,
        )
        .join("");
    }
  };

  container.querySelectorAll("[data-verify-deploy-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-verify-deploy-tab");
      if (!key || !(key in VERIFY_DEPLOY)) return;
      container.querySelectorAll("[data-verify-deploy-tab]").forEach((b) => {
        setTabActive(/** @type {HTMLButtonElement} */ (b), b === btn);
      });
      apply(/** @type {keyof typeof VERIFY_DEPLOY} */ (key));
    });
  });
}

/** @param {ParentNode} [root] */
export function initVerifyPage(root = document) {
  mountIcons(root);
  initVerifyFlowTabs(root);
  initVerifyDeployTabs(root);
  initFaqAccordion(root);
}
