let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
seriesPending.push ("Ztrangefeld");

//console.log(seriesPending);

for (let i = 0; i < seriesPending.length; i++){
  console.log(`Index: ${i} - element: ${seriesPending[i]}`);

  if (seriesPending[i] === "Boolean 99");
  console.log("Found it!");

}

let seriesWatching = [];

let removedSeries = seriesPending.shift();
seriesWatching.push(removedSeries);

// another solution in a single line
// will use the removed value with .shift() to add it with .push()
// seriesWatching.push(seriesPending.shift())

console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

for (let i = 0; i < 4; i++) {
  seriesWatching.push(seriesPending.shift());
}

console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);

// starting from index 0, the splice will remove X amount of elements where X is the length.
seriesWatching.splice(0, seriesWatching.length);

console.log(`seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`);