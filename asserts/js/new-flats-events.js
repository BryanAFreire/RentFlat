document.addEventListener('DOMContentLoaded', () => {
    userGreeting();

    const cityInput = document.querySelector('#city');

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
    city.addEventListener('keyup', loadCities);

    const yearBuilt = document.querySelector('#year_built');
    yearBuilt.addEventListener('keyup', loadYears);

    const saveButton = document.querySelector('#save-flat');
    saveButton.addEventListener('click', addFlat); 
});
