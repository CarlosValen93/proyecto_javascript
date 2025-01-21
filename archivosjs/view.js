
  
const sectionGrid = document.querySelector('#productos .grid'); 
const botonesPaginacion = document.querySelectorAll('.botones button');
const divAgregarAlCarrito = document.querySelector('.agregarAlCarritoDeCompras');


const carrito = []; 
function agregarAlCarrito(producto) {
  console.log("Producto agregado al carrito:", producto);

  
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

  
  renderizarCarrito();
}

function renderizarCarrito() {

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
    pPrecio.textContent = `Precio: ${(producto.precio * producto.cantidad)} €`;

    total += producto.precio * producto.cantidad;

    const butEliminar = document.createElement("button");
    butEliminar.textContent = "Eliminar";
    butEliminar.addEventListener("click", () => eliminarDelCarrito(producto.id));

    div.append(pPlantas, pPrecio, butEliminar);
    divAgregarAlCarrito.appendChild(div);
  });


  const pTotal = document.createElement("p");
  pTotal.textContent = `Total: ${total.toFixed(2)} €`;
  divAgregarAlCarrito.appendChild(pTotal);
}

function eliminarDelCarrito(id) {
  
  const index = carrito.findIndex(producto => producto.id === id);
  if (index !== -1) {
    carrito.splice(index, 1);
  }

  
  renderizarCarrito();
}











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


botonesPaginacion.forEach(button => button.addEventListener('click', goToPage));




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
    span.textContent = `Precio: ${producto.precio}`;
    
    const button = document.createElement('button');
    button.classList.add('botonagregar');
    button.textContent = 'Agregar al carrito';
    button.addEventListener('click', () => {
      console.log("Botón clicado, ejecutando agregarAlCarrito.");
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
  function init(list) {
   
    botonesPaginacion[0].dataset.object = "1"; 
    botonesPaginacion[1].dataset.object = "2";
  
    printAllProductos(list, sectionGrid);
  }
  init(productos1)
  