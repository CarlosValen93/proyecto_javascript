
  
const sectionGrid = document.querySelector('#productos .grid'); 
const botonesPaginacion = document.querySelectorAll('.botones button');
const divAgregarAlCarrito = document.querySelector('.agregarAlCarritoDeCompras');


const carrito = []; // Array para almacenar los productos en el carrito

function agregarAlCarrito(producto) {
  console.log("Producto agregado al carrito:", producto);

  // Verifica si el producto ya está en el carrito
  const productoEnCarrito = carrito.find(item => item.id === producto.id);

  if (productoEnCarrito) {
    // Si el producto ya está en el carrito, aumenta la cantidad
    productoEnCarrito.cantidad++;
  } else {
    // Si no está, lo añade al carrito con cantidad inicial 1
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    });
    
  }

  // Renderiza el carrito actualizado
  renderizarCarrito();
}

function renderizarCarrito() {
  // Limpia el contenido del carrito antes de renderizar
  divAgregarAlCarrito.innerHTML = "";

  // Título del carrito
  const h3 = document.createElement("h3");
  h3.textContent = "Carrito de Compra";
  divAgregarAlCarrito.appendChild(h3);

  // Total acumulado
let total = 0;

  // Renderiza cada producto del carrito
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

  // Total del carrito
  const pTotal = document.createElement("p");
  pTotal.textContent = `Total: ${total.toFixed(2)} €`;
  divAgregarAlCarrito.appendChild(pTotal);
}

function eliminarDelCarrito(id) {
  // Elimina el producto del carrito
  const index = carrito.findIndex(producto => producto.id === id);
  if (index !== -1) {
    carrito.splice(index, 1);
  }

  // Vuelve a renderizar el carrito
  renderizarCarrito();
}











function goToPage(event) {
  const pagina = parseInt(event.target.dataset.object);
  if (pagina) {
    switch (pagina) {
      case 1:
        init(productos1); // Llama a la función con la lista de la página 1
        break;
      case 2:
        init(productos2); // Llama a la función con la lista de la página 2
        break;
      default:
        console.log("No válido");
        break;
    }
  }
}

// Itera sobre los botones y agrega el evento 'click'
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
    // Asigna manualmente las páginas a los botones de paginación
    botonesPaginacion[0].dataset.object = "1"; // Página 1
    botonesPaginacion[1].dataset.object = "2"; // Página 2
  
    // Renderiza los productos en la sección correspondiente
    printAllProductos(list, sectionGrid);
  }
  init(productos1)
  