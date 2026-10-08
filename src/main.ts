const anadirCelda = document.getElementById("add-cell") as HTMLButtonElement;

const contenedorFrutas = document.getElementById("contenedor-frutas") as HTMLTableElement;

const addFruits = document.getElementById("add-fruits") as HTMLButtonElement;

const CommercialProduct: string [] = [];

const frutas = document.getElementById("frutas") as HTMLSelectElement;

addFruits.addEventListener("click", () => {

    const producto = String(prompt("Ingrese el nombre de la fruta:"));


    if (producto) {
        CommercialProduct.push(producto);
        alert("Fruta añadida");

                localStorage.setItem(
            "CommercialProduct",
            JSON.stringify(CommercialProduct)
        );
    }
});


window.addEventListener("load", () => {

    const productosGuardados = localStorage.getItem("CommercialProduct");

    if (productosGuardados) {

        const CommercialProduct = JSON.parse(productosGuardados);

        CommercialProduct.forEach((producto: string) => {

            const option = document.createElement("option");

            option.value = producto;
            option.textContent = producto;

            frutas.appendChild(option);
        });
    }
});