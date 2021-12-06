let olympicRecords = {
  athletics100Men: "Justin Gatlin",
  athleticsLongJumpMen: "Mike Powell"
};

olympicRecords.swimming200Men = "Michael Phelps";
olympicRecords.athletics100Men = "Usain Bolt";
olympicRecords.doubleOllie = "Chris Chann";

console.log(olympicRecords);

//accessing values with dot notation:

console.log(olympicRecords.athletics100Men);
console.log(olympicRecords.athleticsLongJumpMen);
console.log(olympicRecords.swimming200Men);

//accessing values with brackets notation:

console.log(olympicRecords[`athletics100Men`]);
console.log(olympicRecords[`athleticsLongJumpMen`]);
console.log(olympicRecords[`swimming200Men`]);

delete olympicRecords.doubleOllie;
console.log(olympicRecords);