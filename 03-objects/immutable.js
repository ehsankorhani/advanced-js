let name = 'Alfie';

name[0] = 'X';

console.log(name);

// ---------------------------------------------

let colors = [ 'Red', 'Green', 'Blue' ];

colors[0] = 'Pink';

console.log(colors);

// ---------------------------------------------

const cars = [ 'Honda', 'BMW' ];
const newCars = cars;

newCars.push('Jaguar');

console.log(cars);

// ---------------------------------------------

const person = Object.freeze({
  name: 'Alfie'
});

const newPerson = person;

newPerson.name = 'John';

console.log(person.name);
console.log(newPerson.name);

// ---------------------------------------------

const newPerson2 = { ...person, name: 'Jane', age: 28 }

console.log(person.name);
console.log(newPerson2);

// ---------------------------------------------

const { age, ...newPerson3 } = newPerson2;

console.log(newPerson3);

// ---------------------------------------------

function greeting(person) {
  const newPerson = Object.assign({}, person);

  newPerson.name = 'Jane';

  console.log(`Hi ${newPerson.name}`);
}

const person2 = { name: 'Alfie' }

greeting(person);

console.log(person.name);