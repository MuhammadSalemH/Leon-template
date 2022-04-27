"use strict";
const container = document.querySelector(".container");
const icon = document.querySelector(".header__icon");
const nav = document.querySelector(".header__nav");
const links = document.querySelector(".header__links");
const shape = document.querySelectorAll(".header__shape");
const services = document.querySelector(".services");
const portfolio = document.querySelector(".portfolio");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const features = document.querySelector(".features");
const arrow = document.querySelector(".landing__animation");
const link = document.querySelectorAll(".header__link");
const scrollUp = document.querySelector(".scroll");

/////////////// Display & hide nav ///////////////
const displayElement = function (ele, prop, value) {
  ele.style[prop] = value;
};

icon.addEventListener("mouseenter", function () {
  shape.forEach((shape) => shape.style.setProperty("width", "100%"));
  displayElement(nav, "display", "block");
});

document.addEventListener("click", function () {
  shape.forEach((shape) => shape.style.removeProperty("width"));
  displayElement(nav, "display", "none");
});

//////////////////////Implement scrolling to Top/////////////////?
window.addEventListener("scroll", function () {
  if (this.scrollY >= 1000) scrollUp.style.transform = "translateX(0)";
  else scrollUp.style.transform = "translateX(10rem)";
});
scrollUp.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

/////////////// Implement smooth scrolling ///////////////
arrow.addEventListener("click", function (e) {
  window.scrollTo({
    left: features.getBoundingClientRect().x + window.scrollX,
    top: features.getBoundingClientRect().y + window.scrollY,
    behavior: "smooth",
  });
});

//////////////// Implement Navigation ////////////////////
nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("header__link")) {
    e.preventDefault();
    const sectionID = e.target.getAttribute("href");
    const section = document.querySelector(sectionID);
    window.scrollTo({
      left: section.getBoundingClientRect().x + window.scrollX,
      top: section.getBoundingClientRect().y + window.scrollY,
      behavior: "smooth",
    });
  }
});
