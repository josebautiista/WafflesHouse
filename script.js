var total= 0
var descuento=0
var totalPagar=0

function bubble(){
    
    document.querySelector(".productos").innerHTML = ''
    let bubble=["Sencillo", "Fresas", "House", "Oreo", "Colores", "Chocodurazno", "Fresaschocolatosas", "Frutal 1", "Frutal 2"]
    let precio = [8500, 15000, 13000, 12000, 12000, 13000, 14000, 13000, 13000]
    
    for (let i = 0; i < bubble.length; i++) {
        
        const producto = document.createElement("button");
        producto.classList.add("productosNuevo");
        producto.id=precio[i]
        producto.addEventListener("click", function () {
            document.getElementById("Total").textContent=total=total + parseInt(producto.id)
            document.getElementById("descuento").textContent= descuento
            document.getElementById("totalPagar").textContent= totalPagar=total-descuento

            var nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("resumenItem");
            var nuevoItem = document.createElement("p");
            var nuevoPrecio = document.createElement("p");
            nuevoItem.innerHTML = "Bubble " + bubble[i]
            nuevoPrecio.innerHTML = "$ " + precio[i]
            nuevoDiv.appendChild(nuevoItem);
            nuevoDiv.appendChild(nuevoPrecio);
            document.querySelector(".resumen-productos").appendChild(nuevoDiv);

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
            document.getElementById("Total").textContent=total=total + parseInt(producto.id)
            document.getElementById("descuento").textContent= descuento
            document.getElementById("totalPagar").textContent= totalPagar=total-descuento

            var nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("resumenItem");
            var nuevoItem = document.createElement("p");
            var nuevoPrecio = document.createElement("p");
            nuevoItem.innerHTML = "Waffle " + waffles[i]
            nuevoPrecio.innerHTML = "$ " + precio[i]
            nuevoDiv.appendChild(nuevoItem);
            nuevoDiv.appendChild(nuevoPrecio);
            document.querySelector(".resumen-productos").appendChild(nuevoDiv);

        })
        producto.textContent = waffles[i] + " " + precio[i];
        document.querySelector(".productos").appendChild(producto);
    }
}

function bananas() {
    
    document.querySelector(".productos").innerHTML = ''
    let bananas=["split", "bananita"]
    let precio = [13000, 14000]

    for (let i = 0; i < bananas.length; i++) {
        const producto = document.createElement("button");
        producto.classList.add("productosNuevo");
        producto.id=precio[i]
        producto.addEventListener("click", function () {
            document.getElementById("Total").textContent=total=total + parseInt(producto.id)
            document.getElementById("descuento").textContent= descuento
            document.getElementById("totalPagar").textContent= totalPagar=total-descuento

            var nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("resumenItem");
            var nuevoItem = document.createElement("p");
            var nuevoPrecio = document.createElement("p");
            nuevoItem.innerHTML = "Banana " + bananas[i]
            nuevoPrecio.innerHTML = "$ " + precio[i]
            nuevoDiv.appendChild(nuevoItem);
            nuevoDiv.appendChild(nuevoPrecio);
            document.querySelector(".resumen-productos").appendChild(nuevoDiv);

        })
        producto.textContent = bananas[i] + " " + precio[i];
        document.querySelector(".productos").appendChild(producto);
    }
}



//almacenar datos y pasar a factura//

function storeData() {
    var producto=document.getElementById("resumenProductos").children
    var nombres=[]
    for (let i = 0; i < producto.length; i++) {
        nombres.push(producto[i].firstChild.textContent)
    }
    localStorage.setItem("nombres",nombres)
    localStorage.setItem("cantidad", producto.length);
    window.location.href = "factura.html";
}