let basic = {
    language: "JavaScript",
    frameworks: [
      {
        end: "back",
        list: [
          {
            name: "ExpressJS",
            released: 2010
          },
          {
            name: "MeteorJS",
            released: 2012
          }
        ]
      },
      {
        end: "front",
        list: [
          {
            name: "ReactJS",
            released: 2013
          },
          {
            name: "VueJS",
            released: 2014
          }
        ]
      }
    ]
  };
  
  console.log(basic.frameworks);
  // gives us back the ARRAY with TWO OBJECTS
  // => [
  //      { end: 'back', list: [ [Object], [Object] ] },
  //      { end: 'front', list: [ [Object], [Object] ] }
  //    ]
  
  // DON'T WORRY BECAUSE OF [Object] syntax, it just represents more complex structure inside. Will be covered later in the course.
  
  console.log(basic.frameworks[1].list[0]);
  // => { name: 'ReactJS', released: 2013 }
  