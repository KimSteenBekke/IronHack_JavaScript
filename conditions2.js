// NOT
let doesCode = true;
if (!doesCode) {
  console.log("Ironhack is the place to be!");
}

// AND
let lovesParty = true;
if (doesCode && lovesParty) {
  console.log ("You Seem To Be An Ironhacker!");
}

// OR
let framework = "Express";
if (doesCode && (framework === "Express" || framework === "React")) {
  console.log("You Are A SmartAss Developer!");
  console.log("And I Am IronMan!");
}