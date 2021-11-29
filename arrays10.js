// declare the function-array as parameters:
function printElements (someArray){
    for(let i=0; i<someArray.length; i++){
      console.log(`Element: ${someArray[i]}`)
    }
  }
  
  
  // example 1:
  // invoke the function - pass an array as the parameter:
  printElements(["hello", "kitty", "pizza", 3, 78, false]); 
  // Element: hello
  // Element: kitty
  // Element: pizza
  // Element: 3
  // Element: 78
  // Element: false
  
  
  // example 2:
  const funnyArray = ["dog", 4, "miami", true];
  printElements(funnyArray);
  // Element: dog
  // Element: 4
  // Element: miami
  // Element: true