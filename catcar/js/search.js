document.addEventListener("DOMContentLoaded", () => {
    // Данные карточек автомобилей
    const carCards = [
        { brand: "Hyundai", model: "Solaris", color: "metalik", class: "economy" },
        { brand: "Volkswagen", model: "Polo", color: "cofe", class: "economy" },
        { brand: "Toyota", model: "Camry", color: "black", class: "business" },
        { brand: "Kia", model: "Rio", color: "red", class: "economy" },
        { brand: "Skoda", model: "Octavia", color: "metalik", class: "premium" },
        { brand: "Nissan", model: "Qashqai", color: "red", class: "business" },
        { brand: "Renault", model: "Logan", color: "blue", class: "economy" },
        { brand: "Ford", model: "Focus", color: "black", class: "premium" },
        { brand: "Mazda", model: "CX-5", color: "blue", class: "business" },
        { brand: "Hyundai", model: "Creta", color: "metalik", class: "premium" },
        { brand: "Chevrolet", model: "Aveo", color: "gray", class: "economy" },
        { brand: "Volkswagen", model: "Tiguan", color: "blue", class: "business" },
    ];

    // Функция для добавления уникальных значений в выпадающие списки
    function populateSelect(selectId, key, data) {
        const select = document.getElementById(selectId);
        const uniqueValues = [...new Set(data.map(item => item[key]))];

        uniqueValues.forEach(value => {
            const option = document.createElement("option");
            option.value = value.toLowerCase();
            option.textContent = value;
            select.appendChild(option);
        });
    }

    // Заполнение выпадающих списков для автомобилей
    populateSelect("color", "color", carCards);
    populateSelect("class", "class", carCards);
    populateSelect("brand", "brand", carCards);
    populateSelect("model", "model", carCards);
});
