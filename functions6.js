function calculator(mathSymbol, number1, number2) {
    if (mathSymbol === "+") {
      console.log(number1 + number2);
    } else if (mathSymbol === "-") {
      console.log(number1 + number2);
    } else if (mathSymbol === "*") {
      console.log(number1 * number2);
    } else if (mathSymbol === "/") {
      console.log(number1 / number2);
    } else {
      console.log("Error");
    }
  }
  
  calculator("+", 5, 3);