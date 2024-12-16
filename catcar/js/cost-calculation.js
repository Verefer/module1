document.addEventListener('DOMContentLoaded', function () {
    const selectedCars = [];
    const carCards = document.querySelectorAll('.car-cards .card');
    const totalCostEl = document.getElementById('total-cost');
    const discountEl = document.getElementById('discount');
    const dailyCostEl = document.getElementById('daily-cost');
    const selectedCarsEl = document.getElementById('selected-cars');
    
    carCards.forEach(card => {
        const selectButton = card.querySelector('button');
        selectButton.addEventListener('click', function () {
            const carName = card.querySelector('h3').textContent;
            const carPrice = parseInt(card.querySelector('p').textContent.match(/\d+/)[0]);
            
            // Добавляем автомобиль в список
            selectedCars.push({ name: carName, price: carPrice });
            updateCost();
        });
    });

    function updateCost() {
        const totalDailyCost = selectedCars.reduce((sum, car) => sum + car.price, 0);
        const discount = calculateDiscount(selectedCars.length);
        const finalCost = totalDailyCost * (1 - discount / 100);

        // Обновляем интерфейс
        selectedCarsEl.textContent = selectedCars.length;
        dailyCostEl.textContent = `${totalDailyCost} руб.`;
        discountEl.textContent = `${discount}%`;
        totalCostEl.textContent = `${Math.round(finalCost)} руб.`;
    }

    function calculateDiscount(carCount) {
        // 5% скидка за каждые 3 часа бронирования, максимум 25%
        const hours = carCount * 3; // Предположим 1 автомобиль = 3 часа
        return Math.min(Math.floor(hours / 3) * 5, 25);
    }
});