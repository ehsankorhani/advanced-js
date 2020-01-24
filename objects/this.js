'use strict'

function printStrictThis() {
  console.log(this);
}

printStrictThis()

// ---------------------------------------------------

let person1 = {
  name: 'Alfie',
}

person1.greeting = function() {
  console.log(`Hi ${this.name}`)
  console.log(this == person1)
}

person1.greeting();

// ---------------------------------------------------

let person2 = { name: 'Alfie', }
let person3 = { name: 'Jane', }

let greeting = function() {
  console.log(`Hi ${this.name}`)
}

person2.greeting = greeting;
person3.greeting = greeting;

person2.greeting()
person3.greeting()

// ---------------------------------------------------

let person4 = {
  name: 'Alfie',

  greeting() {
    console.log(`Hi ${this.name}`)
  }
}

let person5 = person4;
person4 = null;

person5.greeting();

// ---------------------------------------------------

let person6 = {
  name: 'Alfie',

  greeting() {
    console.log(`Hi ${person6.name}`)
  }
}

let person7 = person6;
person6 = null;

//person7.greeting();

// ---------------------------------------------------

let person8 = {
  name: 'Alfie',
}

let greetingOut = () => {
  console.log(`Hi ${this.name}`)
  console.log(this == person8)
}

person8.greeting = greetingOut;

person8.greeting();
