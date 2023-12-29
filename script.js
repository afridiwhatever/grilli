"use strict";

const preloader = document.querySelector(".preload");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, 1800);
});
