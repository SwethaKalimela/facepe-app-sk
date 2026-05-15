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
  unifiedCommerceHtml,
  whyFacepeWinsHtml,
  // deploymentsHtml,
  testimonialHtml,
  futurePaymentsCtaHtml,
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
  loadPartial("../components/sections/unified-commerce-section.html"),
  loadPartial("../components/sections/why-facepe-wins-section.html"),
  // loadPartial("../components/sections/deployments-section.html"),
  loadPartial("../components/sections/testimonial-section.html"),
  loadPartial("../components/sections/future-payments-cta-section.html"),
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
    unifiedCommerceHtml,
    whyFacepeWinsHtml,
    // deploymentsHtml,
    testimonialHtml,
    futurePaymentsCtaHtml,
    faqHtml,
  ]
    .map((html) => html.trim())
    .join("\n");
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initHomePage();
