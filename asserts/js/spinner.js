const containerSpinner = document.querySelector(".spinner");

const displaySpinner = () => {
    const prueba = containerSpinner.style.display = 'flex';
    
    setTimeout(() => {
        containerSpinner.style.display = 'none';
        startSession();
    }, 3000);
}

