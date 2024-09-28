document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("btn_log_in");
    const registerButton = document.getElementById("btn_sign_up");

    const validateForm = () => {
        const emailValido = emailInput.validity.valid;
        const passwordValido = passwordInput.value.trim() !== "";

        if (!emailValido) {
            createErrorMessage(emailInput, "Please enter a valid email.");
        } else {
            deleteErrorMessage(emailInput);
        }

        if (!passwordValido) {
            createErrorMessage(passwordInput, "Please enter a password.");
        } else {
            deleteErrorMessage(passwordInput);
        }

        loginButton.disabled = !(emailValido && passwordValido);
    }

    const openRegister = () =>{
        window.location.href = "/register.html"
    }

    emailInput.addEventListener("keyup", validateForm);
    passwordInput.addEventListener("keyup", validateForm);

    emailInput.addEventListener("blur", validateForm);
    passwordInput.addEventListener("blur", validateForm);

    registerButton.addEventListener("click", openRegister);
});
