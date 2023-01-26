var total= 0

function bubble(){
    
    document.querySelector(".productos").innerHTML = ''
    let bubble=["Sencillo", "Fresas", "House", "Oreo", "Colores", "Chocodurazno", "Fresaschocolatosas", "Frutal 1", "Frutal 2"]
    let precio = [8500, 15000, 13000, 12000, 12000, 13000, 14000, 13000, 13000]
    
    for (let i = 0; i < bubble.length; i++) {
        
        const producto = document.createElement("button");
        producto.classList.add("productosNuevo");
        producto.id=precio[i]
        producto.addEventListener("click", function () {
            document.getElementById("cuentaTotal").textContent=total=total + parseInt(producto.id)

            const divResumen = document.createElement("div");
            document.querySelector(".resumen-productos").appendChild(divResumen);

            const mostrarItem = document.createElement("p");
            mostrarItem.textContent=bubble[i]
            document.querySelector(".resumen-productos").appendChild(mostrarItem);

            const mostrarPrecio = document.createElement("p");
            mostrarPrecio.textContent=precio[i]
            document.querySelector(".resumen-productos").appendChild(mostrarPrecio);

            
        })
        producto.textContent = bubble[i] + " " + precio[i];
        document.querySelector(".productos").appendChild(producto);
    }
    
}

function waffles(){

    document.querySelector(".productos").innerHTML = ''
    let waffles=["Fress", "Medio Waffle", "BOOM", "MixFrutt", "Bananaqueso", "House", "Dulce Crema", "Frutts", "Chocofrut"]
    let precio =[14000, 8000, 13500, 13000, 10000, 13000, 10000, 14000, 10000]

    for (let i = 0; i < waffles.length; i++) {
        const producto = document.createElement("button");
        producto.classList.add("productosNuevo");
        producto.id=precio[i]
        producto.addEventListener("click", function () {
            document.getElementById("cuentaTotal").textContent=total=total + parseInt(producto.id)
        })
        producto.textContent = waffles[i] + " " + precio[i];
        document.querySelector(".productos").appendChild(producto);
    }
}

function bananas() {
    
    document.querySelector(".productos").innerHTML = ''
    let bananas=["Banana split", "bananita"]
    let precio = [13000, 14000]

    for (let i = 0; i < bananas.length; i++) {
        const producto = document.createElement("button");
        producto.classList.add("productosNuevo");
        producto.id=precio[i]
        producto.addEventListener("click", function () {
            document.getElementById("cuentaTotal").textContent=total=total + parseInt(producto.id)
        })
        producto.textContent = bananas[i] + " " + precio[i];
        document.querySelector(".productos").appendChild(producto);
    }
}

