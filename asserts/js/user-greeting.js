
const fullName = document.querySelector('#user');
const userGreeting = () => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const decoded = decodeJWT(token);
      const firstName = decoded.payload.username.firstName;
      const lastName = decoded.payload.username.lastName;
      fullName.textContent = `${firstName}  ${lastName}`;
    } catch (error) {
      console.error('Error to decode the token:', error);
    }
  } else {
    console.log('No token found in localStorage.');
  }

}