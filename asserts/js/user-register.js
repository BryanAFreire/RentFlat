let users = JSON.parse(localStorage.getItem('users')) || [];

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const birthDate = document.querySelector('#birth_date');


// Constructor de usuario
function User(email, password, firstName, lastName, birthDate) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
}

// Función de registro
function register(){
    // Validar contraseñas
    if (password.value !== confirmPassword.value) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear un nuevo usuario
    const user = new User(
        email.value,
        password.value,
        firstName.value,
        lastName.value,
        birthDate.value
    );

    // Agregar el usuario al array
    users.push(user);

    // Almacenar en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Mostrar en la consola (opcional)
    console.info(users);

    alert('Usuario registrado correctamente');
}