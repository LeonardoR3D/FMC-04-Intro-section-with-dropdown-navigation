// Global Variables
const btnOpenMenu = document.querySelector("#btn-open-menu");
const btnCloseMenu = document.querySelector("#btn-close-menu");
const navBarMenu = document.querySelector("#nav-bar-menu");
const effectDarkBackground = document.querySelector("#effect-dark-background");
const featuresCollapsible = document.querySelector("#collapsible-features");
const companyCollapsible = document.querySelector("#collapsible-company");
const featuresIcon = document.querySelector("#features-icon");
const companyIcon = document.querySelector("#company-icon");
const featuresContent = document.querySelector("#features-content");
const companyContent = document.querySelector("#company-content");
// .
// .
// .
// .
// .
// .
// .
// . Functions
function openMenu() {
  navBarMenu.classList.remove("hidden");
  effectDarkBackground.classList.remove("hidden");
}

function closeMenu() {
  navBarMenu.classList.add("hidden");
  effectDarkBackground.classList.add("hidden");
}
// .
// .
// .
// .
// .
// .
// .
// . Events listeners
btnOpenMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);

featuresCollapsible.addEventListener("click", function () {
  featuresIcon.classList.toggle("collapsed");
  featuresContent.classList.toggle("hidden");
});

companyCollapsible.addEventListener("click", function () {
  companyIcon.classList.toggle("collapsed");
  companyContent.classList.toggle("hidden");
});
