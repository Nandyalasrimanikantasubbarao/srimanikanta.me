// strict mode
"use strict";

// selectors
const nav_home = document.querySelector(".nav-home");
const nav_about = document.querySelector(".nav-About");
const nav_skill = document.querySelector(".nav-skills");

const main_text = document.querySelector(".main-text");
const nav_projects = document.querySelector(".nav-projects");
const skill_about = document.querySelector(".about-skills");
const skill_show = document.querySelector(".skills");
const projects = document.querySelector(".Projects");
const bvc_eduacion_select = document.getElementById("bvc_eduaction");
const bvc_educationn = document.querySelector(".education");

const btnsOpenModal = document.querySelectorAll(".btn-animate");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-form");

const openModal = function (e) {
  // e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

document.querySelector(".nav-bar").addEventListener("click", function (e) {
  e.preventDefault();

  // Maching ids
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

function project() {
  alert("currently working on this section");
}

const projectImg = document.querySelector(".project-1");
const projectHid = document.querySelector(".project-hidden");
const btnClose = document.querySelector(".btn-close");

projectImg.addEventListener("click", function () {
  projectHid.classList.toggle("specific");
  overlay.classList.remove("hidden");
});

btnClose.addEventListener("click", function () {
  projectHid.classList.toggle("specific");
  overlay.classList.add("hidden");
});

// stickey navbar

const header = document.querySelector(".header");
const nav = document.querySelector(".nav-bar");

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const obsCallBack = function (entries) {
  entries.forEach((entrie) => {
    if (!entrie.isIntersecting) nav.classList.add("stickey");
    else nav.classList.remove("stickey");
  });
};

const obs = new IntersectionObserver(obsCallBack, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});

obs.observe(header);

// lazy section reveal

// const sectoinALl = document.querySelectorAll(".section");

// const secObsCall = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("section--hidden");
//   // observer.unobserver(entry.target);
// };

// const sectionObs = new IntersectionObserver(secObsCall, {
//   root: null,
//   threshold: 0.15,
// });

// sectoinALl.forEach(function (sec) {
//   sectionObs.observe(sec);
//   sec.classList.add("section--hidden");
// });
