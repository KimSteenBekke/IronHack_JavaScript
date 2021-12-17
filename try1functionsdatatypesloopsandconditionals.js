var oldCatalog = [
    [
      {
        product: "MacBook",
        price: 1019,
        category: 'tech'
      },
      {
        product: "Cheerios",
        price: 5,
        category: 'food'
      }
    ],
  
    [
      {
       product: "Snickers",
       price: 1.5,
       category: 'food'
      },
      {
        product: "Air Pods",
        price: 129,
        category: 'tech'
      }
    ]
  ];
  
  console.log(oldCatalog[0][0]);
  console.log(oldCatalog[0][1]);
  console.log(oldCatalog[1][0]);
  console.log(oldCatalog[1][1]);
  
  function sortProducts (matrix) {
    let newCatalog = {
     food: [], 
     tech: []
   };
    let article = {
      product: "",
      price: 0,
      category: ''
    };
    
     // interpretation: sort is categorizing into these two arrays
    
    for (let i = 0; i < matrix.length; i++) {       //loop over arrays
      for (let j = 0; j < matrix[i].length; j++) {  //loop over objects
        article.product = matrix[i][j].product;
        article.price = matrix[i][j].price;
        article.category = matrix[i][j].category;
        console.log(matrix[i][j].category);
        console.log(matrix[i][j]);
        if (matrix[i][j].category === 'food') {
          newCatalog.food.push(article);
        } else if (matrix[i][j].category === 'tech') {
          newCatalog.tech.push(article);
        }
   //     switch (matrix[i][j].category) {
   //       case 'food':
   //         console.log(matrix[i][j]);
   //         newCatalog.food.push(matrix[i][j]);
   //         break;
   //       case 'tech':
   //         console.log(matrix[i][j]);
   //         newCatalog.tech.push(matrix[i][j]);
   //         break;
   //       default:
   //         console.log("you shouldn't see this");
   //     }
      }
    }
    return newCatalog;
  }
  
  console.log(sortProducts(oldCatalog));