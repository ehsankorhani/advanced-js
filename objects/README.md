# Objects

Object is a non-primitive data type in JavaScript. This means that they are *mutable*, compared by reference (rather than by value), and stored in *heap* (rather than stack).

Objects are key/value pairs. *key* is a string and *value* can be anything.

## Object creation

There are multiple ways to create an Object in JavaScript.

#### Object Constructor syntax

```js
let person = new Object();
```

#### Object.create() method

```js
let person = Object.create();
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

## Prototype








Objects and Functions are closely related.

## Objects and the Dot


## Object Properties

