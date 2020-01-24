# Objects

Object is a non-primitive data type in JavaScript. This means that they are *mutable*, compared by reference (rather than by value), and stored in *heap* (rather than stack).

## Object creation

There are multiple ways to create an Object in JavaScript. The simplest and most common style is **Object Literal** syntax.

```js
let person = {};
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

<br />

## Object creation patterns

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

##  Patterns
The drawback of the previous syntaxes is that they don't allow creation of the same type without copy-paste.

Therefore, in the absence of ```class``` in ES5, the JavaScript community has created patterns to simplify the creation of family of same objects.

<br />

#### Constructor pattern

The ```this``` will be returned from the function. Therefore, no ```return``` keyword is required.

```js
// Capitalize the function name
let Person = function(name) {
  this.name = name;

  this.greeting = function() {
    console.log(`Hi ${name}`)
  }
}

let person1 = new Person('Alfie');
person1.greeting(); // Hi Alfie
```

The ```new``` operator will create a new instance of the object.

<br />

#### Factory pattern

Factory creates and returns a new instance of an object every time it's getting called.

```js
let PersonFactory = function(name) {
  return {
    name: name,

    greeting: function() {
      console.log(`Hi ${name}`)
    }
  }
}

let person1 = PersonFactory('Alfie');
person1.greeting(); // Hi Alfie
```

Therefore, there is no need to use ```new``` operator.

<br />

#### Prototype pattern

With constructor and factory the properties and methods are on the main object. Therefore, each time you instantiate it, everything gets re-created again. Separate memory will be allocated for it and changes will only affect the instance.

In this pattern a blank object is created. Nothing will return from it. <br />
The properties will be created on the object's ```prototype```. <br />
No independent memory will be allocated and all The changes on Prototypes will affect everything else.

```js
let Person = function() {};

Person.prototype.name = null;
Person.prototype.greeting = function() {
  console.log(`Hi ${this.name}`)
}

let person1 = new Person();
person1.greeting(); // Hi null
```

<br />

#### Constructor/Prototype Pattern

Most of times we don't want to share *property* values between instances, but we also don't want to allocate unnecessary memory for methods.

The properties are referenced with ```this``` operator, but the object methods are are created on the prototype.

The purpose is to maintaining the benefits of using both a constructor and a prototype.

```js
let Person = function(name) {
  this.name = name;
}

Person.prototype.greeting = function() {
  console.log(`Hi ${this.name}`)
}

let person1 = new Person('Alfie');
person1.greeting(); // Hi Alfie
```

<br />

#### Dynamic Prototype Pattern

*Prototype* might look unfamiliar to developers coming from classic OOP languages. This pattern tries to make object creation look more similar to other languages by placing the method definition on the object.

```js
let Person = function(name) {
  this.name = name;

  if (typeof this.greeting != 'function') {
    Person.prototype.greeting = function() {
      console.log(`Hi ${this.name}`)
    }
  }
}

let person1 = new person('Alfie');
person1.greeting() // Hi Alfie
```

#### ES6 Class

ES6 supports the familiar ```class``` concept.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hi ${this.name}`)
  }
}

let person = new Person('Alfie');
person.greeting() // Hi Alfie

```
