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

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = () => {
  const isScrollingFromBottom = lastScrollPos > window.scrollY;

  if (isScrollingFromBottom) {
    header.classList.remove("hide");
  } else {
    setTimeout(() => {
      header.classList.add("hide");
    }, 1000);
  }
  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
  }
});

const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

const heroSliderItems = Array.from(
  document.querySelectorAll("[data-hero-slider-item]")
);

let lastActiveSliderItem = heroSliderItems[0];
let currentSlidePos = 0;

const updateSlide = () => {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = () => {
  if (currentSlidePos < heroSliderItems.length - 1) {
    currentSlidePos++;
  } else {
    currentSlidePos = 0;
  }
  updateSlide();
};

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = () => {
  if (currentSlidePos === 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSlide();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

let autoSlideInterval;

const autoSlide = () => {
  //   autoSlideInterval = setInterval(() => {
  //     slideNext();
  //   }, 5000);
};

addEventsOnElement([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", () => {
  clearInterval(autoSlideInterval);
});

addEventsOnElement(
  [heroSliderNextBtn, heroSliderPrevBtn],
  "mouseout",
  autoSlide
);

window.addEventListener("load", autoSlide);
