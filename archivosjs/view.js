
  
const sectionGrid = document.querySelector('#productos .grid'); 

function printOneProducto(producto, dom) {
    const article = document.createElement('article');
    article.classList.add('producto-card');
  
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
  
    figure.appendChild(img);
    article.append(figure, h3, p, span);
    dom.appendChild(article);
  }
  

  function printAllProductos(list, dom) {
    dom.innerHTML = "";
   
    list.forEach(producto => printOneProducto(producto, dom));
  }
  

 
  printAllProductos(productos, sectionGrid);