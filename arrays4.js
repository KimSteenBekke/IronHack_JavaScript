const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.push("lizard");
console.log(`After: ${animalArray}`); // => After: dog,cat,fish,lizard




const albumArray = ["A Saucerful Of Secrets", "Meddle", "Delicate Sound Of Thunder"];

console.log(albumArray);

albumArray.push("US + Them");

console.log(albumArray);

const lastAlbum = albumArray.length -1;
const newAlbum = albumArray[lastAlbum];

console.log(newAlbum + " is the new live album by RW");