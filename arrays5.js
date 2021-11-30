const albumArray = ["A Saucerful Of Secrets", "Meddle", "Wish You Were Here", "Animals", "Delicate Sound Of Thunder"];

let lastElement = albumArray.pop();   //remove from end 
let firstElement = albumArray.shift();   // remove from beginning

console.log(lastElement);
console.log(firstElement);

albumArray.unshift(lastElement);   ///insert at beginning
albumArray.push(firstElement);   ///insert at end

console.log(albumArray);
