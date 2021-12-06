let currentGroup = {
    course: "Web Development",
    type: "full-time",
    squadName: "squad-307",
    city: "Miami",
    teacher: {
      name: "Nick",
      age: 27
    },
    classroom: {
      floor: 3,
      seats: 30,
      available: true
    }
  };
  
  console.log(currentGroup.teacher); // => { name: 'Nick', age: 27 }
  console.log(currentGroup.teacher.name); // => Nick
  console.log(currentGroup.classroom.available); // => true
  