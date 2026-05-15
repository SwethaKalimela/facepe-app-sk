import { createIcons, icons } from "lucide";

/** @param {ParentNode} [root] */
function mountIcons(root = document) {
  createIcons({
    icons,
    attrs: {
      "stroke-width": 1.5,
    },
    nameAttr: "data-lucide",
    root,
  });
}

/** @param {HTMLElement} drawer */
function trapFocus(drawer) {
  const panel = drawer.querySelector("[data-mobile-drawer-panel]");
  if (!panel) return () => {};

  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
  const getFocusable = () =>
    Array.from(panel.querySelectorAll(focusableSelector)).filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getClientRects().length > 0,
    );

  const onKeydown = (e) => {
    if (e.key !== "Tab") return;
    const nodes = getFocusable();
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  panel.addEventListener("keydown", onKeydown);
  return () => panel.removeEventListener("keydown", onKeydown);
}

/**
 * Initialize FacePe navbar (icons, desktop dropdowns, mobile drawer).
 * @param {ParentNode} [root]
 */
export function initNavbar(root = document) {
  mountIcons(root);

  const header = root.querySelector("[data-site-header]");
  if (!header) return;

  /** @type {HTMLElement | null} */
  const drawer = header.querySelector("[data-mobile-drawer]");
  const toggle = header.querySelector("[data-mobile-nav-toggle]");
  const backdrop = header.querySelector("[data-mobile-drawer-backdrop]");
  const closeBtn = header.querySelector("[data-mobile-drawer-close]");
  let removeTrap = () => {};

  const setDrawerOpen = (open) => {
    if (!drawer || !toggle) return;
    drawer.classList.toggle("hidden", !open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    const iconOpen = toggle.querySelector("[data-mobile-nav-icon-open]");
    const iconClose = toggle.querySelector("[data-mobile-nav-icon-close]");
    iconOpen?.classList.toggle("hidden", open);
    iconClose?.classList.toggle("hidden", !open);
    document.body.classList.toggle("overflow-hidden", open);
    if (open) {
      removeTrap = trapFocus(drawer);
      closeBtn?.focus({ preventScroll: true });
    } else {
      removeTrap();
      removeTrap = () => {};
      toggle.focus({ preventScroll: true });
    }
  };

  toggle?.addEventListener("click", () => {
    const open = drawer?.classList.contains("hidden") ?? true;
    setDrawerOpen(open);
  });
  backdrop?.addEventListener("click", () => setDrawerOpen(false));
  closeBtn?.addEventListener("click", () => setDrawerOpen(false));

  /** @param {HTMLElement} dropdown */
  const closeDropdown = (dropdown) => {
    const trigger = dropdown.querySelector("[data-dropdown-trigger]");
    const panel = dropdown.querySelector("[data-dropdown-panel]");
    if (!trigger || !panel) return;
    trigger.setAttribute("aria-expanded", "false");
    panel.classList.add("hidden");
  };

  header.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
    const el = /** @type {HTMLElement} */ (dropdown);
    const trigger = el.querySelector("[data-dropdown-trigger]");
    const panel = el.querySelector("[data-dropdown-panel]");
    if (!trigger || !panel) return;

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      header.querySelectorAll("[data-dropdown]").forEach((d) => {
        if (d !== el) closeDropdown(/** @type {HTMLElement} */ (d));
      });
      trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
      panel.classList.toggle("hidden", isOpen);
      if (!isOpen) {
        const first = panel.querySelector("a[role='menuitem']");
        first?.focus({ preventScroll: true });
      }
    });
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (t.closest("[data-dropdown-panel]")) return;
    if (t.closest("[data-dropdown-trigger]")) return;
    header.querySelectorAll("[data-dropdown]").forEach((d) => {
      closeDropdown(/** @type {HTMLElement} */ (d));
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      header.querySelectorAll("[data-dropdown]").forEach((d) => {
        closeDropdown(/** @type {HTMLElement} */ (d));
      });
      if (drawer && !drawer.classList.contains("hidden")) setDrawerOpen(false);
    }
  });
}
