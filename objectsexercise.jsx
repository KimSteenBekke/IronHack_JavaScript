let product = {
  name: "headphones",
  price: 120,
  doesItWork: false,
  previousOwner: "Bob"
};

delete product.previousOwner;

product.doesItWork = true;

if (product.price > 100) {
  product.discountPercentage = 10;
}

product.price -= product.price * (product.discountPercentage / 100);

//for (let key in product) {
//console.log(key);
//console.log(product[key]);
//}

for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

if ("discountPercentage" in product) {
  console.log(
    `We got some ${product.name} on sale for just $${product.price}, that's ${product.discountPercentage} % off`
  );
}
