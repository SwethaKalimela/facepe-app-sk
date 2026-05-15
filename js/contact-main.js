import { createIcons, icons } from "lucide";
import { loadPartial } from "./load-partial.js";
import { initNavbar } from "./navbar.js";
import { initContactPage } from "./contact.js";

const [navbarHtml, footerHtml, contactHtml] = await Promise.all([
  loadPartial("../components/layout/navbar.html"),
  loadPartial("../components/layout/footer.html"),
  loadPartial("../components/contact/contact-section.html"),
]);

const main = document.getElementById("main");
if (main) {
  main.innerHTML = contactHtml.trim();
}

document.body.insertAdjacentHTML("afterbegin", navbarHtml.trim());
document.body.insertAdjacentHTML("beforeend", footerHtml.trim());

initNavbar();
initContactPage();

createIcons({
  icons,
  attrs: { "stroke-width": 1.5 },
  nameAttr: "data-lucide",
});
