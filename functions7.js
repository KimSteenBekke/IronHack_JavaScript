/*function calculateSum(num1, num2) {
  return num1 + num2;
}

function printResult() {
  const result = calculateSum(3, 6);
  console.log(`The result is: ${result}`);
}

printResult();*/

function colorMix(color1, color2) {
    if (
      (color1 === "red" && color2 === "blue") ||
      (color1 === "blue" && color2 === "red")
    ) {
      return "violet";
    } else if (
      (color1 === "red" && color2 === "yellow") ||
      (color1 === "yellow" && color2 === "red")
    ) {
      return "orange";
    } else if (
      (color1 === "blue" && color2 === "yellow") ||
      (color1 === "yellow" && color2 === "blue")
    ) {
      return "green";
    }
  }
  
  let myColor = colorMix("red", "blue");
  console.log(myColor);
  