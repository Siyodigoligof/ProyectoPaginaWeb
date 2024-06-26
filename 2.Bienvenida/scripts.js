document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('main').classList.add('loaded');

    // Selecciona todos los botones con la clase btn-comprar
    const buyButtons = document.querySelectorAll('.btn-comprar');

    // Agrega event listeners para el efecto de hundimiento
    buyButtons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.classList.add('pressed');
        });

        button.addEventListener('mouseup', () => {
            button.classList.remove('pressed');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('pressed');
        });
    });
});


function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const filterButton = document.getElementById("filterButton");

    if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
        filterButton.classList.remove("active");
    } else {
        dropdownMenu.classList.add("show");
        filterButton.classList.add("active");
    }
}

// Cierra el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.closest('.filter-button-categories') && !event.target.closest('.dropdown-menu')) {
        const dropdownMenu = document.getElementById("dropdownMenu");
        const filterButton = document.getElementById("filterButton");
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            filterButton.classList.remove("active");
        }
    }
}

