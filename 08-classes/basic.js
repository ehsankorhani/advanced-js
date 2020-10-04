class Person {

  job = "Tech Lead";

  constructor(salutation, name) {
    this.salutation = salutation
    this.name = name
  }

  greeting() {
    return `Hi, ${this.salutation} ${this.name}`;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

  // introduce() {
  //   console.log(`My name is ${this.name}`);
  // }

  introduce = () => {
    console.log(`My name is ${this.name}`);
  }
}

const alfie = new Person('Mr.', 'Alfie')
const greetingMsg = alfie.greeting();

console.log(greetingMsg)

// --------------------------------------------------------

console.log(typeof Person)

// --------------------------------------------------------

const jane = new Person('Ms.', 'J')

// --------------------------------------------------------

console.log(alfie.name); // Alfie
console.log(Person.prototype.name); // undefined

// --------------------------------------------------------

setTimeout(alfie.introduce, 1000);
setTimeout(() => alfie.introduce(), 1000);