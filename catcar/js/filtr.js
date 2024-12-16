document.addEventListener('DOMContentLoaded', function () {
    // --- Элементы фильтрации ---
    const filterForm = document.querySelector('.filter-form');
    const carCards = document.querySelectorAll('.car-cards .card');
    const carClassSelect = document.querySelector('#car-class');
    const carModelSelect = document.querySelector('#car-model');

    // --- Форма клиента ---
    const form = document.querySelector('.client-data form');
    const submitButton = form.querySelector('button[type="submit"]');
    const requiredFields = form.querySelectorAll('input, select');

    // --- Функция обновления списка моделей ---
    carClassSelect.addEventListener('change', function () {
        const selectedClass = carClassSelect.value;

        // Очищаем список моделей перед добавлением новых
        carModelSelect.innerHTML = '<option value="">Выберите модель</option>';

        // Проходим по всем карточкам и добавляем модели в список
        carCards.forEach(function (card) {
            const cardClass = card.getAttribute('data-class');
            const cardModel = card.querySelector('h3').textContent;

            if (!selectedClass || cardClass === selectedClass) {
                const option = document.createElement('option');
                option.value = cardModel;
                option.textContent = cardModel;
                carModelSelect.appendChild(option);
            }
        });
    });

    // --- Функция фильтрации карточек ---
    filterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedClass = document.querySelector('#filter-class').value;
        const selectedBrand = document.querySelector('#filter-brand').value;

        carCards.forEach(function (card) {
            const cardClass = card.getAttribute('data-class');
            const cardBrand = card.getAttribute('data-brand');

            const isClassMatch = selectedClass ? cardClass === selectedClass : true;
            const isBrandMatch = selectedBrand ? cardBrand === selectedBrand : true;

            card.style.display = isClassMatch && isBrandMatch ? 'block' : 'none';
        });
    });

    // --- Функция проверки заполненности формы ---
    function checkFormCompletion() {
        let isFormComplete = true;

        requiredFields.forEach((field) => {
            if (field.value.trim() === '') {
                isFormComplete = false;
            }
        });

        submitButton.disabled = !isFormComplete; // Блокируем кнопку, если не все поля заполнены
    }

    // Проверяем форму при загрузке страницы
    checkFormCompletion();

    // Добавляем обработчики для проверки формы
    requiredFields.forEach((field) => {
        field.addEventListener('input', checkFormCompletion);
        field.addEventListener('change', checkFormCompletion);
    });

    // --- Предупреждение при попытке отправить форму ---
    form.addEventListener('submit', function (event) {
        let isFormComplete = true;

        requiredFields.forEach((field) => {
            if (field.value.trim() === '') {
                isFormComplete = false;
            }
        });

        if (!isFormComplete) {
            event.preventDefault(); // Останавливаем отправку формы
            alert('Пожалуйста, заполните все поля перед оформлением бронирования.');
        }
    });
});
