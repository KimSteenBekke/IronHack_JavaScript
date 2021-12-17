function pickOdd (arr) {
    const oddNumbers = []; // do not remove or change this line
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 1){
        oddNumbers.push(arr[i]); 
      }
    }  
    return oddNumbers; // do not remove or change this line
  }
  
  let test = [1, 21, 3, 4];
  console.log(pickOdd(test));