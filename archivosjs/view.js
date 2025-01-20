
  
const sectionGrid = document.querySelector('#productos .grid'); 
const botonesPaginacion = document.querySelectorAll('.botones button'); // Selecciona todos los botones dentro del div "botones"

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


botonesPaginacion.forEach(button=>button.addEventListener('click', goToPage));

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
  