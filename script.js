// Navbar scroll animation

const navHeight = document.querySelector("#nav").clientHeight;
const nav = document.querySelector("#nav");
const doc = document.documentElement;
const w = window;
let prevScroll = w.scroll || doc.scrollTop;
let curScroll;
let direction = 0;
let prevDirection = 0;

checkScroll = function () {
  curScroll = w.scrollY;

  if (curScroll > prevScroll) {
    direction = 2;
  } else if (curScroll < prevScroll) {
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
};

const toggleHeader = function (direction, curScroll) {
  if (direction === 2 && curScroll > navHeight) {
    nav.style.animation = "nav-up 0.25s normal forwards ease-in-out";
    prevDirection = direction;
  } else if (direction === 1 && curScroll) {
    nav.style.animation = "nav-down 0.25s normal forwards ease-in-out";
    prevDirection = direction;
  }
};

window.addEventListener("scroll", checkScroll);

const faders = document.querySelectorAll(".fade-in");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

const cb = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
    }
  });
};

let observer = new IntersectionObserver(cb, options);

faders.forEach((fader) => {
  observer.observe(fader);
});
