import { loadPartial } from "./load-partial.js";
import { initNavbar } from "./navbar.js";
import { initBackgroundPage } from "./background.js";

const [
  navbarHtml,
  footerHtml,
  heroHtml,
  whatIsHtml,
  howItWorksHtml,
  caseStudiesHtml,
  pricingHtml,
  ctaHtml,
] = await Promise.all([
  loadPartial("../components/layout/navbar.html"),
  loadPartial("../components/layout/footer.html"),
  loadPartial("../components/background/hero-section.html"),
  loadPartial("../components/background/what-is-section.html"),
  loadPartial("../components/background/how-it-works-section.html"),
  loadPartial("../components/background/case-studies-section.html"),
  loadPartial("../components/background/pricing-section.html"),
  loadPartial("../components/background/cta-section.html"),
]);

const main = document.getElementById("main");
if (main) {
  main.innerHTML = [
    heroHtml,
    whatIsHtml,
    howItWorksHtml,
    caseStudiesHtml,
    pricingHtml,
    ctaHtml,
  ]
    .map((html) => html.trim())
    .join("\n");
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initBackgroundPage();
