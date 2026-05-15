import navbarHtml from "../components/layout/navbar.html?raw";
import footerHtml from "../components/layout/footer.html?raw";
import heroHtml from "../components/sections/hero-section.html?raw";
import socialStepsHtml from "../components/sections/social-steps-section.html?raw";
import productsHtml from "../components/sections/products-grid-section.html?raw";
import demoImpactHtml from "../components/sections/demo-impact-section.html?raw";
import bridgeHtml from "../components/sections/bridge-section.html?raw";
import comparisonHtml from "../components/sections/comparison-section.html?raw";
import deploymentsHtml from "../components/sections/deployments-section.html?raw";
import testimonialHtml from "../components/sections/testimonial-section.html?raw";
import faqHtml from "../components/sections/faq-section.html?raw";

import { initNavbar } from "./navbar.js";
import { initHomePage } from "./home.js";

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
