function countSmilies (message) {
    var numberOfSmilies = 0;
    for (let i = 0; i < message.length-1; i++){
      console.log(message.slice(i,i+1));
      if (message.slice(i,i+1) === ":"){
        if (message.slice(i+1,i+2) === ")"){
          var numberOfSmilies = numberOfSmilies + 1;
        }  
      }
    }   
    return numberOfSmilies;
  }
    
    console.log(countSmilies("Hello :), how are you doing :) :D"));
    