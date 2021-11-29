// Accessing the last element of the array
// The length of the array is 3 but the last element is on 
// the position 2 since we start counting from zero
// this tells us that the position of the last element will always be:
// the length of the array - 1 (3-1=2)

const animalArray = ["dog", "cat", "fish"];

const lastIndex1 = animalArray.length - 1;
const lastElement1 = animalArray[lastIndex1];

console.log(lastElement1); 



const albumArray = ["A Saucerful Of Secrets", "Meddle", "Delicate Sound Of Thunder"];

const lastIndex2 = albumArray.length - 2;
const lastElement2 = albumArray[lastIndex2];

console.log(lastElement2); 