
  
const sectionGrid = document.querySelector('#productos .grid'); 
const botonesPaginacion = document.querySelectorAll('.botones button');
const divAgregarAlCarrito = document.querySelector('.agregarAlCarritoDeCompras');
const iconoCarrito = document.querySelector(".fa-cart-shopping");



const carrito = []; 

function agregarAlCarrito(producto) {


  
  const productoEnCarrito = carrito.find(item => item.id === producto.id);

  if (productoEnCarrito) {

    productoEnCarrito.cantidad++;
  } else {

    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    });
    
  }
   divAgregarAlCarrito.style.display = "block"

  
  convertirCarrito();
}

function  convertirCarrito() {

  divAgregarAlCarrito.innerHTML = "";

  
  const h3 = document.createElement("h3");
  h3.textContent = "Carrito de Compra";
  divAgregarAlCarrito.appendChild(h3);

  
let total = 0;

  
  carrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("productoCarrito");

    const pPlantas = document.createElement("p");
    pPlantas.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}`;

    const pPrecio = document.createElement("p");
    pPrecio.textContent = `Precio: ${(producto.precio * producto.cantidad).toFixed(2)} €`;


    total += producto.precio * producto.cantidad;

    const butEliminar = document.createElement("button");
    butEliminar.classList.add("botonrojo");
    butEliminar.textContent = "Eliminar";
    butEliminar.addEventListener(("click"), () => eliminarDelCarrito(producto.id));
    const butMas = document.createElement("button");
    butMas.classList.add("botonrojo");
    butMas.textContent = "+";
    butMas.addEventListener(("click"), () => sumarPlanta(producto.id));
    const butMenos = document.createElement("button");
    butMenos.classList.add("botonrojo");
    butMenos.textContent = "-";
    butMenos.addEventListener(("click"), () => restarPlanta(producto.id));

    


    div.append(pPlantas, pPrecio, butEliminar, butMas, butMenos);
    

    divAgregarAlCarrito.appendChild(div);

  });


  const pTotal = document.createElement("p");
  pTotal.classList.add("precioTotal");
  pTotal.textContent = `Total: ${total.toFixed(2)} €`;
  divAgregarAlCarrito.appendChild(pTotal);



  const butVaciarCarrito= document.createElement("button");

    butVaciarCarrito.textContent = 'Vaciar carrito'
    butVaciarCarrito.addEventListener("click", () => {carrito.length = 0;

      convertirCarrito(); 
  });
  
  
    
    
    const butProcederPago= document.createElement("button");
    butProcederPago.textContent = 'Proceder al pago'
    butProcederPago.addEventListener("click", () => { 
      if (carrito.length > 0) {
          alert('¡Compra realizada con éxito!');
      } else {
          alert('Necesitas seleccionar al menos un producto para proceder al pago.');
      }
  });
    divAgregarAlCarrito.append(butVaciarCarrito, butProcederPago);
    
}
//--------------------------------------------------------------------
function eliminarDelCarrito(id) {
  
  const index = carrito.findIndex(producto => producto.id === id);
  if (index !== -1) {
    carrito.splice(index, 1);
  }


  
  convertirCarrito();
}
//--------------------------------------------------------------------
function sumarPlanta(id) {
  // Buscar el producto en el carrito por su id
  const producto = carrito.find(producto => producto.id === id);
  
  // Incrementar la cantidad si el producto existe
  if (producto) {
    producto.cantidad += 1;
  }

  // Actualizar la visualización del carrito
  convertirCarrito();
}

function restarPlanta(id) {
  // Buscar el producto en el carrito por su id
  const producto = carrito.find(producto => producto.id === id);
  
  // Reducir la cantidad si es mayor que 0
  if (producto && producto.cantidad > 0) {
    producto.cantidad -= 1;
    
    // Si la cantidad llega a 0, eliminar el producto del carrito (opcional)
    if (producto.cantidad === 0) {
      const index = carrito.findIndex(prod => prod.id === id);
      carrito.splice(index, 1);
    }
  }

  // Actualizar la visualización del carrito
  convertirCarrito();
}







//--------------------------------------------------------------------






function goToPage(event) {
  const pagina = parseInt(event.target.dataset.object);
  if (pagina) {
    switch (pagina) {
      case 1:
        init(productos1); 
        break;
      case 2:
        init(productos2);
      default:
        console.log("No válido");
        break;
    }
  }
}
//--------------------------------------------------------------------

botonesPaginacion.forEach(button => button.addEventListener('click', goToPage));


//--------------------------------------------------------------------

function printOneProducto(producto, dom) {
    const article = document.createElement('article');
    article.classList.add('cartaproducto');
  
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.nombre;
  
    const h3 = document.createElement('h3');
    h3.textContent = producto.nombre;
  
    const p = document.createElement('p');
    p.textContent = producto.descripcion;
  
    const span = document.createElement('p');
    span.classList.add('precio');
    span.textContent = `Precio: ${producto.precio} €`;
    
    const button = document.createElement('button');
    button.classList.add('botonagregar');
    button.textContent = 'Agregar al carrito';
    button.addEventListener('click', () => {
     agregarAlCarrito(producto);
    });
  
    figure.appendChild(img);
    article.append(figure, h3, p, span, button);
    dom.appendChild(article);
  }
  

  function printAllProductos(list, dom) {
    dom.innerHTML = "";
   
    list.forEach(producto => printOneProducto(producto, dom));
  }
  iconoCarrito.addEventListener("click", () => {
    // Mostramos el carrito si está oculto o lo actualizamos si ya está visible
    if (divAgregarAlCarrito.style.display === "none" || divAgregarAlCarrito.style.display === "") {
        divAgregarAlCarrito.style.display = "block"; // Mostrar carrito
        convertirCarrito(); // Renderizar el contenido
    } else {
        divAgregarAlCarrito.style.display = "none"; // Ocultar carrito
    }
  });
  
  function init(list) {
   
    botonesPaginacion[0].dataset.object = "1"; 
    botonesPaginacion[1].dataset.object = "2";
  
    printAllProductos(list, sectionGrid);
  }

  init(productos1)
  
  