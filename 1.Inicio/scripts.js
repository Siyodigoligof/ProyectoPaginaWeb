document.addEventListener("DOMContentLoaded", function() {
    const institutions = document.querySelector(".institutions");
    const institutionElements = Array.from(institutions.children);
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const itemsToShow = 5; // Número de elementos a mostrar
    let currentPosition = 0;
    let totalInstitutions = institutionElements.length;

    function updateInstitutionsPosition() {
        const itemWidth = institutionElements[0].offsetWidth + 20; // Ancho del elemento más margen
        const offset = -currentPosition * itemWidth;

        institutions.style.transition = "transform 0.5s ease";
        institutions.style.transform = `translateX(${offset}px)`;

        // Asegurar que los elementos visibles se ajusten correctamente
        institutionElements.forEach((element, index) => {
            if (index >= currentPosition && index < currentPosition + itemsToShow) {
                element.classList.add("visible");
                element.classList.remove("hidden");
            } else {
                element.classList.remove("visible");
                element.classList.add("hidden");
            }
        });
    }

    prevButton.addEventListener("click", function() {
        currentPosition--;
        if (currentPosition < 0) {
            currentPosition = totalInstitutions - itemsToShow;
        }
        updateInstitutionsPosition();
    });

    nextButton.addEventListener("click", function() {
        currentPosition++;
        if (currentPosition > totalInstitutions - itemsToShow) {
            currentPosition = 0;
        }
        updateInstitutionsPosition();
    });

    // Asegurar que los botones estén correctamente alineados
    const institutionWidth = institutionElements[0].offsetWidth + 20;
    const totalWidth = institutionWidth * totalInstitutions;
    institutions.style.width = `${totalWidth}px`;

    // Mostrar las primeras instituciones por defecto
    updateInstitutionsPosition();
});
