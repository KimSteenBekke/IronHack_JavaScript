let turtle1 = "Leonardo ";
let turtle2 = "Raphael ";
let turtle3 = "Donatello ";
let turtle4 = "Michelangelo";

let allTurtles = "";

allTurtles += turtle1 += turtle2 += turtle3 += turtle4;

console.log(allTurtles);

console.log(allTurtles.indexOf("Donatello")); // 17
console.log(allTurtles.length); // 39

let firstHalfTurtles;
let secondHalfTurtles;

firstHalfTurtles = allTurtles.slice(0, 16);
secondHalfTurtles = allTurtles.slice(17, 39);

console.log("My favourites are " + secondHalfTurtles);