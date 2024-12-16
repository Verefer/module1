const branches = [
    { id: 1, name: 'Филиал 1', coords: [55.7558, 37.6176], vehicles: ['Hyundai Solaris', 'Volkswagen Polo', 'Toyota Camry'] },
    { id: 2, name: 'Филиал 2', coords: [55.7512, 37.6184], vehicles: ['Kia Rio', 'Skoda Octavia', 'Nissan Qashqai'] },
    { id: 3, name: 'Филиал 3', coords: [55.7601, 37.6203], vehicles: ['Renault Logan', 'Ford Focus', 'Mazda CX-5'] },
];

    function initializeMap() {
        console.log("Map initialized"); // Уведомление о запуске
    }
    
    function displayVehicles(vehicles) {
        const vehicleList = document.getElementById('vehicle-items');
        vehicleList.innerHTML = '';
        vehicles.forEach(vehicle => {
            const item = document.createElement('li');
            item.textContent = vehicle;
            vehicleList.appendChild(item);
        });
    }
    
    document.addEventListener('DOMContentLoaded', initializeMap);