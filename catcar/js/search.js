// search.js

// Данные о карточках автомобилей
const carCards = [
    { brand: 'Hyundai', model: 'Solaris', color: 'Металлик', class: 'Эконом' },
    { brand: 'Volkswagen', model: 'Polo', color: 'Кофейный', class: 'Эконом' },
    { brand: 'Toyota', model: 'Camry', color: 'Чёрный', class: 'Бизнес' },
    { brand: 'Kia', model: 'Rio', color: 'Красный', class: 'Эконом' },
    { brand: 'Skoda', model: 'Octavia', color: 'Металлик', class: 'Премиум' },
    { brand: 'Nissan', model: 'Qashqai', color: 'Красный', class: 'Бизнес' },
    { brand: 'Renault', model: 'Logan', color: 'Синий', class: 'Эконом' },
    { brand: 'Ford', model: 'Focus', color: 'Чёрный', class: 'Премиум' },
    { brand: 'Mazda', model: 'CX-5', color: 'Синий', class: 'Бизнес' },
    { brand: 'Hyundai', model: 'Creta', color: 'Металлик', class: 'Премиум' },
    { brand: 'Chevrolet', model: 'Aveo', color: 'Серый', class: 'Эконом' },
    { brand: 'Volkswagen', model: 'Tiguan', color: 'Синий', class: 'Бизнес' },
];

// Функция для заполнения выпадающих списков
function populateFilters() {
    const colorSelect = document.getElementById('color');
    const classSelect = document.getElementById('class');
    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');

    // Получаем уникальные значения из массива
    const colors = [...new Set(carCards.map(car => car.color))];
    const classes = [...new Set(carCards.map(car => car.class))];
    const brands = [...new Set(carCards.map(car => car.brand))];
    const models = [...new Set(carCards.map(car => car.model))];

    // Функция для добавления опций в выпадающий список
    function addOptions(selectElement, values) {
        selectElement.innerHTML = '<option value="">Выберите</option>'; // Пустая опция
        values.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            selectElement.appendChild(option);
        });
    }

    // Заполняем списки
    addOptions(colorSelect, colors);
    addOptions(classSelect, classes);
    addOptions(brandSelect, brands);
    addOptions(modelSelect, models);
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', populateFilters);
