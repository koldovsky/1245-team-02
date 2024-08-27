const slides = [
    '<div><img src="img/single-service-image-w-text/single-service-page.png" alt="Single Service Photo"></div>',
    '<div><img src="img/single-service-image-w-text/help-you-learn-picture.jpg" alt="Help you learn"></div>',
    '<div><img src="img/single-service-image-w-text/how-to-start.webp" alt="How to start"></div>',
];

let currentSlideIdx = 0;
let slideInterval;

function renderSlide(){
    const slideContainer = document.querySelector('.translation-interpreting-image');
    slideContainer.innerHTML = slides[currentSlideIdx];
}

function nextSlide(){
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    renderSlide();
}

function prevSlide(){
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    renderSlide();
}

function startSlideInterval(){
    slideInterval = setInterval(nextSlide, 3000); 
}

function stopSlideInterval(){
    clearInterval(slideInterval);
}

startSlideInterval();

renderSlide();

const btnNext = document.querySelector('.translation-interpreting__btn-next');
btnNext.addEventListener('click', function() {
    nextSlide();
    stopSlideInterval();
    startSlideInterval();
});

const btnPrev = document.querySelector('.translation-interpreting__btn-prev');
btnPrev.addEventListener('click', function() {
    prevSlide();
    stopSlideInterval();
    startSlideInterval();
});
