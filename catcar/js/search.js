document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript загружен!"); // Проверка запуска скрипта

    // Получаем элементы фильтров
    const colorSelect = document.getElementById('color');
    const classSelect = document.getElementById('class');
    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');

    console.log("Элементы формы поиска: ", colorSelect, classSelect, brandSelect, modelSelect);

    // Массив автомобилей для фильтрации
    const carCards = [
        { brand: 'Hyundai', model: 'Solaris', color: 'Металлик', class: 'Эконом' },
        { brand: 'Volkswagen', model: 'Polo', color: 'Кофейный', class: 'Эконом' },
        { brand: 'Toyota', model: 'Camry', color: 'Чёрный', class: 'Бизнес' },
        { brand: 'Kia', model: 'Rio', color: 'Красный', class: 'Эконом' },
        { brand: 'Skoda', model: 'Octavia', color: 'Металлик', class: 'Премиум' }
    ];

    console.log("Данные для фильтров: ", carCards);

    // Функция для добавления опций в селект
    function addOptions(selectElement, values) {
        selectElement.innerHTML = '<option value="">Выберите</option>';
        values.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            selectElement.appendChild(option);
        });
    }

    // Заполнение фильтров
    function populateFilters() {
        const colors = [...new Set(carCards.map(car => car.color))];
        const classes = [...new Set(carCards.map(car => car.class))];
        const brands = [...new Set(carCards.map(car => car.brand))];
        const models = [...new Set(carCards.map(car => car.model))];

        console.log("Цвета: ", colors);
        console.log("Классы: ", classes);
        console.log("Марки: ", brands);
        console.log("Модели: ", models);

        // Заполняем фильтры
        addOptions(colorSelect, colors);
        addOptions(classSelect, classes);
        addOptions(brandSelect, brands);
        addOptions(modelSelect, models);
    }

    // Функция для получения параметров из URL
    function getSearchParams() {
        const params = new URLSearchParams(window.location.search);
        console.log("Параметры поиска:", params.toString());
        return {
            color: params.get('color'),
            class: params.get('class'),
            brand: params.get('brand'),
            model: params.get('model'),
        };
    }

    // Функция для фильтрации карточек автомобилей
    function filterCards() {
        const searchParams = getSearchParams();

        // Получаем все карточки автомобилей
        const cards = document.querySelectorAll('.car-card');

        cards.forEach(card => {
            // Получаем атрибуты карточки для сравнения
            const cardColor = card.getAttribute('data-color');
            const cardClass = card.getAttribute('data-class');
            const cardBrand = card.getAttribute('data-brand');
            const cardModel = card.getAttribute('data-model');

            // Проверяем соответствие параметров поиска
            const matchesColor = !searchParams.color || cardColor === searchParams.color;
            const matchesClass = !searchParams.class || cardClass === searchParams.class;
            const matchesBrand = !searchParams.brand || cardBrand === searchParams.brand;
            const matchesModel = !searchParams.model || cardModel === searchParams.model;

            // Скрываем или показываем карточку в зависимости от фильтра
            if (matchesColor && matchesClass && matchesBrand && matchesModel) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Заполнение фильтров
    populateFilters();

    // Запуск фильтрации при изменении параметров в фильтре
    [colorSelect, classSelect, brandSelect, modelSelect].forEach(select => {
        select.addEventListener('change', () => {
            const params = new URLSearchParams();
            if (colorSelect.value) params.set('color', colorSelect.value);
            if (classSelect.value) params.set('class', classSelect.value);
            if (brandSelect.value) params.set('brand', brandSelect.value);
            if (modelSelect.value) params.set('model', modelSelect.value);

            // Обновляем URL с параметрами
            window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);

            // Перезапускаем фильтрацию
            filterCards();
        });
    });

    // Запускаем фильтрацию при загрузке страницы
    filterCards();
});
