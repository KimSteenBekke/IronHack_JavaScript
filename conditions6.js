//  TO SEE HOW THIS EXAMPLE WORKS, UNCOMMENT OUT THE FOLLOWING LINE:
// also, don't worry about "prompt" that is used below, we will cover it later ;)

const fruit  = prompt ("Enter the fruit name:");
let type = "";

if (fruit === "pear" || fruit === "apple") {
  type = "pome";
} else if (fruit === "peach" || fruit === "coconut") {
  type = "drupe";
} else if (fruit === "strawberry" || fruit === "blueberry" || fruit === "blackberry") {
  type = "berry";
} else if (fruit === "beans" || fruit === "peas") {
  type = "legumes";
} else {
  type = "other";
}

console.log(`${fruit} is type of: ${type}.`);