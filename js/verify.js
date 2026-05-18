import { createIcons, icons } from "lucide";

import { initFaqAccordion } from "./home.js";

const VERIFY_FLOW = {
  enroll: {
    label: "STEP 01 · ONE-TIME SETUP",
    titlePre: "Enroll ",
    titleEm: "Once",
    titlePost: "",
    desc: "Download the FacePe app, complete a 3D facial scan, and verify your identity using a government-issued ID. Setup takes less than 3 minutes — then you're good to go.",
    badges: ["Takes 2 minutes", "No paperwork. No staff handling"],
    showStores: true,
    image: "/assets/images/verify/card-01.jpeg",
    imageAlt: "FacePe app enrollment and face registration",
  },
  arrive: {
    label: "STEP 02 · IN-BRANCH",
    titlePre: "Arrive at the ",
    titleEm: "branch",
    titlePost: ".",
    desc: "Walk past the queue and step in front of the FacePe terminal. Your identity is verified instantly — no documents, no staff handling, no friction.",
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
    desc: "A 3D depth face scan instantly verifies your identity against your secure on-device template — with 99.8% accuracy.",
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
    desc: "Your identity is instantly confirmed and your profile becomes available to staff — all in less time than a card swipe.",
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
    image: "../../assets/images/verify/deployments/deployments-01.png",
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
    image: "../../assets/images/verify/deployments/deployments-02.png",
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
    image: "../../assets/images/verify/deployments/deployments-03.png",
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
    image: "../../assets/images/verify/deployments/deployments-04.png",
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
            `<li class="flex items-center gap-3 rounded-xl border border-border-subtle bg-lilac-25 px-5 py-3.5 text-sm text-ink-950">
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
