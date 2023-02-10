var total= 0
var descuento=0
var totalPagar=0
var menos=0

class Productos {
    constructor(nombre, precio, adiciones, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.adiciones = adiciones;
      this.imagen = imagen;
    }
    mostrar(){
        return this.nombre + " " + this.precio
    }

    mostrarA(){
            return this.adiciones
    }
}

var saboresHelado = ["vainilla", "chocolate", "brownie"]

var adicionesBanana = ["Galleta", "helado", "vainilla", "chocolate", "brownie"]
var bananas =[new Productos("Split", 13000, adicionesBanana),new Productos("Bananita", 14000,adicionesBanana)] 

var adicionesBubble = ["Galleta", "helado", "vainilla", "chocolate", "brownie"]
var bubbles = [new Productos("Sencillo",8500,adicionesBubble),new Productos("Fresas",15000,adicionesBubble),new Productos("House",13000, adicionesBubble, "imagenes/BubbleHouse.png"),new Productos("Oreo",12000, adicionesBubble),new Productos("Colores",12000, adicionesBubble ,"imagenes/BubbleColores.png"),new Productos("Chocodurazno",13000, adicionesBubble, "imagenes/BubbleChocoDurazno.png"),new Productos("Fresaschocolatosas", 14000, adicionesBubble),new Productos("Frutal 1", 13000, adicionesBubble, "imagenes/BubbleFresas_1.png"),new Productos("Frutal 2", 13000, adicionesBubble, "imagenes/BubbleFresas_2.png")]

var adicionesWaffle = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var waffles = [new Productos("Fress", 14000, adicionesWaffle[0]),new Productos("Medio Waffle", 8000, adicionesWaffle),new Productos("BOOM", 13500, adicionesWaffle),new Productos("MixFrutt",13000, adicionesWaffle, "imagenes/WaffleMixFruts.png"),new Productos("Bananaqueso",10000, adicionesWaffle),new Productos("House",13000, adicionesWaffle),new Productos("Dulce Crema", 10000, adicionesWaffle),new Productos("Frutts", 14000, adicionesWaffle),new Productos("chocofrut", 10000, adicionesWaffle)]

var adicionesEnsalada = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var ensaladas = [new Productos("Personal", 10000, adicionesEnsalada[0]),new Productos("Grande", 15000, adicionesEnsalada),new Productos("House", 17000, adicionesEnsalada, "imagenes/EnsaladaHouse.png"),new Productos("Parfait",7500, adicionesEnsalada),new Productos("Boul Tropical",9000, adicionesEnsalada)]

var adicionesSalpicon = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var salpicones = [new Productos("Con Helado Pequeño", 5500, adicionesSalpicon[0]),new Productos("Con Helado Mediano", 7000, adicionesSalpicon),new Productos("Con Helado Grande", 9000, adicionesSalpicon),new Productos("Con Helado Y Queso Pequeño", 6500, adicionesSalpicon),new Productos("Con Helado Y Queso Mediano", 8500, adicionesSalpicon),new Productos("Con Helado Y Queso Grande", 10500, adicionesSalpicon)]

var adicionesBrownie = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var brownies = [new Productos("Tradicional", 7000, adicionesBrownie[0]),new Productos("Sándwich", 7000, adicionesBrownie)]

var adicionesCopas = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var copasHelados = [new Productos("Fresa", 11000, adicionesCopas[0]),new Productos("Fresa En Crema", 12000, adicionesCopas),new Productos("Oreo", 11000, adicionesCopas),new Productos("Queso", 12000, adicionesCopas),new Productos("Kiwi", 11000, adicionesCopas),new Productos("Gomitas", 10000, adicionesCopas)]

var adicionesCanasta = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var canastas = [new Productos("Canasta FresaChoco", 11000, adicionesCanasta[0]),new Productos("Canasta Sencilla", 9000, adicionesCanasta),new Productos("Canastita", 7000, adicionesCanasta),new Productos("Canasta Kid", 8500, adicionesCanasta)]

var adicionesInfantil = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var menuInfantil = [new Productos("Buho Waffle", 8500, adicionesInfantil[0]),new Productos("Pulpito Waffle", 8500, adicionesInfantil),new Productos("Ratoncito Waffle", 7000, adicionesInfantil),new Productos("Gusanito Loco", 9500, adicionesInfantil)]

var adicionesMalFra = [["galleta"],"Galleta", "helado", "vainilla", "chocolate", "brownie"]
var malteadasFrappes = [new Productos("Malteada Full", 14000, adicionesMalFra[0]),new Productos("Malteada MontañaMega", 13500, adicionesMalFra),new Productos("Malteada MegaWow", 16000, adicionesMalFra),new Productos("Malteada Fusión De Fresas", 14000, adicionesMalFra),new Productos("MiMalteada House", 11000, adicionesMalFra),new Productos("Malteada Mickey", 11000, adicionesMalFra),new Productos("Malteada Sencilla", 10000, adicionesMalFra),new Productos("Malteada Cupcake", 11500, adicionesMalFra),new Productos("Fusión De Frappe", 12000, adicionesMalFra),new Productos("Frappe Sencillo", 9000, adicionesMalFra)]

var bebidas = [new Productos("Agua Sin Gas", 4000),new Productos("Agua Con Gas", 4000),new Productos("Gaseosa Personal", 5000 ),new Productos("Gaseosa Familiar", 8000 )]

var adiciones = [new Productos("Maracuyá", 1000 ),new Productos("M&M", 1000 ),new Productos("Bola Helado", 3000 ),new Productos("Crema Chantilly", 1000 )]

function bubble(){
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < bubbles.length; i++) {
        const producto = document.createElement("button");
        producto.id=bubbles[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = bubbles[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = bubbles[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+bubbles[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(bubbles[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + bubbles[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=bubbles[i].nombre
            nuevoItem.innerHTML = "Bubble " + bubbles[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - bubbles[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = bubbles[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)


            var helados = document.createElement("select");

            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];

                helados.add(opcion);        
            }

            adicionDiv.appendChild(helados);

            for (let z = 0; z < bubbles[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = bubbles[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=bubbles[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function waffle(){
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < waffles.length; i++) {
        const producto = document.createElement("button");
        producto.id=waffles[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = waffles[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = waffles[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+waffles[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(waffles[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + waffles[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=waffles[i].nombre
            nuevoItem.innerHTML = "Waffle " + waffles[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - waffles[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = waffles[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)


            var helados = document.createElement("select");

            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];

                helados.add(opcion);        
            }

            adicionDiv.appendChild(helados);

            for (let z = 0; z < waffles[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = waffles[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=waffles[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function banana() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < bananas.length; i++) {
        const producto = document.createElement("button");
        producto.id=bananas[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = bananas[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = bananas[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+bananas[i].precio
        producto.appendChild(precioBoton)
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=bananas[i].nombre
            nuevoItem.innerHTML = "Banana " + bananas[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - bananas[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = bananas[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)


            var helados = document.createElement("select");

            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];

                helados.add(opcion);        
            }

            adicionDiv.appendChild(helados);

            for (let z = 0; z < bananas[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = bananas[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=bananas[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function ensalada() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < ensaladas.length; i++) {
        const producto = document.createElement("button");
        producto.id=ensaladas[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = ensaladas[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = ensaladas[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+ensaladas[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(ensaladas[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + ensaladas[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=ensaladas[i].nombre
            nuevoItem.innerHTML = "Ensalada " + ensaladas[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - ensaladas[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = ensaladas[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)


            var helados = document.createElement("select");

            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];

                helados.add(opcion);        
            }

            adicionDiv.appendChild(helados);

            for (let z = 0; z < ensaladas[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = ensaladas[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=ensaladas[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function salpicon() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < salpicones.length; i++) {
        const producto = document.createElement("button");
        producto.id=salpicones[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = salpicones[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = salpicones[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+salpicones[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(salpicones[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + salpicones[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=salpicones[i].nombre
            nuevoItem.innerHTML = "Salpicón " + salpicones[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - salpicones[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = salpicones[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)

            if (salpicones[i].nombre=="Con Helado Y Queso Grande" || salpicones[i].nombre=="Con Helado Grande") {
                
                for (let z = 0; z < 2; z++) {
                    var helados = document.createElement("select");
                    for (let i = 0; i < saboresHelado.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.value = saboresHelado[i];
                        opcion.text = saboresHelado[i];
        
                        helados.add(opcion);        
                    }
                    adicionDiv.appendChild(helados);                      
                }                  
            } else{
                var helados = document.createElement("select");
                for (let i = 0; i < saboresHelado.length; i++) {
                    var opcion = document.createElement("option");
                    opcion.value = saboresHelado[i];
                    opcion.text = saboresHelado[i];

                    helados.add(opcion);        
                }
                adicionDiv.appendChild(helados);
            }

            for (let z = 0; z < salpicones[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = salpicones[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=salpicones[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function brownie() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < brownies.length; i++) {
        const producto = document.createElement("button");
        producto.id=brownies[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = brownies[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = brownies[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+brownies[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(brownies[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + brownies[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=brownies[i].nombre
            nuevoItem.innerHTML = "Brownie " + brownies[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - brownies[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = brownies[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)

            var helados = document.createElement("select");
            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];
            
                helados.add(opcion);        
            }
            adicionDiv.appendChild(helados);                      
        
            for (let z = 0; z < brownies[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = brownies[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=brownies[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function malteadaFrappe() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < malteadasFrappes.length; i++) {
        const producto = document.createElement("button");
        producto.id=malteadasFrappes[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = malteadasFrappes[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = malteadasFrappes[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+malteadasFrappes[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(malteadasFrappes[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + malteadasFrappes[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=malteadasFrappes[i].nombre
            nuevoItem.innerHTML = malteadasFrappes[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - malteadasFrappes[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = malteadasFrappes[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)

            var helados = document.createElement("select");

            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];
            
                helados.add(opcion);        
            }
            adicionDiv.appendChild(helados);                      
        
            for (let z = 0; z < malteadasFrappes[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = malteadasFrappes[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=malteadasFrappes[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function copa() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < copasHelados.length; i++) {
        const producto = document.createElement("button");
        producto.id=copasHelados[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = copasHelados[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = copasHelados[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+copasHelados[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(copasHelados[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + copasHelados[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=copasHelados[i].nombre
            nuevoItem.innerHTML = "Copa De " + copasHelados[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - copasHelados[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = copasHelados[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)

            var helados = document.createElement("select");
            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];
            
                helados.add(opcion);        
            }
            adicionDiv.appendChild(helados);                      
        
            for (let z = 0; z < copasHelados[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = copasHelados[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=copasHelados[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function canasta() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < canastas.length; i++) {
        const producto = document.createElement("button");
        producto.id=canastas[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = canastas[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = canastas[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+canastas[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(canastas[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + canastas[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=canastas[i].nombre
            nuevoItem.innerHTML = canastas[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - canastas[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = canastas[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)

            var helados = document.createElement("select");

            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];
            
                helados.add(opcion);        
            }
            adicionDiv.appendChild(helados);                      
        
            for (let z = 0; z < canastas[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = canastas[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=canastas[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function infantil() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < menuInfantil.length; i++) {
        const producto = document.createElement("button");
        producto.id=menuInfantil[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = menuInfantil[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = menuInfantil[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+menuInfantil[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(menuInfantil[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + menuInfantil[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=menuInfantil[i].nombre
            nuevoItem.innerHTML = menuInfantil[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - menuInfantil[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = menuInfantil[i].precio
            descripcion.appendChild(nuevoPrecio);

            var adicionDiv = document.createElement("div")
            adicionDiv.classList.add("adiciones")
            nuevoDiv.appendChild(adicionDiv)

            var helados = document.createElement("select");

            for (let i = 0; i < saboresHelado.length; i++) {
                var opcion = document.createElement("option");
                opcion.value = saboresHelado[i];
                opcion.text = saboresHelado[i];
            
                helados.add(opcion);        
            }
            adicionDiv.appendChild(helados);                      
        
            for (let z = 0; z < menuInfantil[i].mostrarA().length; z++) {

                var textoCheck = document .createElement("p")
                textoCheck.innerHTML = menuInfantil[i].mostrarA()[z]
                adicionDiv.appendChild(textoCheck)

                var add = document.createElement("input")
                add.type = "checkbox"
                add.id=menuInfantil[i].mostrarA()[z]
                textoCheck.appendChild(add)
            }

        })

    }
}

function bebida() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < bebidas.length; i++) {
        const producto = document.createElement("button");
        producto.id=bebidas[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = bebidas[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = bebidas[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+bebidas[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(bebidas[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + bebidas[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=bebidas[i].nombre
            nuevoItem.innerHTML = bebidas[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - bebidas[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = bebidas[i].precio
            descripcion.appendChild(nuevoPrecio);

        })

    }
}

function adicion() {   
    document.querySelector(".productos").innerHTML = ''

    for (let i = 0; i < adiciones.length; i++) {
        const producto = document.createElement("button");
        producto.id=adiciones[i].nombre
        producto.classList.add("productosNuevo");
        producto.textContent = adiciones[i].nombre

        var imagenProducto = new Image()
        imagenProducto.src = adiciones[i].imagen
        producto.appendChild(imagenProducto)

        var precioBoton=document.createElement("p")
        precioBoton.textContent ="$"+adiciones[i].precio
        producto.appendChild(precioBoton)
        document.querySelector(".productos").appendChild(producto);
        
        document.getElementById(adiciones[i].nombre).addEventListener("click", function () {
            
            document.getElementById("Total").textContent=total=total + adiciones[i].precio
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
            nuevoItem.className="nombreBoton"
            nuevoItem.id=adiciones[i].nombre
            nuevoItem.innerHTML = adiciones[i].nombre
            descripcion.appendChild(nuevoItem);

            var eliminar = document.createElement("button")
            eliminar.innerHTML="x"
            eliminar.className="eliminar"
            nuevoItem.appendChild(eliminar)
            eliminar.addEventListener("click", function () {
                nuevoDiv.remove();
                document.getElementById("Total").textContent= total= total - adiciones[i].precio
                document.getElementById("totalPagar").textContent= totalPagar=total
            })
               
            var nuevoPrecio = document.createElement("p");
            nuevoPrecio.innerHTML = adiciones[i].precio
            descripcion.appendChild(nuevoPrecio);

            if (adiciones[i].nombre=="Bola Helado") {
                var helados = document.createElement("select");

                for (let i = 0; i < saboresHelado.length; i++) {
                    var opcion = document.createElement("option");
                    opcion.value = saboresHelado[i];
                    opcion.text = saboresHelado[i];
                
                    helados.add(opcion);        
                }
                adicionDiv.appendChild(helados);    
            }       

        })

    }
}

function capturar() {
   var metodo=document.getElementById("metodo").value
   var total = parseInt(document.getElementById("Total").textContent) 
   var descuento = parseInt(document.getElementById("descuento").textContent)
   var totalPagar= parseInt(document.getElementById("totalPagar").textContent) 
   var contenido= document.querySelector(".resumen-productos").children     
   var nombreItem=[]
   var precioItem=[]
   for (let i = 0; i < contenido.length; i++) {
        nombreItem.push(contenido[i].children[0].children[0].childNodes[0].textContent)
        precioItem.push(contenido[i].children[0].children[1].textContent)
    }

    localStorage.setItem("total",total)
    localStorage.setItem("descuento",descuento)
    localStorage.setItem("totalPagar",totalPagar)
    localStorage.setItem("metodo",metodo)
    localStorage.setItem("nombre",nombreItem)
    localStorage.setItem("precio", precioItem);
    localStorage.setItem("cantidad", contenido.length)
    window.location.href = "factura.html";
   
}

