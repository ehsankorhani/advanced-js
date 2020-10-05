# Builder

> Is a creational design pattern that lets you construct complex objects step by step and produce different types and representations of an object. Construction details are hidden from the client entirely.

The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called *builders*.

<br>

## Participants

* **Director** defines the order in which to execute the building steps.
* **Builder** provides the implementation for those steps.
* **ConcreteBuilder** implements the multi-step Builder interface.
* **Products** is the complex object.

<br>

```js
function Garage() {
    this.construct = function(builder, options) {
        builder.step1(options);
        builder.step2(options);
        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;
 
    this.step1 = function(options) {
        this.car = new Car();
    };
 
    this.step2 = function(options) {
        this.car.addParts(options);
    };
 
    this.get = function() {
        return this.car;
    };
}

function Car() {
    this.engine = null;
 
    this.addParts = function(options) {
        this.engine = options.engine || "v4";
    };
 
    this.start = function() {
        console.log(`The ${this.engine} engine is starting...`);
    };
}


var garage = new Garage();
var carBuilder = new CarBuilder();
var myX5 = garage.construct(carBuilder, { engine: "v6" });

myX5.start()

```

<br>

## Applicability

* Simplify client code that creates complex objects.
* Can be useful while writing unit tests.