import { createIcons, icons } from "lucide";
import { loadPartial } from "./load-partial.js";
import { initNavbar } from "./navbar.js";
import { initAboutPage } from "./about.js";

const [
  navbarHtml,
  footerHtml,
  heroHtml,
  storyHtml,
  platformHtml,
  valuesHtml,
  // teamHtml,
  careersHtml,
] = await Promise.all([
  loadPartial("../components/layout/navbar.html"),
  loadPartial("../components/layout/footer.html"),
  loadPartial("../components/about/hero-section.html"),
  loadPartial("../components/about/story-section.html"),
  loadPartial("../components/about/platform-section.html"),
  loadPartial("../components/about/values-section.html"),
  // loadPartial("../components/about/team-section.html"),
  loadPartial("../components/about/careers-section.html"),
]);

const main = document.getElementById("main");
if (main) {
  main.innerHTML = [
    heroHtml,
    storyHtml,
    platformHtml,
    valuesHtml,
    // teamHtml,
    careersHtml,
  ]
    .map((html) => html.trim())
    .join("\n");
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initAboutPage();

createIcons({
  icons,
  attrs: { "stroke-width": 1.5 },
  nameAttr: "data-lucide",
});
