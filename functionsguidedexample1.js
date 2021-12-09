function calculator(num1, num2, operator) {
    if (!num1 || !num2 || !operator) {
      console.log("Please provide both numbers and operator!");
      return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log("Please add a numeric value only!");
      return;
    }
  
    if (
      operator !== "+" &&
      operator != "-" &&
      operator != "*" &&
      operator != "/"
    ) {
      console.log("Please provide valid operator.");
      return;
    }
  
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
  
    let response = `${num1} ${operator} ${num2} = ${result}`;
    console.log(response);
    return response;
  }
  
  calculator(6, 7, "+");