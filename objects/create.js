let person1 = new Object();
// -------------
let person2 = Object.create(null);
// -------------
let person3 = {};
// -------------
let Person = function() {  
}

let person4 = new Person();

let person5 = {
  fname: 'Alfie',
  lname: 'Atkins',
};

person5.age = 32;
person5['id number'] = 'abc123';

let mobile = person5.mobile;

for (let key in person5) {
  console.log(`${key} = ${person5[key]}`)
}

console.log(mobile)