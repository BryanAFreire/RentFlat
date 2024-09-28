document.addEventListener('DOMContentLoaded', () => {
    const startSession = () => {
        const user = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        if (user === mockEmail && password === mockPassword) {
            const token = generateJWT(user);
            localStorage.setItem('token', token);
            console.info(token);
            window.location.href = '/new_flat.html';
        } else {
        }
    }
    const mockEmail = 'bryan@gmail.com';
    const mockPassword = 'password123';
    const btnLogIn = document.querySelector('#btn_log_in');
    btnLogIn.addEventListener('click', startSession)
});