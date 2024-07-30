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
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

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
