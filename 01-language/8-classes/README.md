# Classes

`` `class` `` construct is a modern JavaScript concept. Class in object-oriented programming is a blue-print for creating objects.

The `` `class` `` syntax in JavaScript looks like:

``` js
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

To create a new instance of the class we use the `` `new` `` keyword:

``` js
const myClass1 = new MyClass();
```

Class constructor can accept parameters in order to initialize class states or properties.

Example:

``` js
class Person {

    constructor(salutation, name) {
        this.salutation = salutation
        this.name = name
    }

    greeting() {
        return `Hi, ${this.salutation} ${this.name}` ;
    }

}
```

And we instantiate this class with:

``` js
const alfie = new Person('Mr.', 'Alfie')
const greetingMsg = alfie.greeting(); // Hi, Mr. Alfie
```

<br>

## Class type

Class is in fact a `` `function` `` type in JavaScript.

``` js
console.log(typeof Person); // function 
```

When we define a class the JavaScript will:

1. Create a function with same name.
2. The function code will go inside the `` `constructor` `` - so, empty if no constructor.
3. Stores methods in `` `<class-name>.prototype` ``.

``` js
Person === Person.prototype.constructor; // true
Object.getOwnPropertyNames(Person.prototype); // constructor, greeting
```

<br>

* All the codes inside a classes is in `` `use strict` `` mode.
* A class definition sets `` `enumerable` `` flag to false. Therefore, the methods are non-enumerable.

<br>

### Class Expression

Classes can be defined inside other expressions, passed around, returned or assigned.

``` js
let Person = class {
    greeting() {
        return `Hi, ${this.salutation} ${this.name}` ;
    }
}
```

In the expression above, the class can have a name but it will be only visible inside the class:

``` js
let person = class PersonClass {
    greeting() {
        console.log(PersonClass);
    }
}
```

And we can return a class:

``` js
function makeClass(salutation, name) {
    return class {
        greeting() {
            return `Hi, ${this.salutation} ${this.name}` ;
        };
    };
}

let Person = makeClass('Mr.', 'Alfie');
new Person().greeting(); // Hi, Mr. Alfie 
```

<br>

### Getters and Setters

`` `get` ` ` and ` ` `set` `` are private functions to interact with class variables. Assigning value to a class variable will invoke the setter:

``` js
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

``` js
const jane = new Person('Ms.', 'J'); // Name is too short.
```

<br>

### Class fields

Classes can have any properties.

``` js
class Person {
    job = "Tech Lead";
    ...
}
```

These fields are set on the object itself, not the prototype:

``` js
console.log(alfie.name); // Alfie
console.log(Person.prototype.name); // undefined
```

<br>

### Method binding

Functions in JavaScript have a dynamic `` `this` `` which depends on the context of the call.<br>
Therefore, `` `this` `` can change when passed to different context:

``` js
class Person {
    ...

    introduce() {
        console.log( `My name is ${this.name}` );
    }
}
```

``` js
setTimeout(alfie.introduce, 1000); // My name is undefined
```

The solution is to:

1. Pass a wrapper function

    

``` js
    setTimeout(() => alfie.introduce(), 1000); // My name is Alfie
```

2. Bind the method to object

    

``` js
    class Person {
        ...

        introduce = () => {
            console.log( `My name is ${this.name}` );
        }
    }
```

    

``` js
    setTimeout(alfie.introduce, 1000); // My name is Alfie
    setTimeout(() => alfie.introduce(), 1000); // My name is Alfie
```

The class field `` `introduce = () => {...}` `` is created on a per-object basis

<br>
<br>

---

## Inheritance

With inheritance classes can extend the functionality of another class.

To inherit from another class we use the `` `extends` `` keyword.

Suppose we have a super class `` `Car` ``:

``` js
class Car {
    constructor(model) {
        this.speed = 0;
        this.model = model;
    }

    accelerate(speed) {
        this.speed = speed;
        console.log( `${this.model} drives with ${this.speed} KPH.` );
    }
}
```

A subclass `` `Mercedes` `` can extend it's functionality with:

``` js
class Tesla extends Car {
    autoPark() {
        console.log( `${this.model} parks automatically.` );
    }
}
```

And we can call `` `Car` `` method on this object:

``` js
const myTesla = new Tesla("Model S");
myTesla.accelerate(180); // Model S drives with 180 KPH.
myTesla.autoPark(); // Model S parks automatically.
```

And we can check that:

``` js
myTesla instanceof Car; // true
```

<br>

### Method overriding

A method in sub-class with the same name of a method in the super class will override it's functionality:

``` js
class Tesla extends Car {
    ...

    accelerate() {
        console.log( `Tesla ${this.model} is going faster.` );
    }
}
```

``` js
myTesla.accelerate(); // Tesla Model S is going faster.
```

However, we are still able to call the methods in super class with: `` `super.method_name()` ``.

``` js
class Tesla extends Car {
    ...

    accelerate(speed) {
        super.accelerate(speed);
        console.log( `Tesla ${this.model} is going faster.` );
    }
}
```

``` js
myTesla.accelerate(180);
// Model S drives with 180 KPH.
// Tesla Model S is going faster.
```

> Arrow functions have no super.

The outer function super will be called instead if available, or will raise an error.

<br>

### Constructor overriding

> Constructors in inheriting classes must call `` `super(...)` ``, and do it before using this.

``` js
class Tesla extends Car {
    constructor(model, range) {
            super(model);
            this.range = range;
        }

        ...
}
```

<br>
<br>

---

## Static method and properties

*Static* method is a method that assigns to the class function itself, not it's `` `prototype` ``.

``` js
class Car {
    static staticMethod() {
        console.log(this === Car)
    }
}

Car.staticMethod(); // true
```

We cannot call the static method on class instance:

``` js
var car = new Car();
car.staticMethod(); // TypeError: car.staticMethod is not a function
```

The static method definition is similar to when we create the method on the class function directly:

``` js
class Car {}

Car.staticMethod = function() {
    console.log(this === Car)
};

Car.staticMethod(); // true
```

similarly we cannot do:

``` js
var car = new Car();
car.staticMethod(); // TypeError: car.staticMethod is not a function
```

Normally we create static methods when they should belong to the class and not it's instances.

``` js
class NumberUtil {
    static addLeadingZero(num) {
        return ('0' + num).slice(-2)
    }
}

NumberUtil.addLeadingZero(7); // '07'
```

In the above example we do not care about the class instances. This method should always do the same thing.

<br>

### Static properties

Are the same as a direct assignment to a class:

``` js
class Car {
    static type = 'vehicle';
}

// or

Car.type = 'vehicle';
```

<br>

### Inheritance

Static method are inherited:

``` js
class Tesla extends Car {
    ...
}

Tesla.staticMethod(); // false
```

<br>
<br>
---

## Private and Protected

> Protected properties are usually prefixed with an underscore `` `_` ``.

``` js
class Car {
    _speed = 0;

    constructor(model) {
        this.model = model;
    }
}
```

This is just a convention and it's not enforced by the language.

``` js
const car = new Car('X5');
car._speed; // 0
```

We can use `` `get` ` ` and ` ` `set` `` to interact with these properties:

``` js
class Car {
  ...

  set speed(value) {
      if (value < 0) throw new Error("Negative speed");
      this._speed = value;
  }

  get speed() {
      return this._speed;
  }
}
```
```js
car.speed = 80;
```

> Protected fields are inheritable.

### Readonly

If we omit the ```setter``` function we will have a readonly property.

<br>

### Private

Privates should start with ```#```.

```js
class Car {
    #odometer = 0;
}
```

> This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.