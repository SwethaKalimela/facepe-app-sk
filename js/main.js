// #region agent log
fetch("http://127.0.0.1:7601/ingest/47d748dd-ca9d-40e0-98f5-d0e0e158fae5", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "388f50",
  },
  body: JSON.stringify({
    sessionId: "388f50",
    runId: "pre-fix",
    hypothesisId: "H1",
    location: "main.js:1",
    message: "main.js module executed",
    data: { protocol: location.protocol, origin: location.origin },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

import { loadPartial } from "./load-partial.js";
import { initNavbar } from "./navbar.js";
import { initHomePage } from "./home.js";

const [
  navbarHtml,
  footerHtml,
  heroHtml,
  socialStepsHtml,
  productsHtml,
  demoImpactHtml,
  bridgeHtml,
  comparisonHtml,
  deploymentsHtml,
  testimonialHtml,
  faqHtml,
] = await Promise.all([
  loadPartial("../components/layout/navbar.html"),
  loadPartial("../components/layout/footer.html"),
  loadPartial("../components/sections/hero-section.html"),
  loadPartial("../components/sections/social-steps-section.html"),
  loadPartial("../components/sections/products-grid-section.html"),
  loadPartial("../components/sections/demo-impact-section.html"),
  loadPartial("../components/sections/bridge-section.html"),
  loadPartial("../components/sections/comparison-section.html"),
  loadPartial("../components/sections/deployments-section.html"),
  loadPartial("../components/sections/testimonial-section.html"),
  loadPartial("../components/sections/faq-section.html"),
]);

const main = document.getElementById("main");
if (main) {
  main.innerHTML = [
    heroHtml,
    socialStepsHtml,
    productsHtml,
    demoImpactHtml,
    bridgeHtml,
    comparisonHtml,
    deploymentsHtml,
    testimonialHtml,
    faqHtml,
  ]
    .map((html) => html.trim())
    .join("\n");
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initHomePage();
