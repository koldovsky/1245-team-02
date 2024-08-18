 
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".header__nav-bar");
    navBar.classList.toggle("active");
} 
//чи потрібний код вище для гамбургер меню???



//цей код працює добре
// Отримання посилань меню
var menuLinks = document.querySelectorAll('.nav__menu-link');

// Додавання обробника подій для кожного посилання
menuLinks.forEach(function(link) {
link.addEventListener('click', function(event) {
// Згортання меню
var navBar = document.querySelector(".header__nav-bar");
navBar.classList.remove("active");
});
});

// Отримання кнопки гамбургера
var hamburger = document.querySelector(".hamburger");

// Додавання обробника подій для кнопки гамбургера
hamburger.onclick = function () {
// Розгортання або згортання меню
var navBar = document.querySelector(".header__nav-bar");
navBar.classList.toggle("active");
};

 