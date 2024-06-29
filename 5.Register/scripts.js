document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.input-group input');
    const formContainer = document.querySelector('.form-container');

    // Ocultar todos los mensajes de validación al cargar la página
    const validationMessages = document.querySelectorAll('.validation-message');
    validationMessages.forEach(msg => {
        msg.style.display = 'none';
    });

    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            // Al enfocar el input, ocultar el mensaje de validación si estaba mostrado
            const validationMessage = input.parentElement.querySelector('.validation-message');
            validationMessage.style.display = 'none';

            // Ajustar la altura del contenedor principal
            input.style.borderColor = '';
            formContainer.style.height = ''; // Restaurar la altura por defecto
        });

        input.addEventListener('blur', function () {
            const validationMessage = input.parentElement.querySelector('.validation-message');
            if (input.value === '') {
                validationMessage.style.display = 'flex';
                input.style.borderColor = 'red';
                
                // Ajustar la altura del contenedor principal solo hacia abajo
                formContainer.style.height = formContainer.scrollHeight + 'px';
            } else {
                validationMessage.style.display = 'none';
                formContainer.style.height = ''; // Restaurar la altura por defecto si no está vacío
                input.style.borderColor = '';
            }
        });
    });

    const registerBtn = document.getElementById('register-btn');
    registerBtn.addEventListener('click', function (event) {
        // Mostrar mensajes de validación para inputs vacíos al intentar registrar
        inputs.forEach(input => {
            const validationMessage = input.parentElement.querySelector('.validation-message');
            if (input.value === '') {
                validationMessage.style.display = 'flex';
                
                // Ajustar la altura del contenedor principal solo hacia abajo
                input.style.borderColor = 'red';
               
            }
        });

        // Evitar que el formulario se envíe si hay inputs vacíos
        const inputsEmpty = Array.from(inputs).some(input => input.value === '');
        if (inputsEmpty) {
            event.preventDefault();
            console.log('Hay campos vacíos. No se puede enviar el formulario.');
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona todos los inputs
    const inputs = document.querySelectorAll('.input-group input');

    inputs.forEach(input => {
        // Verifica si el input tiene un valor (por autofill o por manual)
        if (input.value) {
            input.classList.add('filled');
        }

        // Añade un evento para cuando se complete el autofill
        input.addEventListener('animationstart', (e) => {
            if (e.animationName === 'onAutoFillStart') {
                input.classList.add('filled');
            }
        });

        // Añade un evento para cuando el autofill se retire
        input.addEventListener('animationend', (e) => {
            if (e.animationName === 'onAutoFillCancel') {
                input.classList.remove('filled');
            }
        });

        // Añade o remueve la clase 'filled' en eventos de input
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
        });
    });
});



