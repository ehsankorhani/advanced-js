# Prototype

JavaScript uses a mechanism called Prototypes to provide objects inheritance. 

<br>

## ```[[Prototype]]```

It is a special hidden property of the objects. It can be null or references another object.

The referenced object is called *prototype*.

```[[Prototype]]``` is hidden and inaccessible but we can use it's *getter/setter* function ```__proto___``` to access it.

```js
const car = {
    type: 'vehicle'
}

const tesla = {
    engine: 'electric'
}

tesla.__proto__ = car;
tesla.type; // vehicle
```

<br>

### Prototype chain

Other objects can inherit from the another sub type:

```js
const modelS = {
    __proto__: tesla,
    range: 700
}

modelS.type; // vehicle
```

<br>

### Limitations

The ```__proto__``` assignment:
1. can’t go in circular reference
2. can only be ```null``` or an object

<br>

### The value of ```this```

> No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

```js
tesla.getDescription()
```

<br>

### for…in loop

With ```for..in``` loop we can iterates over inherited properties too:

```js
for (let prop in modelS) {
    console.log(prop);
}
```
```
range
engine
type
```

We can exclude inherited properties with ```obj.hasOwnProperty(key)```:

```js
for (let prop in modelS) {
    if (!modelS.hasOwnProperty(prop)) continue;
    
    console.log(prop);
}
```
```
range
```

> Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.
