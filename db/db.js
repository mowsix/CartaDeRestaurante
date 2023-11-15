const data = [
    { id: 0, name: 'Ramen Vegetariano ', description: 'En el arte culinario de preparar un reconfortante tazón de ramen vegano, comencemos por un caldo que se convertirá en el alma de nuestra creación. En una olla, el aceite de sésamo baila con el ajo picado y las rodajas de jengibre, inundando el aire con su fragancia tentadora. Luego, se agrega un litro de caldo de verduras, donde una hoja de alga nori se sumerge, creando una danza de sabores. La salsa de soja y el miso se unen al ritual, infundiendo profundidad y umami al líquido burbujeante. La paciencia se convierte en aliada mientras el caldo, ahora enriquecido, cocina a fuego lento, permitiendo que los sabores se fusionen en armonía. Mientras el caldo se desarrolla, se preparan los fideos de ramen veganos con destreza. Cocidos con esmero y escurridos con cuidado, aguardan su momento en el escenario del tazón. Mientras tanto, en una sartén, las setas shiitake y los champiñones se preparan para su papel protagónico. Las tiras de zanahoria y las espinacas se unen a la danza en la sartén caliente, creando una sinfonía de colores y texturas. En el escenario final, los fideos toman su lugar en el centro del tazón, listos para ser bañados en el caldo fragante. La guarnición de setas, champiñones, zanahorias y espinacas se distribuye con arte sobre los fideos, cada elemento aportando su propia nota única a la composición culinaria. El cebollín picado, las semillas de sésamo tostadas y, si se desea, los brotes de bambú, se convierten en los toques finales, añadiendo una pincelada de frescura y elegancia. El resultado es un cuadro culinario: un tazón de ramen vegano que no solo satisface el paladar, sino que también alimenta el alma con sus sabores complejos y reconfortantes. Este plato invita a saborear cada bocado, sumergiéndose en la riqueza de su caldo y explorando la variedad de texturas que ofrece. ¡Que este ramen vegano sea una experiencia gastronómica inolvidable para el que se aventura a disfrutarlo!',  img: 'https://excellentdynamics.biz/demos/html/food/images/recipe1.jpg'},







    { id: 1, name: 'Milk Fruit Fresh With Vegetables',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  img: 'https://excellentdynamics.biz/demos/html/food/images/recipe2.jpg' },
    { id: 2, name: 'Pink Happy Pia Chocolate Sweet',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  img: 'https://excellentdynamics.biz/demos/html/food/images/recipe3.jpg' },
    { id: 3, name: 'Tasty Muffin Sweet Tin Lunches',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  img: 'https://excellentdynamics.biz/demos/html/food/images/recipe4.jpg'},
    { id: 4, name: 'Chickpea Recipes To Make Your Heart Happy',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  img: 'https://excellentdynamics.biz/demos/html/food/images/recipe5.jpg' },
    { id: 5, name: 'Cornbread Topped Cast-Iron Skillet Chili',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  img: 'https://excellentdynamics.biz/demos/html/food/images/recipe6.jpg' },  
  ];
  
  module.exports = {
    getAll: () => data,
    getById: (id) => {
      const item = data.find(item => item.id === id);
      return item ? [item] : [];
    },
    add: (newItem) => {
      newItem.id = data.length + 1;
      data.push(newItem);
      return newItem;
    },
  };
  