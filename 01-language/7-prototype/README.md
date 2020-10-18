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

<br><br>

---
## Function prototype 

The ```new``` operator sets the ``` [[Prototype]]``` for the new object (if F.prototype is an object).

```js
const car = {
    type: 'vehicle'
}

function tesla(model) {
    this.model = model;
}

tesla.prototype = car;

const modelS = new tesla('modelS'); // modelS.__proto__ == car
modelS.__proto__; // { type: 'vehicle' }
```

If we change the *tesla* prototype later, the *modelS* will still have *car* as the ```__proto__```, but the newly created object will get the new one.

<br>

### Default F.prototype

Every function has the *prototype* property even if we don’t define it.

```js
function Boat(make) {}
Boat.prototype; // Boat {}
```

The default *prototype* is an object with only one property which is the constructor and it points back to the function itself.

```js
Boat.prototype.constructor === Boat; // true
```

If we replace the default prototype, we will remove the constructor too. 

To avoid that, we can add/remove properties to the default "prototype" instead:

```js
Boat.prototype.sail = () => {};
```

<br>
<br>

---
## Prototype methods

The ```__proto__``` is considered deprecated. Modern JavaScript uses these methods instead:

- ```Object.create(proto, [descriptors])``` – creates an empty object with given proto as [[Prototype]].

    ```js
    const car = {
        type: 'vehicle'
    }

    const tesla = Object.create(car);
    tesla.type; // vehicle
    ```

- ```Object.getPrototypeOf(obj)``` – returns ```[[Prototype]]``` of ```obj```.
    ```js
    Object.getPrototypeOf(tesla) === car; // true
    ```

- ```Object.setPrototypeOf(obj, proto)``` – sets ```[[Prototype]]``` of ```obj``` to proto.
    ```js
    Object.setPrototypeOf(tesla, {}); // change the prototype of tesla to {}
    ```



<br>