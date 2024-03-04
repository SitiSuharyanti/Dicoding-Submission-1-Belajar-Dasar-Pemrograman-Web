const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    nav.classList.add("nav-scrolling");
  } else {
    nav.classList.remove("nav-scrolling");
  }
});
