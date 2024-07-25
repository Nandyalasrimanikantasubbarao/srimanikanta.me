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

// EventListners
nav_home.addEventListener("click", function (e) {
  main_text.scrollIntoView({ behavior: "smooth" });
});

nav_about.addEventListener("click", function (e) {
  skill_about.scrollIntoView({ behavior: "smooth" });
});

nav_skill.addEventListener("click", function (e) {
  skill_show.scrollIntoView({ behavior: "smooth" });
});

nav_projects.addEventListener("click", function (e) {
  projects.scrollIntoView({ behavior: "smooth" });
});

bvc_eduacion_select.addEventListener("click", function (e) {
  bvc_educationn.scrollIntoView({ behavior: "smooth" });
});
