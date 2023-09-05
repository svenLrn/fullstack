class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName() {
    return this._irstName;
  }

  set firstName(newFirstName) {
    this.firstName = newFirstName;
  }

  get lastName() {
    return this.lastName;
  }

  set lastName(newLastName) {
    this.lastName = newLastName;
  }

  get age() {
    return this.age;
  }

  set age(newAge) {
    this.age = newAge;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);