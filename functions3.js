// function declaration with a parameter
function sayHello(language) {
    switch (language) {
      case "fr":
        console.log("Bonjour!");
        break;
      case "ger":
        console.log("Hallo!");
        break;
      case "esp":
        console.log("Hola!");
        break;
      case "sjy":
        console.log("Mojn!");
        break;
      default:
        console.log("Hello!");
    }
  }
  
  // function invocation with or without an argument
  sayHello("ger"); // => Hallo!
  sayHello("fr"); // => Bonjour!
  sayHello("esp"); // => Hola!
  sayHello("sjy"); // => Mojn!
  sayHello(); // => Hello!
  
  // we passed argument "ger"
  //                      |
  //           -----------
  //          |
  sayHello("ger"); // => Hallo!
  
  // we passed argument "fr"
  sayHello("fr"); // => Bonjour!
  
  // we passed argument "esp"
  sayHello("esp"); // => Hola!
  
  // we didn't pass any arguments, so the default part was executed
  sayHello(); // => Hello!
  