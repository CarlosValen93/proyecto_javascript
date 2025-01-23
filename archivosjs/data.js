const productos1 = [
  {
    id: 1,
    nombre: "Planta de Interior",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
    descripcion: "Resistente, ideal para interiores, muy fácil de cuidar.",
    precio: 15.99,
    stock: 20
  },
  {
    id: 2,
    nombre: "Planta de Sombra",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Perfecta para poca luz, mantenimiento sencillo y básico.",
    precio: 19.99,
    stock: 20
  },
  {
    id: 3,
    nombre: "Ficus Elástica",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
    descripcion: "Planta interior resistente, grande y con mucho estilo.",
    precio: 29.50,
    stock: 20
  },
  {
    id: 4,
    nombre: "Cactus en Maceta",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
    descripcion: "Decorativo, ideal para interiores con luz y poco riego.",
    precio: 12.99,
    stock: 20
  },
  {
    id: 5,
    nombre: "Palmera Kentia",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Planta tropical decorativa, perfecta para interiores grandes.",
    precio: 25.00,
    stock: 20
  },
  {
    id: 6,
    nombre: "Planta suculenta",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
    descripcion: "Compacta y resistente, ideal para interiores pequeños modernos.",
    precio: 10.00,
    stock: 20
  },
  {
    id: 7,
    nombre: "Monstera Deliciosa",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Hojas grandes decorativas, ideal para interiores tropicales modernos.",
    precio: 35.00,
    stock: 20
  },
  {
    id: 8,
    nombre: "Aloe Vera",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
    descripcion: "Planta medicinal fácil de cuidar, ideal para interiores frescos.",
    precio: 14.99,
    stock: 20
  },
  {
    id: 9,
    nombre: "Lirio de Paz",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
    descripcion: "Planta elegante con flores blancas, perfecta para interiores.",
    precio: 18.00,
    stock: 20
  },
  {
    id: 10,
    nombre: "Helecho",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Planta frondosa ideal para ambientes húmedos y sombreados.",
    precio: 20.00,
    stock: 20
  },
  {
    id: 11,
    nombre: "Planta Colgante",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
    descripcion: "Perfecta para espacios verticales, resistente y decorativa.",
    precio: 22.00,
    stock: 20
  },
  {
    id: 12,
    nombre: "Palma Areca",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Planta elegante con hojas largas, ideal para interiores amplios.",
    precio: 26.00,
    stock: 20
  }
];

const productos2 = [
  {
    id: 13,
    nombre: "Cactus Gigante",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
    descripcion: "Cactus grande, perfecto para exteriores y patios decorativos.",
    precio: 45.99,
    stock: 20
  },
  {
    id: 14,
    nombre: "Bambú de la Suerte",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Planta de buena suerte, perfecta para interiores decorativos.",
    precio: 22.50,
    stock: 20
  },
  {
    id: 15,
    nombre: "Cineraria",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
    descripcion: "Planta de flores vivas, perfecta para cualquier espacio interior.",
    precio: 16.99,
    stock: 20
  },
  {
    id: 16,
    nombre: "Spathiphyllum",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
    descripcion: "Elegante planta con flores blancas, ideal para interiores modernos.",
    precio: 24.00,
    stock: 20
  },
  {
    id: 17,
    nombre: "Planta de Serpiente",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Resistente y purifica el aire, ideal para cualquier hogar.",
    precio: 30.00,
    stock: 20
  },
  {
    id: 18,
    nombre: "Dracaena",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
    descripcion: "Planta con hojas alargadas, ideal para interiores decorativos modernos.",
    precio: 28.99,
    stock: 20
  },
  {
    id: 19,
    nombre: "Ficus Benjamina",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Árbol decorativo ideal para interiores amplios con mucho estilo.",
    precio: 50.00,
    stock: 20
  },
  {
    id: 20,
    nombre: "Lavanda",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
    descripcion: "Planta aromática que añade frescura y naturalidad al hogar.",
    precio: 12.00,
    stock: 20
  },
  {
    id: 21,
    nombre: "Geranios",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
    descripcion: "Planta colorida ideal para exteriores con luz y frescura natural.",
    precio: 8.99,
    stock: 20
  },
  {
    id: 22,
    nombre: "Orquídea",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Planta elegante con flores llamativas, ideal para interiores decorativos.",
    precio: 40.00,
    stock: 20
  },
  {
    id: 23,
    nombre: "Cactus Columna",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
    descripcion: "Decorativo y perfecto para ambientes secos.",
    precio: 15.00,
    stock: 20
  },
  {
    id: 24,
    nombre: "Planta Bonsái",
    imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
    descripcion: "Elegante árbol en miniatura para interiores.",
    precio: 35.00,
    stock: 20
  }
];
