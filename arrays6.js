const albumArray = ["A Saucerful Of Secrets", "Meddle", "Wish You Were Here", "Animals", "Delicate Sound Of Thunder"];

console.log(`Original: ${albumArray}`);
console.log("------");

albumArray.splice(0,1);
console.log(`From the first element remove one element going forward: ${albumArray}`);

albumArray.splice(2,2);
console.log(`From the second element, remove two going forward: ${albumArray}`);

albumArray.splice(0,1, "UmmaGumma");
console.log(`splice album UmmaGumma: ${albumArray}`);















