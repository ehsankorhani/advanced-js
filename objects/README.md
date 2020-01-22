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

#### Object Properties
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
  console.log(`${key} = ${person[key]}`)
}
```







---

## Prototype








Objects and Functions are closely related.

## Objects and the Dot


## Object Properties

