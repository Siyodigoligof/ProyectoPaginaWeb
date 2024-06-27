document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica de inicio de sesión.
    alert('Login form submitted!');
});


document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.input-group input');

    inputs.forEach(input => {
        if (input.value !== "") {
            input.classList.add('filled');
        }

        input.addEventListener('input', function() {
            if (input.value !== "") {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
        });
    });
});