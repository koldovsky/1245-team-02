const slides = document.querySelectorAll('.courses-carousel__slide');
const totalSlides = slides.length;

const btnNext = document.querySelector('.courses-carousel__next');
const btnPrev = document.querySelector('.courses-carousel__prev');

let currentSlideIdx = 0;
function renderSlide() {
    const slideContainer = document.querySelector('.courses-carousel__viewport');
    slideContainer.innerHTML = '';
    const newSlide = slides[currentSlideIdx].cloneNode(true);
    slideContainer.appendChild(newSlide);
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= totalSlides ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? totalSlides - 1 : currentSlideIdx - 1;
    renderSlide();
}
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
renderSlide();