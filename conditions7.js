//const fruit  = prompt ("Enter the fruit name:");
let fruit = "blackeyed peas";
let type = "";

switch (fruit) {
  case "pear":
  case "apple":
    type = "pome";
    break;
  case "peach":
  case "coconut":
    type = "drupe";
    break;
  case "strawberry":
  case "blueberry":
  case "blackberry":
    type = "berry";
    break;
  case "beans":
  case "peas":
    type = "legumes";
    break
    
  default:
    type = "other";
    break;
    
}

console.log(`${fruit} is type of: ${type}.`);