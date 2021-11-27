const statement = "We are in Ironhack";

for(let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    let x = 0;
    
    while (x < statement.length) {
      let letter = statement[x];
      if (letter === "a") {
        console.log(i + " Cheers!")
      }
      x++;
    }
  }
}