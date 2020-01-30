# Advanced Functions

## Recursion

A function can call many other functions. Recursion is when a function calls itself.

```js
function fact(n) {
  if (n <= 1)
    return 1;
  else    
    return n * fact(n - 1);    
}

console.log(fact(10));
```

When a function makes a nested call, the following happens:

1. The current function is paused.
2. The execution context associated with it is remembered in a special data structure called execution context stack.
3. The nested call executes.
4. After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.

<br />

## Rest parameters

Rest parameter syntax allows a function to be called with any number of arguments.

```js
function sum(baseVal, ...args) {
  let sum = baseVal;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sum(0, 1, 4, 5));
```

**Note:** The rest parameters gather all the remaining arguments, so it should be placed at the end of parameters list. 

**Note:** Unline ```arguments```, ```rest``` parameter is an array.

```js
function foo(...rest) {
  console.log(Array.isArray(arguments)) // -> false
  console.log(Array.isArray(rest)) // -> true
}

foo();
```

<br />

## Spread

```Rest``` syntax was converting a *list of parameters* to an *Array*. ```Spread``` does the opposite and converts an *Array* to a *list of parameters*.

```js
function foo(param1, param2, param3) {
  console.log(param1) // -> 1
  console.log(param2) // -> 5
  console.log(param3) // -> 7
}

const arr = [1, 5, 7, 2];

foo(...arr)
```

In the above example it is like we are calling the ```foo``` function as:

```js
foo(1, 5, 7, 2)
```

Therefore, it is easy to imagine that we can combine multiple arrays and normal values.

```js
const arr1 = [1, 5, 7, 2];
const arr2 = [4, 15];

foo(10, ...arr1, ...arr2, 12);
```

The spread syntax is useful when you want to pass an array to a function that normally require a list of many arguments, i.e. ```Math.max()```.

The other very useful use case is to clone different objects into one.

```js
const obj1 = { color1: 'red', color2: 'green', color3: 'blue' };
const obj2 = { color1: 'cyan', color2: 'magenta' };

const colors = { ...obj1, ...obj2 };

console.log(colors); // -> { color1: 'cyan', color2: 'magenta', color3: 'blue' }
```

This is an alternative syntax for ```Object.assign()```.

<br />

## Destructuring

By *Destructuring* we take out individual items from an Object or Array and assigned them to specific variables.

```js
const arr = ['red', 'green', 'blue'];
var [ one, , three ] = arr;

console.log(three); // -> 'blue'
```

or with objects:

```js
const obj = { color1: 'red', color2: 'green', color3: 'blue' };
var { color1, color3 } = obj;

console.log(color3); // -> 'blue'
```

**Note:** *Destructuring* copies the values from the original object or array and does not alter them.

<br />

### Rest & Destructuring

The ```rest``` operator can be used in conjunction with ```destructuring``` to eliminate the need for assigning each and every value from source object/array.

```js
const arr2 = ['red', 'green', 'blue'];
var [one, ...rest] = arr;

console.log(one); // -> red
console.log(...rest); // -> green blue
```

<br />

---

### Examples:

[destructuring.js](https://gist.github.com/mikaelbr/9900818)