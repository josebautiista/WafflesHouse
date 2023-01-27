var total= 0
var descuento=0
var totalPagar=0

class Productos {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
    mostrar(){
        return this.nombre + " " + this.precio
    }
}
var bananas =[new Productos("split", 13000),new Productos("bananita", 14000)] 
var bubbles = [new Productos("Sencillo",8500),new Productos("Fresas",15000),new Productos("House",13000),new Productos("Oreo",12000),new Productos("Colores",12000),new Productos("Chocodurazno",13000),new Productos("Fresaschocolatosas", 14000),new Productos("Frutal 1", 13000),new Productos("Frutal 2", 13000)]
var waffles = [new Productos("Fress", 14000),new Productos("Medio Waffle", 8000),new Productos("BOOM", 13500),new Productos("MixFrutt",13000),new Productos("Bananaqueso",10000),new Productos("House",13000),new Productos("Dulce Crema", 10000),new Productos("Frutts", 14000),new Productos("chocofrut", 10000)]


function bubble(){
    document.querySelector(".productos").innerHTML = ''
    
    for (let i = 0; i < bubbles.length; i++) {
        
        const producto = document.createElement("button");
        producto.classList.add("productosNuevo");
        producto.addEventListener("click", function () {
            document.getElementById("Total").textContent=total=total + bubbles[i].precio
            document.getElementById("descuento").textContent= descuento
            document.getElementById("totalPagar").textContent= totalPagar=total-descuento

            var nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("resumenItem");
            var nuevoItem = document.createElement("p");
            var nuevoPrecio = document.createElement("p");
            nuevoItem.innerHTML = "Bubble " + bubbles[i].nombre
            nuevoPrecio.innerHTML = bubbles[i].precio
            nuevoDiv.appendChild(nuevoItem);
            nuevoDiv.appendChild(nuevoPrecio);
            document.querySelector(".resumen-productos").appendChild(nuevoDiv);

        })
        producto.textContent = bubbles[i].mostrar()
        document.querySelector(".productos").appendChild(producto);
    }
    
}

function waffle(){
    document.querySelector(".productos").innerHTML = ''
    
    for (let i = 0; i < waffles.length; i++) {
        
        const producto = document.createElement("button");
        producto.classList.add("productosNuevo");
        producto.addEventListener("click", function () {
            document.getElementById("Total").textContent=total=total + waffles[i].precio
            document.getElementById("descuento").textContent= descuento
            document.getElementById("totalPagar").textContent= totalPagar=total-descuento

            var nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("resumenItem");
            var nuevoItem = document.createElement("p");
            var nuevoPrecio = document.createElement("p");
            nuevoItem.innerHTML = "Waffle " + waffles[i].nombre
            nuevoPrecio.innerHTML = waffles[i].precio
            nuevoDiv.appendChild(nuevoItem);
            nuevoDiv.appendChild(nuevoPrecio);
            document.querySelector(".resumen-productos").appendChild(nuevoDiv);

        })
        producto.textContent = waffles[i].mostrar()
        document.querySelector(".productos").appendChild(producto);
    }
    
}

function banana() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < bananas.length; i++) {
        const producto = document.createElement("button");
        producto.id=bananas[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = bananas[i].mostrar()
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(bananas[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + bananas[i].precio
            document.getElementById("descuento").textContent= descuento
            document.getElementById("totalPagar").textContent= totalPagar=total-descuento

            var nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("resumenItem");
            document.querySelector(".resumen-productos").appendChild(nuevoDiv);

            var nuevoItem = document.createElement("p");
            nuevoItem.id=bananas[i].nombre
            nuevoItem.innerHTML = "Banana " + bananas[i].nombre
            nuevoDiv.appendChild(nuevoItem);
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = bananas[i].precio
            nuevoDiv.appendChild(nuevoPrecio);
            
        })

    }
}

function capturar() {
   var metodo=document.getElementById("metodo").value
   var total = parseInt(document.getElementById("Total").textContent) 
   var descuento = parseInt(document.getElementById("descuento").textContent)
   var totalPagar= parseInt(document.getElementById("totalPagar").textContent)  
   var contenidoDiv = document.getElementById("resumenProductos").children
   var nombreItem=[]
   var precioItem=[]
   for (let i = 0; i < contenidoDiv.length; i++) {
    nombreItem.push(contenidoDiv[i].children[0].textContent)
    precioItem.push(contenidoDiv[i].children[1].textContent)
    console.log(nombreItem, precioItem) 
    }

    localStorage.setItem("total",total)
    localStorage.setItem("descuento",descuento)
    localStorage.setItem("totalPagar",totalPagar)
    localStorage.setItem("metodo",metodo)
    localStorage.setItem("nombre",nombreItem)
    localStorage.setItem("precio", precioItem);
    localStorage.setItem("cantidad", contenidoDiv.length)
    window.location.href = "factura.html";
   
}

