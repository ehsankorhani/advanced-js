# Classes

```class``` construct is a modern JavaScript concept. Class in object-oriented programming is a blue-print for creating objects.

The ```class``` syntax in JavaScript looks like:

```js
class MyClass {
  constructor() {
    // ...
  }

  method1() {
    //...
  }

  //...
}
```

To create a new instance of the class we use the ```new``` keyword:

```js
const myClass1 = new MyClass();
```

Class constructor can accept parameters in order to initialize class states or properties.

Example:

```js
class Person {

  constructor(salutation, name) {
    this.salutation = salutation
    this.name = name
  }

  greeting() {
    return `Hi, ${this.salutation} ${this.name}`;
  }

}
```

And we instantiate this class with:

```js
const alfie = new Person('Mr.', 'Alfie')
const greetingMsg = alfie.greeting(); // Hi, Mr. Alfie
```

<br>

## Class type

Class is in fact a ```function``` type in JavaScript.

```js
console.log(typeof Person); // function 
```

When we define a class the JavaScript will:
1. Create a function with same name.
2. The function code will go inside the ```constructor``` - so, empty if no constructor.
3. Stores methods in ```<class-name>.prototype```.

```js
Person === Person.prototype.constructor; // true
Object.getOwnPropertyNames(Person.prototype); // constructor, greeting
```

<br>

* All the codes inside a classes is in ```use strict``` mode.
* A class definition sets ```enumerable``` flag to false. Therefore, the methods are non-enumerable.

<br>

### Class Expression

Classes can be defined inside other expressions, passed around, returned or assigned.

```js
let Person = class {
  greeting() {
    return `Hi, ${this.salutation} ${this.name}`;
  }
}
```

In the expression above, the class can have a name but it will be only visible inside the class:

```js
let person = class PersonClass {
  greeting() {
    console.log(PersonClass);
  }
}
```

And we can return a class:

```js
function makeClass(salutation, name) {
  return class {
    greeting() {
      return `Hi, ${this.salutation} ${this.name}`;
    };
  };
}

let Person = makeClass('Mr.', 'Alfie');
new Person().greeting(); // Hi, Mr. Alfie 
```

<br>

### Getters and Setters

```get``` and ```set``` are private functions to interact with class variables. Assigning value to a class variable will invoke the setter:

```js
  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
```
```js
const jane = new Person('Ms.', 'J'); // Name is too short.
```

<br>

### Class fields

Classes can have any properties.

```js
class Person {
  job = "Tech Lead";
  ...
}
```

These fields are set on the object itself, not the prototype:

```js
console.log(alfie.name); // Alfie
console.log(Person.prototype.name); // undefined
```

<br>

### Method binding

Functions in JavaScript have a dynamic ```this``` which depends on the context of the call.<br>
Therefore, ```this``` can change when passed to different context:

```js
class Person {
  ...

  introduce() {
    console.log(`My name is ${this.name}`);
  }
}
```
```js
setTimeout(alfie.introduce, 1000); // My name is undefined
```

The solution is to:
1. Pass a wrapper function
    ```js
    setTimeout(() => alfie.introduce(), 1000); // My name is Alfie
    ```
2. Bind the method to object
    ```js
    class Person {
      ...

      introduce = () => {
        console.log(`My name is ${this.name}`);
      }
    }
    ```
    ```js
    setTimeout(alfie.introduce, 1000); // My name is Alfie
    setTimeout(() => alfie.introduce(), 1000); // My name is Alfie
    ```
The class field ```introduce = () => {...}``` is created on a per-object basis