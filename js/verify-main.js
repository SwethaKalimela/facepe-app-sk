import { loadPartial } from "./load-partial.js";
import { initNavbar } from "./navbar.js";
import { initVerifyPage } from "./verify.js";

const [
  navbarHtml,
  footerHtml,
  heroHtml,
  problemHtml,
  solutionHtml,
  howItWorksHtml,
  transformationHtml,
  deploymentsHtml,
  trustHtml,
  faqHtml,
] = await Promise.all([
  loadPartial("../components/layout/navbar.html"),
  loadPartial("../components/layout/footer.html"),
  loadPartial("../components/verify/hero-verify-section.html"),
  loadPartial("../components/verify/problem-statement-section.html"),
  loadPartial("../components/verify/solution-section.html"),
  loadPartial("../components/verify/how-it-works-section.html"),
  loadPartial("../components/verify/transformation-section.html"),
  loadPartial("../components/verify/deployments-section.html"),
  loadPartial("../components/verify/trust-compliance-section.html"),
  loadPartial("../components/verify/faq-section.html"),
]);

const main = document.getElementById("main");
if (main) {
  main.innerHTML = [
    heroHtml,
    problemHtml,
    solutionHtml,
    howItWorksHtml,
    transformationHtml,
    deploymentsHtml,
    trustHtml,
    faqHtml,
  ]
    .map((html) => html.trim())
    .join("\n");
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initVerifyPage();
