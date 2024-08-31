const prevButton = document.querySelector('.tutors__carousel-controls .prev');
const nextButton = document.querySelector('.tutors__carousel-controls .next');
const carousel = document.querySelector('.tutors__carousel');
const cardWidth = carousel.querySelector('.tutor-card').offsetWidth + parseInt(getComputedStyle(carousel).gap);

let scrollAmount = 0;
let maxScrollAmount = cardWidth * (carousel.children.length - 1);

<<<<<<< HEAD
function updateCarousel() {
  if (window.innerWidth < 768) {
    carousel.style.scrollSnapType = 'x mandatory';
  } else {
    carousel.style.scrollSnapType = 'none';
  }
=======
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const carouselWidth = carousel.offsetWidth;
    const visibleCards = Math.floor(carouselWidth / cardWidth);

    console.log('cardWidth:', cardWidth);
    console.log('carouselWidth:', carouselWidth);
    console.log('visibleCards:', visibleCards);
    console.log('index:', index);

    if (index < 0) index = 0;
    if (index > cards.length - visibleCards) index = cards.length - visibleCards;

    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    prevButton.disabled = index === 0;
    nextButton.disabled = index >= cards.length - visibleCards;
  }
  
  prevButton.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    const cardWidth = cards[0].offsetWidth;
    const carouselWidth = carousel.offsetWidth;
    const visibleCards = Math.floor(carouselWidth / cardWidth);

    if (index < cards.length - visibleCards) {
      index++;
      updateCarousel();
    }
  });

  updateCarousel();
>>>>>>> b09d234b1c1be89c4b889c1b08f8bd73a0716613
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
