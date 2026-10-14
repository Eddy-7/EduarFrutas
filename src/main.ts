const anadirCelda = document.getElementById("add-cell") as HTMLButtonElement;

const contenedorFrutas = document.getElementById("contenedor-frutas") as HTMLTableElement;

const addFruits = document.getElementById("add-fruits") as HTMLButtonElement;

const CommercialProduct: string [] = [];

const frutas = document.getElementById("frutas") as HTMLSelectElement;



anadirCelda.addEventListener("click", () => {

    const fila = document.createElement("tr");
    
    const celda1 = document.createElement("td");
    
    const select = document.createElement("select");
    select.setAttribute("class", "selector-fruta");
    
    const option = document.createElement("option");
    option.value = "Seleccione una fruta";
    option.textContent = ("Seleccione una fruta");
    option.setAttribute("selected", "");
    option.setAttribute("disabled", "");
    
    const celda2 = document.createElement("td");
    const input1 = document.createElement("input");
    input1.setAttribute("type", "number");
    input1.setAttribute("placeholder", "Kilogramos");

    const celda3 = document.createElement("td");
    const input2 = document.createElement("input");
    input2.setAttribute("type", "number");
    input2.setAttribute("placeholder", "Precio por kilo");

    select.appendChild(option);
    celda1.appendChild(select);    
    celda2.appendChild(input1);
    celda3.appendChild(input2);
    fila.appendChild(celda1);  
    fila.appendChild(celda2);  
    fila.appendChild(celda3);
    
    contenedorFrutas.appendChild(fila);

});

const selectors = document.querySelectorAll(".selector-fruta") 

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



const array: string [] = [];

anadirCelda.addEventListener("click", () => {

    const productosGuardados = localStorage.getItem("CommercialProduct");

    if (productosGuardados) {

        const CommercialProduct = JSON.parse(productosGuardados);

        CommercialProduct.forEach((producto: string) => {
            const option = document.createElement("option");
            
            option.value = producto;
            option.textContent = producto;

            selectors.forEach((selector) => {
            selector.appendChild(option);
            });
        });
    }
});


