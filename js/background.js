import { createIcons, icons } from "lucide";

const BACKGROUND_FLOW = {
  pullup: {
    step: "Step 1 · customer pulls up",
    title: "The lane recognizes the car before they reach the window.",
    desc: "The vehicle enters the lane. The 3D depth camera activates automatically — no button, no app, no interaction needed from the customer.",
    pills: ["3D depth sensing", "Auto-activates on approach", "Privacy-first"],
    image: "https://www.figma.com/api/mcp/asset/3161d71c-dbe9-4e58-b305-3bd14d9e231e",
    imageAlt: "Vehicle detected in drive-thru lane with 3D sensing",
  },
  recognized: {
    step: "Step 2 · Face Recognized",
    titleHtml: "Face recognized in<br />under 1 second.",
    desc: "The 3D camera captures facial geometry and matches it against enrolled biometrics. Liveness detection runs simultaneously, rejecting photos, masks, and videos.",
    pills: ["Under 1 second", "99%+ accuracy", "Anti-spoof active"],
    image: "https://www.figma.com/api/mcp/asset/b677b2e1-34e0-4d0f-8269-5ecdfb462ae5",
    imageAlt: "3D camera recognizing a customer at the drive-thru",
  },
  avatar: {
    step: "Step 3 · AI Avatar",
    titleHtml: "AI avatar greets &amp;<br />takes the order.",
    desc: "The AI avatar greets the customer by name, shows their usual items, and asks if they want them. The voice is natural and conversational.",
    pills: ["Personalized greeting", "Order history recalled", "Anti-spoof active"],
    image: "https://www.figma.com/api/mcp/asset/12eba1c9-8bf3-4a38-8b4e-8fdc9d35e84b",
    imageAlt: "AI avatar greeting a customer and taking their order",
  },
  confirmed: {
    step: "Step 4 · Order Confirmed",
    titleHtml: "Order confirmed.<br />Payment authorized by face.",
    desc: "The customer confirms their order. Payment is authorized instantly, with no card or PIN needed. The transaction completes before reaching the pickup.",
    pills: ["Face-based payment", "Zero card contact", "Under 2 seconds total"],
    image: "https://www.figma.com/api/mcp/asset/0860375b-705c-4c85-a873-23c532e7f4e0",
    imageAlt: "Order confirmed with face-based payment at drive-thru",
  },
  receipt: {
    step: "Step 5 · Receipt Sent",
    titleHtml: "Receipt sent.<br />Loyalty updated. Done.",
    desc: "A digital receipt is sent to the customer's phone upon payment. Loyalty points are added automatically, and the merchant dashboard logs the transaction.",
    pills: ["Face-based payment", "Zero card contact", "Under 2 seconds total"],
    image: "https://www.figma.com/api/mcp/asset/a778f68b-99c3-43d0-bcb1-8e09f2ffc331",
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

/** @param {ParentNode} [root] */
export function initBackgroundPage(root = document) {
  mountIcons(root);
  initBackgroundFlowTabs(root);
}
