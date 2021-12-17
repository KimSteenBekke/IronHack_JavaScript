const dev = { 
    name: 'MacBook Pro 13',
    price: {
        eu: {
          value: 1200,
          currency: '€'
        }
    }
  }
  
  function printPrice (product)  {
    const deviceInfo = `${product.name} - ${product.price.eu.value} ${product.price.eu.currency}`;
    return deviceInfo
  }
  
  console.log(printPrice(dev));
  //"MacBook Pro 13 - 1200 €"
  