const addFlat = (e) => {
    e.preventDefault();
    const form = e.target;

    const dataUser = document.querySelector('#user').textContent;
    console.info('dataUser:', dataUser);
    const flat = {
        city: form.elements['city'].value,
        street_name: form.elements['street_name'].value,
        street_number: form.elements['street_number'].value,
        area_size: form.elements['area_size'].value,
        has_ac: form.elements['has_ac'].value,
        yearBuilt: form.elements['year_built'].value,
        rent_price: form.elements['rent_price'].value,
        date_available: form.elements['date_available'].value,
        favorite: true,
        user: dataUser
    };

    let flats = JSON.parse(localStorage.getItem('flats')) || [];
    flats.push(flat);
    localStorage.setItem('flats', JSON.stringify(flats));
    form.reset();
    
    // Redirigir a home.html
    window.location.href = 'home.html';
};