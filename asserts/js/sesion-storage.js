document.addEventListener('DOMContentLoaded', () => {
    const startSession = () => {
        const user = document.querySelector('#email');
        const password = document.querySelector('#password');
        if (user.value === mockEmail && password.value === mockPassword) {
            const token = generateJWT(user);
            localStorage.setItem('token', token);
            window.location.href = '/new_flat.html';
        } else {
            createErrorMessage(password, "Credentials are wrong. Please verify and try again.");
        }
    }
    const mockEmail = 'bryan@gmail.com';
    const mockPassword = 'password123';
    const btnLogIn = document.querySelector('#btn_log_in');
    btnLogIn.addEventListener('click', startSession)
});