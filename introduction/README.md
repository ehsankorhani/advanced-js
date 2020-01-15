# Introduction

## Execution context

**Execution context** is a wrapper around running code to help managing it. It contains things beyond the actual code. The code can only run inside an execution context. <br />
When execution context is created, JavaScript will also allocate memory space for variables and functions inside that context.

**Global execution context** is a default context that is created when the code start its execution.

Every execution context provides:
1. Global object
2. ```this``` special variable

In browser, the global object is ```window``` and at global level ```this``` refers to ```window```.

```js
var name = 'Alfie';
console.log(name) // Alfie
window.console.log(name) // Alfie
console.log(window.name) // Alfie
```

In Node.js things are a bit different. Functions such as ```console.log()``` and ```setTimeout``` exist on ```global``` object, but not the variables.

```js
var name = 'Alfie';
console.log(name) // Alfie
global.console.log(name) // Alfie
console.log(global.name) // undefined
```

Because - unlike browsers - in Node.js variables are specific to modules and cannot be accessed anywhere else.

---

## Scope Chain

Every execution context (except the global) has a reference to it's outer environment.

```js
function greeting() { // outer environment is global context  
  console.log(`${salutation} ${name}`) // 'Dr. Jane'
}

function a() {
  var name = 'John';
  greeting()
}

function b() {
  var name = 'John';

  function greeting() {
    // outer environment is b
    // b has not defined 'salutation', so it will look in Global context

    console.log(`${salutation} ${name}`) // 'Dr. John'
  }

  greeting()
}

var salutation = 'Dr.'
var name = 'Jane';

a()
b()
```

---

## Block Scoping

ES6 has introduced ```let``` keyword. ```let``` allows JavaScript to use what is called *Block scoping*. <br />
Any variable defined with ```let``` inside a ```block``` is only accessible inside that block.

```js
'use strict'

if (true) {
  var a = 1;
  let b = 2;
}

a = 3
b = 4 // ReferenceError: b is not defined

console.log(a) // 3
console.log(b) // ReferenceError: b is not defined
```

**Note** that <u>is not defined</u> is not the same as <u>undefined</u>.