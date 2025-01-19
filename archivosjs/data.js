const productos = [
    {
      id: 1,
      nombre: "Planta de Interior",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
      descripcion: "Planta ideal para interiores, fácil de cuidar y resistente.",
      precio: 15.99
    },
    {
      id: 2,
      nombre: "Planta de Sombra",
      imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhPsI8GINb1zLXZRo390YAfx5yTnBr6hyRoRPAcIGtSeLl0Or7_WnkE9nJc6fL1Hw9oMyHwqhAk_YpE6RodulRS3FvT8ikxeRHKcLrX7paWwuByUMRccrtqpHGJhFDirjUytuPJtXT-Vc&usqp=CAc",
      descripcion: "Perfecta para lugares con poca luz natural.",
      precio: 19.99
    },
    {
      id: 3,
      nombre: "Ficus Elástica",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
      descripcion: "Planta de interior resistente y de gran tamaño.",
      precio: 29.50
    },
    {
      id: 4,
      nombre: "Cactus en Maceta",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
      descripcion: "Cactus decorativo ideal para espacios modernos.",
      precio: 12.99
    },
    {
      id: 5,
      nombre: "Palmera Kentia",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
      descripcion: "Planta tropical perfecta para decorar interiores.",
      precio: 25.00
    },
    {
      id: 6,
      nombre: "Planta suculenta",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
      descripcion: "Ideal para espacios pequeños, fácil de cuidar.",
      precio: 10.00
    },
    {
      id: 7,
      nombre: "Monstera Deliciosa",
      imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhPsI8GINb1zLXZRo390YAfx5yTnBr6hyRoRPAcIGtSeLl0Or7_WnkE9nJc6fL1Hw9oMyHwqhAk_YpE6RodulRS3FvT8ikxeRHKcLrX7paWwuByUMRccrtqpHGJhFDirjUytuPJtXT-Vc&usqp=CAc",
      descripcion: "Planta de hojas grandes y brillantes, perfecta para interiores.",
      precio: 35.00
    },
    {
      id: 8,
      nombre: "Aloe Vera",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
      descripcion: "Planta medicinal fácil de cuidar, ideal para interiores.",
      precio: 14.99
    },
    {
      id: 9,
      nombre: "Lirio de Paz",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
      descripcion: "Planta decorativa con flores blancas, ideal para interiores.",
      precio: 18.00
    },
    {
      id: 10,
      nombre: "Helecho",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
      descripcion: "Planta ideal para zonas de sombra y humedad.",
      precio: 20.00
    },
    {
      id: 11,
      nombre: "Cactus Gigante",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
      descripcion: "Cactus grande, ideal para exteriores y patios.",
      precio: 45.99
    },
    {
      id: 12,
      nombre: "Bambú de la Suerte",
      imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhPsI8GINb1zLXZRo390YAfx5yTnBr6hyRoRPAcIGtSeLl0Or7_WnkE9nJc6fL1Hw9oMyHwqhAk_YpE6RodulRS3FvT8ikxeRHKcLrX7paWwuByUMRccrtqpHGJhFDirjUytuPJtXT-Vc&usqp=CAc",
      descripcion: "Planta simbólica de buena suerte, perfecta para hogares.",
      precio: 22.50
    },
    {
      id: 13,
      nombre: "Cineraria",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
      descripcion: "Planta de flores coloridas para decorar cualquier espacio.",
      precio: 16.99
    },
    {
      id: 14,
      nombre: "Spathiphyllum",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
      descripcion: "Planta de flores blancas, ideal para ambientes frescos.",
      precio: 24.00
    },
    {
      id: 15,
      nombre: "Planta de Serpiente",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
      descripcion: "Planta resistente que purifica el aire y decora tu hogar.",
      precio: 30.00
    },
    {
      id: 16,
      nombre: "Dracaena",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10093/10093154_1.jpg?12-11-2024",
      descripcion: "Planta con hojas alargadas y decorativas, fácil de mantener.",
      precio: 28.99
    },
    {
      id: 17,
      nombre: "Ficus Benjamina",
      imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhPsI8GINb1zLXZRo390YAfx5yTnBr6hyRoRPAcIGtSeLl0Or7_WnkE9nJc6fL1Hw9oMyHwqhAk_YpE6RodulRS3FvT8ikxeRHKcLrX7paWwuByUMRccrtqpHGJhFDirjUytuPJtXT-Vc&usqp=CAc",
      descripcion: "Árbol de interior con hojas brillantes, ideal para grandes espacios.",
      precio: 50.00
    },
    {
      id: 18,
      nombre: "Lavanda",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/10089/10089246_1.jpg?12-06-2023",
      descripcion: "Planta aromática que añade un toque natural y fresco.",
      precio: 12.00
    },
    {
      id: 19,
      nombre: "Geranios",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11249/11249539_1.jpg?20-08-2024",
      descripcion: "Planta con flores coloridas que alegran cualquier lugar.",
      precio: 8.99
    },
    {
      id: 20,
      nombre: "Orquídea",
      imagen: "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_fill,g_center,w_702,h_936/productos/fol/11199/11199687_1.jpg?14-02-2024",
      descripcion: "Hermosa planta con flores elegantes y duraderas.",
      precio: 40.00
    }
  ];
  
