const addFlat = () => {
    const formData = {
        city: document.querySelector('#city').value,
        street_name: document.querySelector('#street_name').value,
        street_number: document.querySelector('#street_number').value,
        area_size: document.querySelector('#area_size').value,
        has_ac: document.querySelector('#has_ac').checked,
        yearBuilt: document.querySelector('#year_built').value,
        rent_price: document.querySelector('#rent_price').value,
        date_available: document.querySelector('#date_available').value,
        favorite: true
    };
    localStorage.setItem('new-flat', JSON.stringify(formData));
};