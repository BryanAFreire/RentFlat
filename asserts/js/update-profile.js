document.addEventListener('DOMContentLoaded', () => {

    const listProfile = (event) => {
        if (contentProfile.style.display === 'inline-block') {
            contentProfile.style.display = 'none';
        } else {
            contentProfile.style.display = 'inline-block';
        }

    }
    const profileIco = document.querySelector('.content-profile');
    const contentProfile = document.querySelector('.menu-profile');
    if (profileIco) {
        profileIco.addEventListener('click', listProfile)
    }

    const token = localStorage.getItem('token');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const firstName = document.querySelector('#first_name');
    const lastName = document.querySelector('#last_name');
    const birthDate = document.querySelector('#birth_date');

    if (token) {
        try {
            const decoded = decodeJWT(token);
            console.log('Header:', decoded.header);
            console.log('Payload:', decoded.payload);
            const emailUpdate = decoded.payload.username.email;
            const passwordUpdate = decoded.payload.username.password;
            const firstNameUpdate = decoded.payload.username.firstName;
            const lastNameUpdate = decoded.payload.username.lastName;
            const birthUpdate = decoded.payload.username.birthDate;
            email.value = `${emailUpdate}`;
            password.value = `${passwordUpdate}`;
            firstName.value = `${firstNameUpdate}`;
            lastName.value = `${lastNameUpdate}`;
            birthDate.value = `${birthUpdate}`;
        } catch (error) {
            console.error('Error to decode the token:', error);
        }
    } else {
        console.log('No token found in localStorage.');
    }
});