// cogemos los elementos principales en el que aplicar las dinamicas de javascript
const sectionGrid = document.querySelector('#productos .grid');
const botonesPaginacion = document.querySelectorAll('.botones button');
const divAgregarAlCarrito = document.querySelector('.agregarAlCarritoDeCompras');
const iconoCarrito = document.querySelector('.fa-cart-shopping');
const selectProducto = document.querySelector('#seleccionaPlanta');

// array para guardar los productos del carrito que usare en posteriores funciones
const carrito = [];

// Funcion para combinar los productos en un solo array
function obtenerTodosLosProductos() {
  return [...productos1, ...productos2];
}

// funcion principal para renderizar el carrito (la usare bastante para actualizar el carrito cada vez que se cumplan diferentes procesos)
function convertirCarrito() {
  // limpiamos el contenedor
  divAgregarAlCarrito.innerHTML = "";
   //
  // creamos el titulo del carrito
  const h3 = document.createElement('h3');
  h3.textContent = 'carrito de compra';
  divAgregarAlCarrito.appendChild(h3);

  // inicializamos el total, del que vamos a partir siempre
  let total = 0;

  // recorremos los productos en el carrito
  carrito.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('productoCarrito');

    // mostramos el nombre y cantidad del producto
    const pPlantas = document.createElement('p');
    pPlantas.textContent = `${producto.nombre} - cantidad: ${producto.cantidad}`;

    // mostramos el precio total por cantidad DE los elementos sleccionados
    const pPrecio = document.createElement('p');
    pPrecio.textContent = `precio: ${(producto.precio * producto.cantidad).toFixed(2)} €`;

    // sumamos al total
    total += producto.precio * producto.cantidad;

    // botones de eliminar, sumar y restar
    const butEliminar = document.createElement('button');
    butEliminar.classList.add('botonrojo');
    butEliminar.textContent = 'eliminar';
    butEliminar.addEventListener('click', () => eliminarDelCarrito(producto.id));

    const butMas = document.createElement('button');
    butMas.classList.add('botonrojo');
    butMas.textContent = '+';
    butMas.addEventListener('click', () => sumarPlanta(producto.id));

    const butMenos = document.createElement('button');
    butMenos.classList.add('botonrojo');
    butMenos.textContent = '-';
    butMenos.addEventListener('click', () => restarPlanta(producto.id));

    // añadimos los elementos al contenedor del producto
    div.append(pPlantas, pPrecio, butEliminar, butMas, butMenos);
    divAgregarAlCarrito.appendChild(div);
  });

  // mostramos el total del carrito
  const pTotal = document.createElement('p');
  pTotal.classList.add('precioTotal');
  pTotal.textContent = `total: ${total.toFixed(2)} €`;
  divAgregarAlCarrito.appendChild(pTotal);

  // boton para vaciar el carrito
  const butVaciarCarrito = document.createElement('button');
  butVaciarCarrito.textContent = 'vaciar carrito';
  butVaciarCarrito.addEventListener('click', () => {
    
    //esto lo hago para que cada vez que el usuario vacie el carrito el stock se vuelva a 20 porque antes si seleccionaba varios productos y luego le daba a vaciar carrito no se actualizaba el stock y se quedaba con las plantas que ya le habia restado antea
    carrito.length = 0; // vaciamos el carrito
    obtenerTodosLosProductos().forEach(producto => {
      producto.stock = 20;
      const stockElements = document.querySelector(`.producto-${producto.id} .stock`);
      if (stockElements) {
        stockElements.textContent = `stock: 20`;
      }
    });
  
    convertirCarrito();
  });

  // boton para proceder al pago
  const butProcederPago = document.createElement('button');
  butProcederPago.textContent = 'proceder al pago';
  butProcederPago.addEventListener('click', () => {
    if (carrito.length > 0) {
      alert('compra realizada con exito');
      carrito.length = 0; // vaciamos el carrito despues del pago
      convertirCarrito(); // actualizamos la vista
    } else {
      alert('necesitas seleccionar al menos un producto para proceder al pago.');
    }
  });

  // añadimos los botones al carrito
  divAgregarAlCarrito.append(butVaciarCarrito, butProcederPago);
}

// funcion para añadir un producto al carrito , de la carta al carrito
function agregarAlCarrito(producto) {
  // verificamos si el producto ya esta en el carrito
  const productoEnCarrito = carrito.find(item => item.id === producto.id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++; // si existe, incrementamos la cantidad
  } else {
    carrito.push({ // si no existe, lo añadimos
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    });
  }

  divAgregarAlCarrito.style.display = 'block'; 
  convertirCarrito(); // actualizamos el carrito para volver a empezar 
}

// funcion para eliminar un producto del carrito
function eliminarDelCarrito(id) {
  const index = carrito.findIndex(producto => producto.id === id);
  if (index !== -1) {
    carrito.splice(index, 1); // eliminamos el producto por su indice
  }

  convertirCarrito(); 
}

// funcion para sumar un producto 
function sumarPlanta(id) {
  // buscar el producto en el carrito
  const producto = carrito.find(producto => producto.id === id);

  // buscar el producto en el inventario original por ello obtenerTodosLosProcutos junta los dos arrays quetenemos en el data
  const productoCarritoEntero = obtenerTodosLosProductos().find(producto => producto.id === id);

  // verificar que el producto exista y que haya stock disponible
  if (producto && productoCarritoEntero && productoCarritoEntero.stock > 0) {
    producto.cantidad++; 
    productoCarritoEntero.stock--; // cada vez que aumente uno en el carrito, disminuye uno en el stock que aparece en la carta

    // esto es para actualizar el stock en la carta del producto
    const stockElements = document.querySelector(`.producto-${id} .stock`);
    if (stockElements) {
      stockElements.textContent = `stock: ${productoCarritoEntero.stock}`;
    }


    convertirCarrito();
  } else {
    alert('No hay más stock disponible.');
  }
}

// funcion para restar una planta
function restarPlanta(id) {
  // buscar el producto en el carrito
  const producto = carrito.find(producto => producto.id === id);

  // buscar el producto en el inventario original ( los dos aarrays)
  const productoCarritoEntero = obtenerTodosLosProductos().find(producto => producto.id === id);

  // si hay producto (es mayor que cero la cantidad) se cumple esto
  if (producto && producto.cantidad > 0) {
    producto.cantidad--; // 
    productoCarritoEntero.stock++; 

    // si la cantidad llega a 0 quitamos la platna del carrito
    if (producto.cantidad === 0) {
      const index = carrito.findIndex(prod => prod.id === id);
      carrito.splice(index, 1);
    }

    // este if nos ayuda a cada vez que manipulamos los botones que aumentan y disminuyen el stock, el valor que ve el usuario de tineda y el del sistema sea igual
    const stockElements = document.querySelector(`.producto-${id} .stock`);
    if (stockElements) {
      stockElements.textContent = `stock: ${productoCarritoEntero.stock}`;
    }

  
    convertirCarrito();
  } else {
    alert('No puedes reducir más la cantidad.');
  }
}

// evento para el icono del carrito, para que cada vez que le demos aparezca y desaparezca el carrito por eso usamos los displays
iconoCarrito.addEventListener('click', () => {
  if (divAgregarAlCarrito.style.display === 'none') {
    divAgregarAlCarrito.style.display = 'block'; 
    convertirCarrito(); 
    divAgregarAlCarrito.style.display = 'none';
  }
});

// esta funcion es para la paginacion, dividida en dos paginas
function goToPage(event) {
  const pagina = parseInt(event.target.dataset.object);
  if (pagina) {
    switch (pagina) {
      case 1:
        init(productos1); 
      case 2:
        init(productos2); 
        break;
      default:
        console.log('no valido');
        break;
    }
  }
}

// con esto manejamos la paginacion, sus botones
botonesPaginacion.forEach(button => button.addEventListener('click', goToPage));

// funcion para mostrar cada planta
function printOneProducto(producto, dom) {
  const article = document.createElement('article');

  // me ayude de chatgpt porque queria hacer una clase que fuese dinamica para cada id de la planta para poder sincronizar el carrito con el stock disponible de cada planta
  article.classList.add('cartaproducto', `producto-${producto.id}`);
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
  span.textContent = `precio: ${producto.precio} €`;

  const pStock = document.createElement('p');
  pStock.classList.add('stock'); // clase para identificar el stock
  pStock.textContent = `stock: ${producto.stock}`;

  const button = document.createElement('button');
  button.classList.add('botonagregar');
  button.textContent = 'agregar al carrito';
  button.addEventListener('click', () => {
    if (producto.stock > 0) {
      agregarAlCarrito(producto);
      producto.stock--;
      pStock.textContent = `stock: ${producto.stock}`; // con esto lo que hacemos es actualizar el stock de la carta dinamicamente
    } else {
      alert('este producto esta agotado');
    }
  });

  figure.appendChild(img);
  article.append(figure, h3, p, span, pStock, button);
  dom.appendChild(article);
}

// funcion para mostrar todos los productos
function printAllProductos(list, dom) {
  dom.innerHTML = ''; // limpiar antes de mostrar
  list.forEach(producto => printOneProducto(producto, dom));
}

// funcion para inicir la pagina, en este caso siempre desde la 1 (posicion 0)
function init(list) {
  botonesPaginacion[0].dataset.object = '1';
  botonesPaginacion[1].dataset.object = '2';

  printAllProductos(list, sectionGrid); // mostrar los productos de la pagina inicial
}

// funcion que he añadido para poder buscar la planta que quieras, pasandola a lowercase por si el usuario que esta pidiendo escribe en mayusuclas 
selectProducto.addEventListener('input', () => {
  const textoBusqueda = selectProducto.value.toLowerCase();
  const resultados = obtenerTodosLosProductos().filter(producto =>
    producto.nombre.toLowerCase().includes(textoBusqueda)
  );

  printAllProductos(resultados, sectionGrid);

  if (resultados.length === 0) {
    sectionGrid.innerHTML = '<p>No se encontraron resultados</p>';
  }
});

// iniciar la pagina
init(productos1);
