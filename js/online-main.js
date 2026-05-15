import { loadPartial } from "./load-partial.js";
import { initNavbar } from "./navbar.js";
import { initOnlinePage } from "./online.js";

const [
  navbarHtml,
  footerHtml,
  heroHtml,
  problemHtml,
  howItWorksHtml,
  caseStudiesHtml,
  integrationHtml,
  faqHtml,
] = await Promise.all([
  loadPartial("../components/layout/navbar.html"),
  loadPartial("../components/layout/footer.html"),
  loadPartial("../components/online/hero-section.html"),
  loadPartial("../components/online/problem-section.html"),
  loadPartial("../components/online/how-it-works-section.html"),
  loadPartial("../components/online/case-studies-section.html"),
  loadPartial("../components/online/integration-section.html"),
  loadPartial("../components/online/faq-section.html"),
]);

const main = document.getElementById("main");
if (main) {
  main.innerHTML = [
    heroHtml,
    problemHtml,
    howItWorksHtml,
    caseStudiesHtml,
    integrationHtml,
    faqHtml,
  ]
    .map((html) => html.trim())
    .join("\n");
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initOnlinePage();
