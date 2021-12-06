let student = {
    firstName: "Ana",
    lastName: "Blair",
    course: {
      name: "Web Development",
      type: "part-time"
    },
    attendedIn: "Madrid",
    address: {
      street: "Happy Street",
      number: 123,
      city: "Barcelona",
      zip: 08015,
      country: "Spain"
    }
  };
  
  console.log(student.firstName); // => "Ana"
  console.log(student.lastName); // => "Blair"
  console.log(student.attendedIn); // => "Madrid"
  //console.log(student.address);
  
  // console.log(???); // => Happy Street
  
  console.log(student.address.street);
  
  // console.log(???); // => Web Development
  
  console.log(student.course.name);
  
  // console.log(???);
  // => Ana moved from Barcelona to Madrid to take part-time Web Development course.
  
  console.log(
    student.firstName,
    student.address.city,
    student.course.type,
    student.course.name
  );