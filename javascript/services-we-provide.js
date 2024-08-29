const carousel = document.querySelector('.services__animated-carousel');
const carouselInner = carousel.querySelector('.services__container-elements');
const prevButton = carousel.querySelector('.product-animated-carousel__button--prev');
const nextButton = carousel.querySelector('.product-animated-carousel__button--next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

setupCarousel();

function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function setupCarousel() {
    // Remove clones if they exist
    
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    // Add clones at start and end for infinite looping
    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    // Add all slides to the carousel
    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    // Update slides
    slides = Array.from(carouselInner.children);

    updateCarousel();
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

// Event listeners
prevButton.addEventListener('click', () => {
    if (--currentIndex < 0) {
        currentIndex = slides.length - slidesPerView * 2 - 1;
        carouselInner.style.transition = 'none';
        updateCarousel();
        // Allow transition to complete, then reset transition style
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    carouselInner.style.transition = ''; // Ensure transition is not 'none'
    if (++currentIndex >= slides.length - slidesPerView) {
        currentIndex = slidesPerView;
        carouselInner.style.transition = 'none';
        updateCarousel();
        // Allow transition to complete, then reset transition style
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    }
    updateCarousel();
});

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});