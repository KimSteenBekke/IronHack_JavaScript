const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}

//let rounded = math.rounded(prices * 10 / 10);





console.log(sum);
console.log(sum.toFixed(1));
console.log(sum.toFixed(0));