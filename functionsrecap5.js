//Define a function checkProperty() that will use the following object passed as an argument to print the output in the console:

let property = {
    owner: {
      firstName: "Bob",
      lastName: "Doe",
      age: 44
    },
    isForSale: true,
    sqrm: 120,
    address: {
      street: "Happy St",
      number: 123,
      city: "Miami",
      state: "FL",
      country: "US"
    },
    amenities: ["pool", "tennis court", "private parking", "yard"]
  };
  
  console.log(`The home in ${property.address.street} is not for sale.`);
  
  function checkProperty(firstname) {
    if ((property.firstName = "Jerry")) {
      console.log(property);
    }
    if ((property.firstName = "Bob")) {
      console.log(`The home in ${property.address.street} is not for sale.`);
    }
  }
  
  checkProperty(property);