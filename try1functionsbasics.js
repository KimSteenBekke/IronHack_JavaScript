//Calculate hours

function calculateHours(hoursPerDay, days) {
    return hoursPerDay * days;
   
  }
  
  calculateHours(4, 5); 

//Miles to kilometers

function milesToKilometers(miles) {
    const mileToKmConversion = 1.60934;
    let calcKilometers = 0;
    if(typeof miles !== 'undefined') {
      let calcKilometers = miles * mileToKmConversion;
      return calcKilometers; 
    } else {
      let calcKilometers = mileToKmConversion;
      return calcKilometers; 
    }
  }
  
  console.log(milesToKilometers());