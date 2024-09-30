const spinner = () =>{
    const modalSpinner = document.createElement("div");
    modalSpinner.classList = "modalSpinner"
    modalSpinner.innerHTML =  `
        <div class="spinner">asd</div>
        <h2 class="tittle">Title</h2>
    `;
    document.body.appendChild(modalSpinner)
}