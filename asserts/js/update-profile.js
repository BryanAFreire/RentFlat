document.addEventListener('DOMContentLoaded', () => {
    userGreeting();

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

    // Redirect to 404 page if no token is found
    if (!token) {
        window.location.href = '/404.html';
        return;
    }

    const decodeJWT = (token) => {
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('Invalid JWT');
        }
        const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
        return payload;
    };

    const checkTokenExpiration = () => {
        const decoded = decodeJWT(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime >= decoded.exp) {
            localStorage.removeItem('token');
            
            setTimeout(() => {
                alert('Your session has expired. Please log in again.');
                window.location.href = '/index.html';
            }, 0);
        }
    };

    // Check token expiration every second
    setInterval(checkTokenExpiration, 1000);

    try {
        const decoded = decodeJWT(token);
        console.log('Header:', decoded.header);
        console.log('Payload:', decoded.payload);
        const emailUpdate = decoded.username.email;
        const passwordUpdate = decoded.username.password;
        const firstNameUpdate = decoded.username.firstName;
        const lastNameUpdate = decoded.username.lastName;
        const birthUpdate = decoded.username.birthDate;
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
});