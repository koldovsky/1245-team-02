document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Найти элементы карусели и кнопок
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carousel = document.querySelector('.tutors__carousel');
  const cards = document.querySelectorAll('.tutor-card');
  
  // Логирование найденных элементов
  console.log('prevButton:', prevButton);
  console.log('nextButton:', nextButton);
  console.log('carousel:', carousel);
  console.log('cards:', cards);

  // Проверка наличия всех необходимых элементов
  if (!prevButton || !nextButton || !carousel || cards.length === 0) {
    console.error('Не удалось найти один или несколько элементов. Проверьте селекторы.');
    return;
  }

  // Инициализация переменной индекса текущей карточки
  let index = 0;

  // Функция обновления карусели
  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth; // Ширина одной карточки
    const carouselWidth = carousel.offsetWidth; // Ширина карусели
    const visibleCards = Math.floor(carouselWidth / cardWidth); // Количество видимых карточек

    // Логирование значений для отладки
    console.log('cardWidth:', cardWidth);
    console.log('carouselWidth:', carouselWidth);
    console.log('visibleCards:', visibleCards);
    console.log('index:', index);

    // Корректировка индекса при выходе за границы
    if (index < 0) index = 0;
    if (index > cards.length - visibleCards) index = cards.length - visibleCards;

    // Применение стилей для перемещения карусели
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    prevButton.disabled = index === 0;
    nextButton.disabled = index >= cards.length - visibleCards;
  }

  // Обработчик нажатия на кнопку "Предыдущая"
  prevButton.addEventListener('click', () => {
    console.log('Prev button clicked');
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  // Обработчик нажатия на кнопку "Следующая"
  nextButton.addEventListener('click', () => {
    console.log('Next button clicked');
    const cardWidth = cards[0].offsetWidth;
    const carouselWidth = carousel.offsetWidth;
    const visibleCards = Math.floor(carouselWidth / cardWidth);

    if (index < cards.length - visibleCards) {
      index++;
      updateCarousel();
    }
  });

  // Инициализация карусели при загрузке
  updateCarousel();
});