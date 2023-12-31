"use strict";

const preloader = document.querySelector(".preload");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 300);
});

// add click events for toggling navbar
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const addEventsOnElement = (elements, eventType, callback) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

addEventsOnElement(navTogglers, "click", toggleNavbar);
