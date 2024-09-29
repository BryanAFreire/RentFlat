document.addEventListener('DOMContentLoaded', () => {
    // Recuperar datos del localStorage, si existen
    const btnRegister = document.querySelector('#btn_register');

    // Agregar evento al botón de registro
    btnRegister.addEventListener('click', register);
});
