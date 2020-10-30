# Data Types

JS is dynamically typed and weakly typed.

Dynamically typed languages infer variable types at runtime. The compiler/interpreter will see the variable and its value and then decides what type it is and will enforce it afterwards.

In weakly types languages variables are not bound to a particular type and can coerce based on conditions:

```js
var x = 1 + '2' // '12'
```

On the other hand, the statically types languages enforce the type throughout the life of variables. They normally require the type to be defined at declaration time.

<br>

## Primitives and Objects

There are 7 types that are considered primitive in JavaScript:

| Type | Value | Check |
| -- | -- | -- |
| Undefined | a declared variable but hasn’t been given a value | `typeof instance === "undefined"` |
| Boolean | true or false | `typeof instance === "boolean"` |
| Number | integers, floats, etc | `typeof instance === "number"` |
| String | an array of characters i.e words | `typeof instance === "string"` |
| Symbol | a unique value that's not equal to any other value | `typeof instance === "symbol"` |
| BigInt  | numeric | `typeof instance === "bigint"` |
| Null | no value | `typeof instance === "object"` |

<br>

- `null` is special primitive that represents absence of any object value.
- `bigint` is a newer type that can represent integers in the arbitrary precision format

<br>

> All primitive values are immutable.

<br>

All other non-primitive types are Object. Object is capable of storing multiple values as properties.

The main ones are:
- Object
- Array
- Function (although `typeof instance === "function"`)

There are other objects, such as:
- Error
- RegExp
- Math
- Set

These constructors are also exist but only for internal usage and highly unrecommended:

- Boolean
- Symbol
- Number
- String

```js
Boolean('a') // true
```

<br>

### Primitive methods

Primitives can provide methods but they still remain lightweight by creating “object wrappers” when needed and destroyed afterwards.

```js
str.toUpperCase();
num.toFixed(2);
```

> There is no corresponding “wrapper objects” for `null` and `undefined` and they provide no methods. 

<br><br>

---
## Number

Regular numbers in JavaScript are stored in 64-bit “double precision floating point" format.

BigInt numbers are used when we need a value greater than `2^253` or less than `2^-253`.

### Declaration
```js
let billion = 1000000000;

let billion = 1e9;  // 1 and 9 zeroes
let x = 7.3e9;  // 7.3 billions (7,300,000,000)
```

The `e` multiplies the number by 1 with the given zeroes count.

Hexadecimal numbers are used to represent colors, encode characters, etc.

```js
let x = 0xff; // 255
let x = 0xFF; // 255 (case insensitive)
```

Binary and octal numbers can also be declared:

```js
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
```
```js
a == b; // true
```

<br>

### Methods

#### `toString(base)`
```js
let num = 255;

num.toString(); // '255'
num.toString(16); // ff
num.toString(2); // 11111111
```

We can call it directly on a number with two-dots:
```js
255..toString();
// or
(255).toString();
```

#### **Rounding**

There are several built-in functions for this purpose:

|      | `Math.floor` | `Math.ceil` | `Math.round` | `Math.trunc` |
| ---: | -----------: | ----------: | -----------: | -----------: |
| 5.2  | 5            | 6           | 5            | 5            |
| 5.7  | 5            | 6           | 6            | 5            |
| -5.2 | -6           | -5          | -5           | -5           |
| -5.7 | -6           | -5          | -6           | -5           |

We use them like this:
```js
Math.floor(5.2);
```

Also, `toFixed(n)` rounds the number to `n` digits after the point and returns a string representation:

```js
let num = 12.34;
num.toFixed(1); // "12.3"

let num = 12.36;
um.toFixed(1); // "12.4"

let num = 12.34;
num.toFixed(5); // "12.34000"
```
<br>

### Imprecise calculations

```js
let sum = 0.1 + 0.2; // 0.30000000000000004
```

because number is stored in memory in its binary form.

We can fixed this by using `toFixed(n)`:

```js
sum.toFixed(2); // 0.30
```

<br>

### `isFinite` and `isNaN`

`isNaN(value)` converts its argument to a number and then tests it for being `NaN`:

```js
isNaN(NaN); // true
isNaN("str"); // true
```

We cannot use the comparison:

```js
NaN === NaN; // false 
```

But:
```js
Object.is(NaN, NaN); // true
```

`isFinite(value)` converts its argument to a number and returns true if it’s a regular number:

```js
isFinite("15"); // true
isFinite("str"); // false
isFinite(Infinity); // false,
```

<br>

### Numeric conversion

Numeric conversion of `+` or `Number()` fails if value is not exactly a number:

```js
+"100px"; // NaN
```

But we can use `parseInt` and `parseFloat`:

```js
parseInt('100px'); // 100
parseFloat('12.5em'); // 12.5
parseInt('12.3'); // 12, only the integer part is returned
parseFloat('12.3.4'); // 12.3, the second point stops the reading

arseInt('a123'); // NaN, the first symbol stops the process
```

#### `Math.random()`
Returns a random number from 0 to 1 (not including 1)
```js
Math.random(); // 0.1234567894322
Math.random(); // 0.5435252343232
```

#### `Math.max(a, b, c...)` and `Math.min(a, b, c...)`
Returns the greatest/smallest from the arbitrary number of arguments.
```js
Math.max(3, 5, -10, 0, 1); // 5
Math.min(1, 2); // 1
```

#### `Math.pow(n, power)`
Returns `n` raised the given power:

```js
Math.pow(2, 10); // 2 in power 10 = 1024
```

<br><br>

---
### References
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript Essentials: Types & Data Structures](https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b)