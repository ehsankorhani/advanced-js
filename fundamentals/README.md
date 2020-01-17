# JavaScript Fundamentals

## Null vs Undefined
**Best practice** is to never assign ```undefined``` to a variable and use it only to check if a variable has been initialized or assigned or not.

In many OOP languages such as C#, a variable cannot be declared without being initialized.

```csharp
/* C# */
var foo; // compile error
var bar = null; // compile error
string baz = null; // ok
```

Here ```null``` is a “reference to a non-existing object” or a “null pointer”.

However, this is completely possible in JavaScript. If no value has been assigned to a variable, it will be have the ```undefined``` value.

```js
/* JS */
var foo; // = undefined
var bar = undefined; // = undefined
var baz = null; // = null
```

In the above code, ```undefined``` means no value has been assigned, while ```null``` is just a special falsy value.

In addition while ```null``` is an object, ```undefined``` is of undefined type.

```js
var nullType = typeof null; // "object"
var undefinedType = typeof undefined; // "undefined"
```

Keep in mind that while null is an (special) object, it evaluates as ```false```.

---

## Var vs Let vs Const

**Best practice** is to use ```const```. Start declarations with const. Change it to ```let``` if later on you found out that the value needs to be changed.

Prior to ES6, a JavaScript code could have been written in no strict mode. Meaning, there was no need to declare a variable. However, this was not recommended, and the programmers were advised to write ```'use strict';``` at top of code or module.

from ES6 onward the JavaScript is always in strict mode. ```let``` and ```const``` were also standardized with ES6.

```const``` is obviously used to declare constants. And ```let``` is almost like ```var```. Almost, because there is an slight difference between these two keywords:

### Hoisting

Variables declared with ```var``` hoisted to top of the function.

```js
function greeting(name) {
  console.log(phrase, 'at top.');

  var phrase = `Hello ${name}`;

  console.log(phrase, 'at bottom.');
}

greeting('Alfie Atkins');
```

will print:

```bash
undefined "at top." # because declarations are hoisted, but assignments are not.
Hello Alfie Atkins at bottom.
```

but,

```js
function greeting(name) {
  console.log(phrase, 'at top.'); // ReferenceError

  let phrase = `Hello ${name}`;

  console.log(phrase, 'at bottom.');
}

greeting('Alfie Atkins');
```

### var does not have a block scope.

Therefore, a variable declared inside an ```if``` statement or ```for``` loop can be accessed outside of that block.

```js
if (true) {
  var fname = 'Alfie';
  let lname = 'Atkins';
}

console.log(fname); // Alfie
console.log(lname); // Uncaught ReferenceError: lname is not defined
```

This is the real reason why ```let``` was introduced instead if old ```var```.

Note:

* Constant cannot change through re-assignment
* Constant cannot be re-declared

It creates a read-only reference to a value.

But the value is still mutable:

```js
const obj = {};
const arr = [];

obj.foo = 'some value';
arr.push('another value');
```

---

## Type conversion with operators

Numeric conversion happens in mathematical functions and expressions automatically. This also refers to as **Coercion**.

```js
console.log('10' - '5'); // 5
console.log('10' * '5'); // 50
console.log('10' / '5'); // 2

console.log('10' - 5); // 5
console.log(10 * '5'); // 50
```

Things are different when using ```+``` to add values:

```js
console.log(10 + 5); // 15
console.log('10' + 5); // 105
console.log(10 + '5'); // 105
console.log('10' + '5'); // 105
```

Because ```+``` is a string concatenation operator and converts integers to string in the examples above.

However it can be used to convert string into integer as well:

```js
console.log(+'10'); // 10 (int)
```

Weird but useful!

In addition, we know that every value in JavaScript has an inherent boolean value and is _truthy_ or _falsy_. <br />
```!``` operator negates and returns then inverse of that value. <br />
Therefore, we can in fact use double exclamation to convert a value to it's boolean type.

```js
console.log(!!true); // true
console.log(!!"non-empty string"); // true
console.log(!!null); // false
console.log(!!{}); // true
console.log(!![]); // true
```

This can be achieved by explicit type conversion too.

```js
console.log(Boolean(null)); // false
```

---

## Comparison and Strict equality

Best practice: Always try to use ```===``` and avoid greater or lesser comparison when variable can have ```null``` or ```undefined``` values.

Strict equality (and inequality) was added later to JavaScript in a response to troubles with normal ```==``` operator. This operator along with ```!=```, ```>```, ```>=```, ```<``` and ```<=``` perform a type cast before the operation and this can lead to unexpected behaviors.

```null``` **casts to 0** ```null``` is not equal to 0 in simple equality:

```js
null == 0; // false
```

but gets converted to 0 in lesser or greater comparison:

```js
null > 0;  // false
null >= 0; // true
```

undefined **casts to** ```NaN```

```js
undefined == 0; // false
```

but gets converted to 0 in lesser or greater comparison:

```js
undefined > 0;  // false
undefined < 0; // false
```

Another example would be:

```js
1 < 2 < 3 // true
3 < 2 < 1 // true
```

Because ```3 < 2``` is evaluated to ```false``` and ```Number(false) = 0```.

**Note** ES6 has a new function for comparison which acts a bit different:
```js
Object.is(Number.NaN, NaN) // true
Number.NaN === NaN; // false

Object.is(-0, +0) // false
-0 === +0; // true
```

---

## Loops and Iteration

Any part of ```for``` loop can be skipped.

```js
for (;;) {
  // infinite loop
}
```

### break
Forces an exit from the loop. The execution continues from after the loop.

```js
for (let i = 0; i < 10 i++) {
  // some logic...

  if (i === 5) break;

  // more logic...
}
```

### continue
This doesn't stop the whole loop, but skips the rest of logic in the block and continues from the next iteration.

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;

  // logic...
}
```

**Note** ```break <labelName>``` can be used to break in nested loops.