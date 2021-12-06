function printBio(user) {
  const Message = `This is ${user.name} ${user.surname} from ${user.address.country}.`;
  return Message;
}

const user = {
  name: "Bob",
  surname: "Martin",
  age: 25,
  address: {
    country: "USA"
  }
};

console.log(printBio(user));