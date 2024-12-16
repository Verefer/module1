// Получаем элементы страницы
const addCardButton = document.getElementById('add-card-button');  // Кнопка "Добавить банковскую карту"
const modal = document.getElementById('add-card-modal');  // Модальное окно
const closeModalButton = document.getElementById('close-modal');  // Кнопка закрытия модального окна
const addCardForm = document.getElementById('add-card-form');  // Форма добавления карты
const cardList = document.querySelector('.card-list');  // Контейнер для карт

// Функция для открытия модального окна
function openModal() {
    modal.style.display = 'flex';  // Показываем модальное окно
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';  // Скрываем модальное окно
}

// Открытие модального окна при клике на кнопку "Добавить банковскую карту"
addCardButton.addEventListener('click', openModal);

// Закрытие модального окна при клике на кнопку закрытия
closeModalButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне окна (на область с фоном)
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Функция для создания новой карты
function createCard(number, holder, expiryDate, cvv, type) {
    // Создаем контейнер для карты
    const card = document.createElement('div');
    card.classList.add('card-money');
    card.setAttribute('data-card-type', type);

    // Определяем тип карты по первым цифрам номера
    let cardType = '';
    if (number.startsWith('4')) {
        cardType = 'Visa';
    } else if (number.startsWith('5')) {
        cardType = 'MasterCard';
    } else if (number.startsWith('3')) {
        cardType = 'Мир';
    }

    // Добавляем информацию о карте в HTML
    card.innerHTML = `
        <p>Номер карты: **** **** **** ${number.slice(-4)}</p>
        <p>Тип карты: ${cardType}</p>
        <p>Статус: ${new Date(expiryDate) > new Date() ? 'Активна' : 'Закончился срок обслуживания'}</p>
        <button class="remove-card">Удалить карту</button>
    `;

    // Добавляем карту в список карт
    cardList.appendChild(card);

    // Обработчик кнопки удаления карты
    card.querySelector('.remove-card').addEventListener('click', function () {
        card.remove();  // Удаляем карту из DOM
    });
}

// Обработка отправки формы
addCardForm.addEventListener('submit', function (event) {
    event.preventDefault();  // Предотвращаем перезагрузку страницы

    const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');  // Номер карты без пробелов
    const cardHolder = document.getElementById('card-holder').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Проверка на корректность введенного номера карты
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert('Номер карты должен содержать 16 цифр.');
        return;
    }

    // Создаем и добавляем карту
    createCard(cardNumber, cardHolder, expiryDate, cvv, cardNumber.slice(0, 1));

    // Закрываем модальное окно после добавления карты
    closeModal();

    // Очищаем форму
    addCardForm.reset();
});

// Добавляем возможность удаления карт, которые уже есть на странице
const initialRemoveButtons = document.querySelectorAll('.remove-card');
initialRemoveButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.closest('.card-money').remove();  // Удаляем родительский элемент (карту)
    });
});
