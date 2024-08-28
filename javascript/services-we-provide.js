// Отримуємо елементи
const prevButton = document.getElementById('services__left');
const nextButton = document.getElementById('services__rigth');
const serviceContainer = document.querySelector('.services__container-elements');
const services = document.querySelectorAll('.services__container-white');
const totalServices = services.length;

let currentIndex = 0;
const visibleItems = 3; // кількість видимих карток одночасно
const itemWidth = services[0].clientWidth; // ширина однієї картки

// Задаємо початкову ширину контейнера
serviceContainer.style.width = `${itemWidth * totalServices}px`;

// Функція для перемикання слайдів
function slideServices(index) {
    serviceContainer.style.transform = `translateX(-${index * itemWidth}px)`;
    serviceContainer.style.transition = 'transform 0.5s ease';
}

// Обробники подій для кнопок
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slideServices(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalServices - visibleItems) {
        currentIndex++;
        slideServices(currentIndex);
    }
});

// Початковий показ трьох карток
slideServices(currentIndex);
