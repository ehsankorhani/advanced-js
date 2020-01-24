let person1 = new Object();

// ----------------------------------

let person2 = Object.create(null);

// ----------------------------------

let person3 = {};

// ----------------------------------

let Person = function(name) {
  this.name = name;

  this.greeting = function() {
    console.log(`Hi ${name}`)
  }
}

let person4 = new Person('Alfie');
person4.greeting();
// ----------------------------------

let PersonFactory = function(name) {
  return {
    name: name,

    greeting: function() {
      console.log(`Hi ${name}`)
    },
  }
}

let person5 = PersonFactory('Alfie');
person5.greeting();

// ----------------------------------

let personProto = function() {};

personProto.prototype.name = null;
personProto.prototype.greeting = function() {
  console.log(`Hi ${this.name}`)
}

let person6 = new personProto();
person6.greeting();

// ----------------------------------

let PersonCP = function(name) {
  this.name = name;
}

PersonCP.prototype.greeting = function() {
  console.log(`Hi ${this.name}`)
}

let person7 = new PersonCP('Alfie');
person7.greeting(); // Hi Alfie

// ----------------------------------

let PersonProto2 = function(name) {
  this.name = name;

  if (typeof this.greeting !== 'function') {
    PersonProto2.prototype.greeting = function() {
      console.log(`Hi ${this.name}`)
    }
  }
}

let person8 = new PersonProto2('Alfie');
person8.greeting()

// ----------------------------------

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hi ${this.name}`)
  }
}

let person9 = new PersonClass('Alfie');
person9.greeting()

// ----------------------------------