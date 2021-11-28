let statement =
  "I am the Ironhacker and I can't wait for this course to start!!!";

// it is zero indexed ==> starts with zero
let test1 = statement.slice(0, 19);
console.log(test1); // => I am the Ironhacker

// if the second parameter is not passed, it will capture
// from the character found on the position that corelates with passed number
// to the end of the string
let test2 = statement.slice(24);
console.log(test2); // => I can't wait for this course to start!!!

// if negative nuber is passed, the count starts from the end of the string
let test3 = statement.slice(-8);
console.log(test3); // => start!!!