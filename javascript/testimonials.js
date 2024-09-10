const slides = document.querySelector(".testimonials .carousel__items");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
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
