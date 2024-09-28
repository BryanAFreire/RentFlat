document.addEventListener('DOMContentLoaded', () => {

    const validateCity = () => {

    }


    const city = document.querySelector('#city');
    city.addEventListener('click', validateCity = () => {
        (city.value = '') ? createErrorMessage(city, "Please enter a city.") : deleteErrorMessage(city); 
    })
});