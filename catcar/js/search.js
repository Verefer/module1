document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript загружен!"); // Проверка запуска скрипта

    const colorSelect = document.getElementById('color');
    const classSelect = document.getElementById('class');
    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');

    console.log("Элементы формы поиска: ", colorSelect, classSelect, brandSelect, modelSelect);

    function populateFilters() {
        const carCards = [
            { brand: 'Hyundai', model: 'Solaris', color: 'Металлик', class: 'Эконом' },
            { brand: 'Volkswagen', model: 'Polo', color: 'Кофейный', class: 'Эконом' },
            { brand: 'Toyota', model: 'Camry', color: 'Чёрный', class: 'Бизнес' },
            { brand: 'Kia', model: 'Rio', color: 'Красный', class: 'Эконом' },
            { brand: 'Skoda', model: 'Octavia', color: 'Металлик', class: 'Премиум' }
        ];

        console.log("Данные для фильтров: ", carCards);

        function addOptions(selectElement, values) {
            selectElement.innerHTML = '<option value="">Выберите</option>';
            values.forEach(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value;
                selectElement.appendChild(option);
            });
        }

        const colors = [...new Set(carCards.map(car => car.color))];
        const classes = [...new Set(carCards.map(car => car.class))];
        const brands = [...new Set(carCards.map(car => car.brand))];
        const models = [...new Set(carCards.map(car => car.model))];

        console.log("Цвета: ", colors);
        console.log("Классы: ", classes);
        console.log("Марки: ", brands);
        console.log("Модели: ", models);

        addOptions(colorSelect, colors);
        addOptions(classSelect, classes);
        addOptions(brandSelect, brands);
        addOptions(modelSelect, models);
    }

    populateFilters();
});
