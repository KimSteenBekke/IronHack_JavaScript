let books = ["Eloquent JavaScript", "Secrets of the JavaScript Ninja"];
console.log(books[0]); // => Eloquent JavaScript
console.log(books[1]); // => Secrets of the JavaScript Ninja
console.log(books[6]); // undefined

let eloquentJS = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke"
};

console.log(eloquentJS.title); // => Eloquent JavaScript

let secretsJSninja = {
  title: "Secrets of the JavaScript Ninja",
  author1: "John Resig",
  author2: "Bear Bibeault", // two authors... interesting...
  ISBN: `xxxx xxxx xxxx`, // add ISBN
  numberOfPages: 356 // add numberOfPages
};

console.log(secretsJSninja.author2); // => Bear Bibeault
console.log(secretsJSninja.ISBN);
console.log(secretsJSninja.numberOfPages);

console.log(books[0]);
// { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }

console.log(books[0].title);
// Eloquent JavaScript

let jsDesignPatterns = {
  title: "Learning JavaScript Design Patterns",
  author1: "Addy Osmani"
};

books.push(jsDesignPatterns);
console.log(books);

// [
//   { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
//   { title: 'Secrets of the JavaScript Ninja',
//     author1: 'John Resig',
//     author2: 'Bear Bibeault' },
//   { title: 'Learning JavaScript Design Patterns',
//     author1: 'Addy Osmani' }
// ]
