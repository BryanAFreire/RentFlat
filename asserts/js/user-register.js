let users = JSON.parse(localStorage.getItem('users')) || [];

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const birthDate = document.querySelector('#birth_date');


function User(email, password, firstName, lastName, birthDate) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
}

function register() {
    if (password.value !== confirmPassword.value) {
        alert("Passwords don't match. Verify and try again.");
        return;
    }

    const user = new User(
        email.value,
        password.value,
        firstName.value,
        lastName.value,
        birthDate.value
    );

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    displaySpinner();

    setTimeout(() => {
        containerSpinner.style.display = 'none';
        startSession();
    }, 3000);

}