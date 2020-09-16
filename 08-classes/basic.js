class Person {

  constructor(salutation, name) {
    this.salutation = salutation
    this.name = name
  }

  greeting() {
    return `Hi, ${this.salutation} ${this.name}`;
  }

}

const alfie = new Person('Mr.', 'Alfie')
const greetingMsg = alfie.greeting();

console.log(greetingMsg)

// --------------------------------------------------------

console.log(typeof Person)
