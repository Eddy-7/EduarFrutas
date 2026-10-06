const anadirCelda = document.getElementById("add-cell") as HTMLButtonElement;

const contenedorFrutas = document.getElementById("contenedor-frutas") as HTMLTableElement;




anadirCelda.addEventListener("click", () => {
    contenedorFrutas.innerHTML += `    
    <tr>
        <td>
            <select>
                <option value="guayaba manzana">Guayaba manzana</option>
                <option value="platano">Plátano</option>
                <button value="añadir" id="AñadirFruta">Añadir</button>
            </select>
        </td>
        <td><input type="number" placeholder="Kilogramos">kg</td>
        <td><input type="number" placeholder="Precio por kilo" step="0.01">/kg</td>
    </tr>`;
})
