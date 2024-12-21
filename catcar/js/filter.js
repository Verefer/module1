// Функция для получения параметров из URL
function getSearchParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        color: params.get('color'),
        class: params.get('class'),
        brand: params.get('brand'),
        model: params.get('model'),
    };
}

// Функция фильтрации карточек
function filterCards() {
    const searchParams = getSearchParams();

    // Получаем все карточки автомобилей
    const cards = document.querySelectorAll('.car-card');

    cards.forEach(card => {
        // Получаем атрибуты карточки для сравнения, учитывая data-атрибуты
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

// Запускаем фильтрацию при загрузке страницы
document.addEventListener('DOMContentLoaded', filterCards);
