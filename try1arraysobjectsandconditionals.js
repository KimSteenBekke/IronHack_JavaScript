const pizzaArray = [
    { type: 'pineapple', size: 'M'},
    { type: 'pepperoni', size: 'S'},
    { type: 'pineapple', size: 'S'},
    { type: 'mushrooms', size: 'L'}
  ];
  
  function filterPizzas(pizzas) {
    var nonPineapple = [];
      for (let key in pizzas) {
        console.log(key);
        console.log(pizzas[key]);
        if (pizzas[key].type !== 'pineapple') {
          nonPineapple.push(pizzas[key])
        }
      }
      return nonPineapple;
  }
  
  console.log(filterPizzas(pizzaArray));