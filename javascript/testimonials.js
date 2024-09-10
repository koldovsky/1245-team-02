function changeSlide(next = true) {
    const slides = document.querySelector(".testimonials .carousel__items");
    if (next) {
        slides.append(slides.firstElementChild);
    } else {
        slides.prepend(slides.lastElementChild);
    }
}

// Controls
document.querySelector(".testimonials .carousel__button--right").addEventListener("click", function() {
    console.log('carousel__button--right');
    changeSlide();
});

document.querySelector(".testimonials .carousel__button--left").addEventListener("click", function() {
    console.log('carousel__button--left');
    changeSlide(false);
});
