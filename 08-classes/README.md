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

## Class type

Class is in fact a ```function``` type in JavaScript.

```js
console.log(typeof Person); // function 
```