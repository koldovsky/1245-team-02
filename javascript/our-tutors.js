const prevButton = document.querySelector('.tutors__carousel-controls .prev');
const nextButton = document.querySelector('.tutors__carousel-controls .next');
const carousel = document.querySelector('.tutors__carousel');
const cardWidth = carousel.querySelector('.tutor-card').offsetWidth + parseInt(getComputedStyle(carousel).gap);

let scrollAmount = 0;
let maxScrollAmount = cardWidth * (carousel.children.length - 1);

function updateCarousel() {
  if (window.innerWidth < 768) {
    carousel.style.scrollSnapType = 'x mandatory';
  } else {
    carousel.style.scrollSnapType = 'none';
  }
}

function scrollToPosition(position) {
  carousel.scrollTo({
    left: position,
    behavior: 'smooth'
  });
}

function handleScroll() {
  if (scrollAmount < 0) {
    scrollAmount = maxScrollAmount;
    scrollToPosition(scrollAmount);
  } else if (scrollAmount > maxScrollAmount) {
    scrollAmount = 0;
    scrollToPosition(scrollAmount);
  } else {
    scrollToPosition(scrollAmount);
  }
}

nextButton.addEventListener('click', () => {
  scrollAmount += cardWidth;
  handleScroll();
});

prevButton.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  handleScroll();
});

updateCarousel(); // Initial call to set up on page load
window.addEventListener('resize', updateCarousel); // Update on window resize
