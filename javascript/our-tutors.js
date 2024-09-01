const prevButton = document.querySelector('.tutors__carousel-controls .prev');
const nextButton = document.querySelector('.tutors__carousel-controls .next');
const carousel = document.querySelector('.tutors__carousel');
const cardWidth = carousel.querySelector('.tutor-card').offsetWidth + parseInt(getComputedStyle(carousel).gap);
const totalCards = carousel.querySelectorAll('.tutor-card').length;
const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
const maxScrollAmount = (totalCards - visibleCards) * cardWidth;

let scrollAmount = 0;

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
  if (scrollAmount > maxScrollAmount) {
    scrollAmount = 0;
  }
  handleScroll();
});

prevButton.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) {
    scrollAmount = maxScrollAmount;
  }
  handleScroll();
});
