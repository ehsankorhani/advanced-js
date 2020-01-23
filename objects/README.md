# Objects

Object is a non-primitive data type in JavaScript. This means that they are *mutable*, compared by reference (rather than by value), and stored in *heap* (rather than stack).

## Object creation

There are multiple ways to create an Object in JavaScript.

#### Object Constructor syntax

```js
let person = new Object();
```

#### Object.create() method

```js
let person = Object.create(null);
```

which allows to create object with more attribute options.

#### Object Literal syntax

```js
let person = {};
```

This is the most common way to create an Object and is equivalent to ```Object.create(null)```.

#### Function constructor

```js
let Person = function() {  
}

let person1 = new Person();
```

## Object Properties
Objects are key/value pairs. *key* is a string and *value* can be anything.

```js
let person = {
  fname: 'Alfie',
  lname: 'Atkins',
};

person.age = 32;
person['id number'] = 'abc123';
```

Properties can be accessed by **Dot** or **Bracket** notation.

```js
let firstName = person.fname;
let lastName = person['lname'];
```

Accessing non existing properties will not raise an exception:

```js
let mobile = person.mobile; // = undefined
```

**Dot notation** is easier to read, but with **Bracket notation** we can have space in the property name and it can start with a number too. <br />
But biggest advantage is to be able to use variables as property names:

```js
for (let key in person) {
  console.log(`${key} = ${person[key]}`) // fname = Alfie ...
}
```

**Note:** If a ```key``` name is *Integer* it will be ordered to top and the rest will appear in the order they have been defined.

#### Computed properties

Square brackets can be used as object key's to act as a variable.

```js
let lname = 'surname';

let person = {
  [lname]: 'Atkins',
};

console.log(person.surname); // Atkins
```

#### Check for property existence

```in``` can be used to check if a ```key``` exists in an object.

```js
let person = {
  firstName: 'Alfie',
};

console.log('firstName' in person) // true
console.log('lastName' in person) // false
```

#### Let vs. Const

Object which has been defined by ```const``` cannot be reassigned, however, it's properties can be altered.

```js
const person = {
  firstName: 'Alfie',
};

person.firstName = 'John'; // OK
person.lastName = 'Doe'; // OK

person = {}; // TypeError: Assignment to constant variable.
```

## By Reference vs. By Value

Objects are store *by reference*. Therefore, two objects with the same value are not equal, because they are pointing to different address in memory.

```js
let person1 = {};
let person2 = {};

console.log(person1 == person2) // false
```

**Note:** ```==``` and ```===``` are identical in object comparison.

### Copy

When copying an object into another object it in fact the reference address which is being copied.

```js
let person1 = {};
let person2 = person1;

console.log(person1 == person2) // true
```

### Clone

To create a independent object with a similar properties from an existing object it should be cloned with ```Object.assign```.

```js
let person1 = {
  firstName: 'Alfie',
};

let person2 = {
  firstName: 'John',
};

let person3 = Object.assign({}, person1, person2);

console.log(person3 == person2) // false
console.log(person3.firstName) // 'John'
```

JavaScript will add all the properties from the objects in the list of arguments into the first object, and copies that into the destination object.

```js
let person1 = {
  firstName: 'Alfie',
};

let person2 = {
  firstName: 'John',
};

let person3 = Object.assign(person1, person2);

console.log(person3 == person1) // true
console.log(person3 == person2) // false
console.log(person3.firstName) // 'John'
console.log(person1.firstName) // 'John'
```

```Object.assign``` will not perform a **deep clone**.

```js
let person1 = {
  firstName: 'Alfie',
  address: {
    city: 'Sydney'
  }
};

let person2 = Object.assign({}, person1);

person2.address.city = 'Tokyo';

console.log(person1.address.city) // 'Tokyo'
```

The *address* property is an object and will be copied by reference.