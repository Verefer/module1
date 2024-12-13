    document.addEventListener('DOMContentLoaded', function() {
        const filterForm = document.querySelector('.filter-form');
        const carCards = document.querySelectorAll('.car-cards .card');
        
        filterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // предотвращаем перезагрузку страницы

            const selectedClass = document.querySelector('#filter-class').value;
            const selectedBrand = document.querySelector('#filter-brand').value;

            carCards.forEach(function(card) {
                const cardClass = card.getAttribute('data-class');
                const cardBrand = card.getAttribute('data-brand');

                // Проверяем, соответствует ли карточка выбранному классу и марке
                const isClassMatch = selectedClass ? cardClass === selectedClass : true;
                const isBrandMatch = selectedBrand ? cardBrand === selectedBrand : true;

                // Показываем или скрываем карточку в зависимости от условий
                if (isClassMatch && isBrandMatch) {
                    card.style.display = 'block'; // показываем карточку
                } else {
                    card.style.display = 'none'; // скрываем карточку
                }
            });
        });
    });
