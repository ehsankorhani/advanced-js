# Functions

Objects and Functions are closely related. Functions are first-class citizens in JavaScript. <br />
Functions can be:
* Stored in variables
* Passed as an argument
* Returned from other functions

## Declaration vs Expression

A *declaration* is a statement in which a value is assigned to a variable. <br />
```js
let name = 'Alfie'
```
An *expression* is any valid set that evaluates to a single value. <br />
```js
'Hi' + name
```

### Function Declaration vs Function Expression

Function declaration *hoists* to the top of code.

```js
function add(num1, num2) {
	return num1 + num2;
}
```

Function expression does not *hoists*.
```js
var add = function (num1, num2) {
	return num1 + num2;
}
```

## Local variable and Outer variable

A variable declared inside a function is only visible inside that function. However, functions can access variables defined in their outer context.

```js
let app = function () {
	let name = 'Alfie';
	
	let greeting = function () {
		let time = 'morning';

		console.log(`Good ${time} ${name}`); // -> 'name' is accessible
  }
  
  greeting(); // -> 'Good morning Alfie'
	
	console.log(time); // ReferenceError: time is not defined
}

app();
```

A same-named variable which is declared inside the function *shadows* the outer one.

```js
let name = 'Alfie';

let greeting = function () {
	let name = 'John';

	console.log(`Hi ${name}`); // -> 'Hi John'
}

console.log(`Hi ${name}`); // -> 'Hi Alfie'

greeting();
```

An outer variable can even get modified inside a function.


## Parameters

Data can be passed to functions using parameters. JavaScript allows functions to be called with any number arguments.

### By Value
When passing a parameter which has a *primitive data type*, the function always gets a copy of that value. Any change to that parameter inside the function will not affect the outer variable.

```js
let greeting = function (name) {
  name = 'Jane'
	
	console.log(`Hi ${name}`); // -> 'Hi Jane'
}

let name = 'Alfie';

greeting(name);

console.log(name); // -> 'Alfie'
```

### By Reference
However, objects are being passed by reference and the function can alter the outer object.

```js
let greeting = function (person) {
  person.name = 'Jane'
	
	console.log(`Hi ${person.name}`); // -> 'Hi Jane'
}

let person = {
  name: 'Alfie',
}

greeting(person);

console.log(person.name); // -> 'Jane'
```

## Default values

If a parameter is not provided, then its value becomes undefined. No error will be raised here unlike most other programming languages.

```js
let greeting = function (name, salutation) {	
	console.log(`Hi ${salutation}`);
}

greeting('Alfie');
```

It is also possible to assign a specific default value for a parameter in case it was not passed in.

```js
let greeting = function (name, salutation = 'Dr.') {	
	console.log(`Hi ${salutation}`);
}

greeting('Alfie'); // -> Hi Dr.
greeting('Alfie', 'Mr.'); // -> Hi Mr.
```

## Arguments object

Is a special construct that represents a list of arguments. It's a way to discover any argument not specified in the parameters list.


```js
let greeting = function (name) {	
	console.log(arguments);
	console.log(`Hi ${arguments[1]} ${name}`); // -> Hi Mr. Alfie
}

greeting('Alfie', 'Mr.');
```

Argument object is an array-like object, but it's not array and does not have access to all methods available on Array objects.

It can be useful to convert it to an Array:

JavaScript ES5:
```js
let sortArgsES5 = function () {
  let args = Array.prototype.slice.call(arguments);
	return args.sort();
}

console.log(sortArgsES5(1, 9, 5)) // -> [ 1, 5, 9 ]
```

Or in ES6:
```js
let sortArgsES6 = function () {
  let args = Array.from(arguments);
	return args.sort();
}

console.log(sortArgsES6(1, 9, 5)) // -> [ 1, 5, 9 ]
```

## Returning a value

The keyword ```return``` in a function stops the execution of rest of the code inside a function (if exist) and returns a value to the caller of function.

If not value specified after the ```return```, then it will return an ```undefined```.

```js
const foo = function () {
  return;
}

console.log(foo()); // -> undefined
```

The value of a function without a return is ```undefined``` as well.

**Note:** JavaScript will always place a ```;``` at the end of the line containing ```return``` directive. Therefore, never make a return statement a multiline statement, as it will return ```undefined```.

```js
const foo = function () {
	return
		'hello world!';
}

console.log(foo()); // -> undefined
```

Adding parentheses to a return statement will do the trick, in case multiline return is desired.

```js
const foo = function () {
	return (
		'hello world!'
	);
}

console.log(foo()); // -> 'hello world!'
```

<br />

## Arrow functions

New ES6 Arrow functions lack *argument object*. However, the ```rest parameter``` can be used to overcome the issue.

```js
const foo = (...args) => {
  console.log(args); // -> [ 1, 2, 3 ]
}

foo(1, 2, 3);
```

Arrow function has a shorthand syntax for simple scenarios:

```js
const foo = (name, salutation) => `Hi ${salutation} ${name}`;

foo('Alfie', 'Mr.'); // -> Hi Mr. Alfie
```

### This

Arrow functions have no ```this```. They will take their ```this``` from outer context.

```js
const fn = function() {
  console.log(this) // -> Object [global]
}

const arrow = () => {
  console.log(this) // -> {}
}

fn()
arrow()
```

**Note:** Not having ```this``` means that *arrow functions* can't be called with ```new```.

```js
const arrow = () => {
}

const fn = arrow(); // TypeError: arrow is not a constructor
```

> When a function is invoked with the new keyword, then the function is known as a constructor function and returns a new instance.

<br />

## Function object

Because functions are *object* we access or call their properties and methods.
<br />
Functions have properties such as:
- name
- length
- constructor
- prototype (will be discussed in separate module)

And methods including:
- apply()
- call()
- bind()

### Build-in properties

### ```name```
Returns the read-only *contextual name* of a function - if it has one.

```js
const greeting = function(name) {
  return `Hi ${name}`;
}

console.log(greeting.name); // greeting
```

### ```length```
Returns number of function named parameters.

```js
const greeting = function(name) {
  return `Hi ${name}`;
}

console.log(greeting.length); // 1
```

### ```constructor```
Returns the name of the function constructor.

```js
const greeting = function(name) {
  return `Hi ${name}`;
}

const newGreeting = new greeting('Alfie')

console.log(greeting.constructor); // [Function: Function]
console.log(newGreeting.constructor); // [Function: greeting]
```

### Build-in methods
These methods are used to control the invocation of the function.

### ```call```
**call** and **apply** can be used to invoke a function on an object. <br />
First parameter of ```call()``` sets the <u>this</u> value which is the object upon which the function is invoked.

Any parameter after will be associated to the function arguments.

```js
const person1 = {
  name: 'John'
}

const person2 = {
  name: 'Jane'
}

const greeting = function (city, country) {
  console.log(`Hi ${this.name}. Welcome to ${city} in ${country}.`)
}

greeting.call(person1, 'Sydney', 'Australia') // Hi John. Welcome to Sydney in Australia.
greeting.call(person2, 'Tokyo', 'Japan') // Hi Jane. Welcome to Tokyo in Japan.
```

### ```apply```
Is similar to ```call()``` except that is receives two parameters and second parameter is an array of function arguments.

```js
greeting.apply(person1, ['Sydney', 'Australia']) // Hi John. Welcome to Sydney in Australia.
greeting.apply(person2, ['Tokyo', 'Japan']) // Hi Jane. Welcome to Tokyo in Japan.
```

### ```bind```
Adds a context to a function.


<!-- --------------------------- -->

<br /> 

---  

## IIFE (Immediately Invokable Function Expression)

## Pure Functions
