const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon"; // Since person2 and person1 both refer to the same object in memory, modifying properties of person2 will also modify person1

console.log(person1);
console.log(person2);
