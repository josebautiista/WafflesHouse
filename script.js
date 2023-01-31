var total= 0
var descuento=0
var totalPagar=0

class Productos {
    constructor(nombre, precio, adiciones) {
      this.nombre = nombre;
      this.precio = precio;
      this.adiciones = adiciones;
    }
    mostrar(){
        return this.nombre + " " + this.precio
    }

    mostrarA(){
            return this.adiciones
    }
}

var sabores = ["vainilla", "chocolate", "brwonie"]
var adicionesBa = ["Galleta", "helado", "vainilla", "chocolate", "brownie"]
var bananas =[new Productos("split", 13000, adicionesBa),new Productos("bananita", 14000)] 
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

            var descripcion = document.createElement("div");
            descripcion.classList.add("descripcion");
            descripcion.id="resumenProductos"
            nuevoDiv.appendChild(descripcion);

            var nuevoItem = document.createElement("p");
            nuevoItem.id=bananas[i].nombre
            nuevoItem.innerHTML = "Banana " + bananas[i].nombre
            descripcion.appendChild(nuevoItem);
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = bananas[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)


            var helados = document.createElement("select");

            for (let i = 0; i < sabores.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = sabores[i];
                opcion.text = sabores[i];

                helados.add(opcion);        
            }

            adicionDiv.appendChild(helados);

            for (let z = 0; z < bananas[i].mostrarA().length; z++) {
                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=bananas[i].mostrarA()[z]
                adicionDiv.appendChild(add)

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = bananas[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)
            }

        })

    }
}

function capturar() {
   var metodo=document.getElementById("metodo").value
   var total = parseInt(document.getElementById("Total").textContent) 
   var descuento = parseInt(document.getElementById("descuento").textContent)
   var totalPagar= parseInt(document.getElementById("totalPagar").textContent)  
   var nombrePrecio = document.getElementById("resumenProductos").children
   var contenido=document.querySelector(".resumen-productos").children
   var nombreItem=[]
   var precioItem=[]
   for (let i = 0; i < contenido.length; i++) {
    for (let z = 0; z < nombrePrecio.length; z++) {
        nombreItem.push(nombrePrecio[0].textContent)
        precioItem.push(nombrePrecio[1].textContent)
        
    }
    console.log(nombreItem, precioItem) 
    }

    localStorage.setItem("total",total)
    localStorage.setItem("descuento",descuento)
    localStorage.setItem("totalPagar",totalPagar)
    localStorage.setItem("metodo",metodo)
    localStorage.setItem("nombre",nombreItem)
    localStorage.setItem("precio", precioItem);
    localStorage.setItem("cantidad", nombrePrecio.length)
    window.location.href = "factura.html";
   
}

