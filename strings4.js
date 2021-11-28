let emptyContainer = "";
emptyContainer += "Hello there, student!";
// += is equivalent to saying:
// emptyContainer = emptyContainer + "Hello there, student!";
console.log(emptyContainer);

// ERROR CASE
// At this moment the value of the emptyContainer is "Hello there, student!"
emptyContainer += " How are you?";
// We would expect the value to be "Hello there, student! How are you?"
// However, the value is still "Hello there, student!", because we didn't reassign the variable value with `+=`
console.log(emptyContainer);

// If we want it to console "Hello there, student! How are you?",
// we need to have the following: emptyContainer += " How are you?";
