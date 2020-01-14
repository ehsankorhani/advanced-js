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

