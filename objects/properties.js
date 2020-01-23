let person1 = {
  fname: 'Alfie',
  lname: 'Atkins',
};

person1.age = 32;
person1['id number'] = 'abc123';

let mobile = person1.mobile; // no error -> undefined

for (let key in person1) {
  console.log(`${key} = ${person1[key]}`)
}

// -----------------------------------

let lname = 'surname';

let person2 = {
  [lname]: 'Atkins',
};

console.log(person2.surname);

// -----------------------------------

let person3 = {
  firstName: 'Alfie',
};

console.log('firstName' in person3) // true
console.log('lastName' in person3) // false

// -----------------------------------

const person4 = {
  firstName: 'Alfie',
};

person4.firstName = 'John';
person4.lastName = 'Doe';

person4 = {};
