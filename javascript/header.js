const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".header__nav-bar");
const menuLinks = document.querySelectorAll(".header__menu-link");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    navBar.classList.remove("active");
  });
});

hamburger.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

 