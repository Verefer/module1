document.addEventListener('DOMContentLoaded', function () {
    const carCards = document.querySelectorAll('.card');
    const selectedCarsElement = document.querySelector('#selected-cars');
    const dailyCostElement = document.querySelector('#daily-cost');
    const totalCostElement = document.querySelector('#total-cost');
    const confirmBookingButton = document.querySelector('#confirm-booking');
    
    let selectedCars = [];
    let dailyCost = 0;
    let totalCost = 0;

    // Обработчик выбора автомобиля
    carCards.forEach(card => {
        const selectButton = card.querySelector('.select-car');
        
        selectButton.addEventListener('click', function() {
            const carClass = card.getAttribute('data-class');
            const carBrand = card.getAttribute('data-brand');
            const carModel = card.getAttribute('data-model');
            const carPrice = parseInt(card.getAttribute('data-price'));
            
            // Добавление автомобиля в список выбранных
            if (!selectedCars.includes(carModel)) {
                selectedCars.push(carModel);
                dailyCost += carPrice; // Добавляем стоимость этого автомобиля в общий расчет
                totalCost = dailyCost; // Пока без скидок, просто стоимость по всем выбранным

                // Обновляем отображение данных
                selectedCarsElement.textContent = selectedCars.join(', ');
                dailyCostElement.textContent = `${dailyCost} руб.`;
                totalCostElement.textContent = `${totalCost} руб.`;
            }
        });
    });

    // Обработчик оформления бронирования
    confirmBookingButton.addEventListener('click', function() {
        if (selectedCars.length === 0) {
            alert('Выберите хотя бы один автомобиль для бронирования!');
        } else {
            alert('Бронирование успешно оформлено!');
            // Здесь можно добавить логику для отправки данных на сервер
        }
    });
});
