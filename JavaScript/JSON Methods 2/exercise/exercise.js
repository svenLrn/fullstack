class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static toJson(js) {
    return JSON.stringify(js);
  }

  static fromJson(json) {
    return JSON.parse(json);
    
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
console.log(Person.toJson(developer))


