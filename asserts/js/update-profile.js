document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const firstName = document.querySelector('#first_name');
    const lastName = document.querySelector('#last_name');
    const birthDate = document.querySelector('#birth_date');

    // Redirect to 404 page if no token is found
    if (!token) {
        window.location.href = '/404.html';
        return;
    }

    try {
        const decoded = decodeJWT(token);
        console.log('Header:', decoded.header);
        console.log('Payload:', decoded.payload);
        const emailUpdate = decoded.payload.username.email;
        const passwordUpdate = decoded.payload.username.password;
        const firstNameUpdate = decoded.payload.username.firstName;
        const lastNameUpdate = decoded.payload.username.lastName;
        const birthUpdate = decoded.payload.username.birthDate;
        email.value = emailUpdate || '';
        password.value = passwordUpdate || '';
        firstName.value = firstNameUpdate || '';
        lastName.value = lastNameUpdate || '';
        birthDate.value = birthUpdate || '';
    } catch (error) {
        console.error('Error to decode the token:', error);
        window.location.href = '/404.html';
        return;
    }

    const btnSave = document.querySelector('#btn-save');
    if (btnSave) {
        btnSave.addEventListener('click', () => {
            if (token) {
                try {
                    const updatedUser = {
                        email: email.value,
                        password: password.value,
                        firstName: firstName.value,
                        lastName: lastName.value,
                        birthDate: birthDate.value
                    };

                    // Update the users array in localStorage
                    const users = JSON.parse(localStorage.getItem('users')) || [];
                    const userIndex = users.findIndex(user => user.email === email.value);
                    if (userIndex !== -1) {
                        users[userIndex] = updatedUser;
                        localStorage.setItem('users', JSON.stringify(users));
                        console.log('User updated successfully in localStorage.');

                        // Clear the token and redirect to index.html
                        localStorage.removeItem('token');
                        window.location.href = '/index.html';
                    } else {
                        console.log('User not found in localStorage.');
                    }
                } catch (error) {
                    console.error('Error to update the user data:', error);
                }
            } else {
                console.log('No token found in localStorage.');
            }
        });
    }

    // Prevent navigation back to the update profile page after logout
    window.addEventListener('popstate', () => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/404.html';
        }
    });

    // Replace the current history state to prevent back navigation
    history.replaceState(null, null, window.location.href);
});