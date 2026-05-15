import { loadPartial } from "./load-partial.js";
import { initNavbar } from "./navbar.js";
import { initSelfcheckoutPage } from "./selfcheckout.js";

const [
  navbarHtml,
  footerHtml,
  heroHtml,
  problemHtml,
  keyFeaturesHtml,
  howItWorksHtml,
  caseStudiesHtml,
  rolloutHtml,
  faqHtml,
] = await Promise.all([
  loadPartial("../components/layout/navbar.html"),
  loadPartial("../components/layout/footer.html"),
  loadPartial("../components/selfcheckout/hero-section.html"),
  loadPartial("../components/selfcheckout/problem-section.html"),
  loadPartial("../components/selfcheckout/key-features-section.html"),
  loadPartial("../components/selfcheckout/how-it-works-section.html"),
  loadPartial("../components/selfcheckout/case-studies-section.html"),
  loadPartial("../components/selfcheckout/rollout-section.html"),
  loadPartial("../components/selfcheckout/faq-section.html"),
]);

const main = document.getElementById("main");
if (main) {
  main.innerHTML = [
    heroHtml,
    problemHtml,
    keyFeaturesHtml,
    howItWorksHtml,
    caseStudiesHtml,
    rolloutHtml,
    faqHtml,
  ]
    .map((html) => html.trim())
    .join("\n");
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initSelfcheckoutPage();
