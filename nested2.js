const books = [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke"
    },
    {
      title: "Secrets of the JavaScript Ninja",
      authors: ["John Resig", "Bear Bibeault", "Tournesol", "Mabuse"]
    }
  ];
  
  console.log(books[1].authors);
  // [ 'John Resig', 'Bear Bibeault' ]
  
  console.log(books[1].authors[0]); // => John Resig
  console.log(books[1].authors[1]); // => Bear Bibeault
  console.log(books[1].authors[2]);
  console.log(books[1].authors[3]);
  