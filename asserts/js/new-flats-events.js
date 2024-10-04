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
    
    const city = document.querySelector('#city');
    city.addEventListener('keyup', () => { (city.value = '') ? createErrorMessage(city, "Please enter a city.") : deleteErrorMessage(city); })
    console.info('halo!')

});