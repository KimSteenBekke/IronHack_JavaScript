//function countBumps (roadStr) {
//  var numberOfBumps = 0;
//  for (let i = 0; i < roadStr.length; i++){
//    console.log(roadStr.slice(i,i+1));
//    if (roadStr.slice(i,i+1) === "^"){
//      var numberOfBumps = numberOfBumps + 1;  
//    }
//  }   
//  return numberOfBumps;
//};

//  console.log(countBumps("--^----^------^--^---"));

function pickEvenOdd (arr) {
    const even = [];// do not remove or change this line
    const odd = []; // do not remove or change this line
  
      for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
        even.push(arr[i]); 
      }          
        if (arr[i] % 2 === 1){
        odd.push(arr[i]); 
      }
    }  
    return [ even, odd ]; // do not remove or change this line
  }
  
  let input = [1, 2, 3, 4];
  console.log(pickEvenOdd(input));