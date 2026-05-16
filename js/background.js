import { createIcons, icons } from "lucide";
import { initFaqAccordion } from "./home.js";

const BG_IMG = "/assets/images/background";

const BACKGROUND_FLOW = {
  pullup: {
    step: "Step 1 · customer pulls up",
    title: "The lane recognizes the car before they reach the window.",
    desc: "The vehicle enters the lane. The 3D depth camera activates automatically — no button, no app, no interaction needed from the customer.",
    pills: ["3D depth sensing", "Auto-activates on approach", "Privacy-first"],
    image: `${BG_IMG}/flow-pullup.png`,
    imageAlt: "Vehicle detected in drive-thru lane with 3D sensing",
  },
  recognized: {
    step: "Step 2 · Face Recognized",
    titleHtml: "Face recognized in<br />under 1 second.",
    desc: "The 3D camera captures facial geometry and matches it against enrolled biometrics. Liveness detection runs simultaneously, rejecting photos, masks, and videos.",
    pills: ["Under 1 second", "99%+ accuracy", "Anti-spoof active"],
    image: `${BG_IMG}/flow-recognized.png`,
    imageAlt: "3D camera recognizing a customer at the drive-thru",
  },
  avatar: {
    step: "Step 3 · AI Avatar",
    titleHtml: "AI avatar greets &amp;<br />takes the order.",
    desc: "The AI avatar greets the customer by name, shows their usual items, and asks if they want them. The voice is natural and conversational.",
    pills: ["Personalized greeting", "Order history recalled", "Anti-spoof active"],
    image: `${BG_IMG}/flow-avatar.png`,
    imageAlt: "AI avatar greeting a customer and taking their order",
  },
  confirmed: {
    step: "Step 4 · Order Confirmed",
    titleHtml: "Order confirmed.<br />Payment authorized by face.",
    desc: "The customer confirms their order. Payment is authorized instantly, with no card or PIN needed. The transaction completes before reaching the pickup.",
    pills: ["Face-based payment", "Zero card contact", "Under 2 seconds total"],
    image: `${BG_IMG}/flow-confirmed.png`,
    imageAlt: "Order confirmed with face-based payment at drive-thru",
  },
  receipt: {
    step: "Step 5 · Receipt Sent",
    titleHtml: "Receipt sent.<br />Loyalty updated. Done.",
    desc: "A digital receipt is sent to the customer's phone upon payment. Loyalty points are added automatically, and the merchant dashboard logs the transaction.",
    pills: ["Face-based payment", "Zero card contact", "Under 2 seconds total"],
    image: `${BG_IMG}/flow-receipt.png`,
    imageAlt: "Digital receipt sent and loyalty updated after checkout",
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
function initBackgroundFlowTabs(root = document) {
  const container = root.querySelector("[data-background-flow-tabs]");
  if (!container) return;

  const label = container.querySelector("[data-background-flow-label]");
  const title = container.querySelector("[data-background-flow-title]");
  const desc = container.querySelector("[data-background-flow-desc]");
  const pills = container.querySelector("[data-background-flow-pills]");
  const image = container.querySelector("[data-background-flow-image]");

  /** @param {keyof typeof BACKGROUND_FLOW} key */
  const apply = (key) => {
    const data = BACKGROUND_FLOW[key];
    if (!data) return;
    if (label) label.textContent = data.step;
    if (title) {
      if ("titleHtml" in data && data.titleHtml) {
        title.innerHTML = data.titleHtml;
      } else if ("title" in data && data.title) {
        title.textContent = data.title;
      }
    }
    if (desc) desc.textContent = data.desc;
    if (image instanceof HTMLImageElement) {
      image.src = data.image;
      image.alt = data.imageAlt;
    }
    if (pills instanceof HTMLElement) {
      pills.innerHTML = data.pills
        .map(
          (text) =>
            `<span class="inline-flex h-9 items-center gap-2 rounded-full border border-border-subtle bg-surface-0 px-3.5 text-[13px] font-medium text-ink-950 shadow-chip"><i data-lucide="check" class="size-3.5 text-brand-600" aria-hidden="true"></i>${text}</span>`
        )
        .join("");
      mountIcons(pills);
    }
  };

  container.querySelectorAll("[data-background-flow-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-background-flow-tab");
      if (!key || !(key in BACKGROUND_FLOW)) return;
      container.querySelectorAll("[data-background-flow-tab]").forEach((b) => {
        setTabActive(/** @type {HTMLButtonElement} */ (b), b === btn);
      });
      apply(/** @type {keyof typeof BACKGROUND_FLOW} */ (key));
    });
  });
}

/** @param {ParentNode} root */
function debugPricingFeaturedBg(root = document) {
  const article = root.querySelector("[data-pricing-featured]");
  const bg = root.querySelector("[data-pricing-featured-bg]");
  if (!article || !bg) return;

  const articleStyles = getComputedStyle(article);
  const bgStyles = getComputedStyle(bg);
  const figmaExpected =
    "linear-gradient(133.28deg, rgb(91, 33, 255) 22.36%, rgb(223, 208, 255) 110.33%)";

  // #region agent log
  fetch("http://127.0.0.1:7368/ingest/21cae3c4-b5a2-4e23-80d2-495230f9c8f2", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "79ff8f" },
    body: JSON.stringify({
      sessionId: "79ff8f",
      runId: "pre-fix",
      hypothesisId: "A",
      location: "background.js:debugPricingFeaturedBg",
      message: "Featured pricing article computed background",
      data: {
        articleBgImage: articleStyles.backgroundImage,
        articleBgColor: articleStyles.backgroundColor,
        hasDarkGradient: articleStyles.backgroundImage.includes("#1c1f2e"),
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  // #region agent log
  fetch("http://127.0.0.1:7368/ingest/21cae3c4-b5a2-4e23-80d2-495230f9c8f2", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "79ff8f" },
    body: JSON.stringify({
      sessionId: "79ff8f",
      runId: "pre-fix",
      hypothesisId: "B",
      location: "background.js:debugPricingFeaturedBg",
      message: "Featured pricing overlay layer computed background",
      data: {
        bgImage: bgStyles.backgroundImage,
        bgDisplay: bgStyles.display,
        matchesFigmaPurple: bgStyles.backgroundImage.includes("91, 33, 255"),
        figmaExpected,
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
}

/** @param {ParentNode} [root] */
export function initBackgroundPage(root = document) {
  mountIcons(root);
  initBackgroundFlowTabs(root);
  initFaqAccordion(root);
  debugPricingFeaturedBg(root);
}
