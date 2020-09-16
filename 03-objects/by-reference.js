let person1 = {};
let person2 = {};

console.log(person1 == person2)

// -----------------------------------------

let person3 = {};
let person4 = person3;

console.log(person3 == person4)

// -----------------------------------------

let person5 = {
  firstName: 'Alfie',
};

let person6 = {
  firstName: 'John',
};

let person7 = Object.assign({}, person5, person6);

console.log(person7 == person6)
console.log(person7.firstName)

// ------------------------------------------

let person8 = {
  firstName: 'Alfie',
};

let person9 = {
  firstName: 'John',
};

let person10 = Object.assign(person8, person9);

console.log(person10 == person8) // true
console.log(person10 == person9) // false
console.log(person8.firstName) // 'John'
console.log(person10.firstName) // 'John'

// ------------------------------------------

let qqq = {
  firstName: 'Alfie',
  model: {
    name: 'benz'
  }
};

let www = Object.assign({}, qqq);

www.model.name = 'bmw'

console.log(qqq)
console.log(www)
