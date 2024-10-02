document.addEventListener('DOMContentLoaded', () => {
    userGreeting();
    const city = document.querySelector('#city');
    city.addEventListener('keyup', () => { (city.value = '') ? createErrorMessage(city, "Please enter a city.") : deleteErrorMessage(city); })
    console.info('halo!')

});