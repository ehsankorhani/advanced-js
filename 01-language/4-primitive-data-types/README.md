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
## BigInt

A bigint is created by appending n to the end of an integer literal or by calling the function BigInt:

```js
const bigint = 1234567890123456789012345678901234567890n;

const bigintFromString = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // 10n
```

All operations on bigints return bigints.

```js
7n / 2n; // 3n
```

We cannot mix BigInt and other types:

```js
1n + 2; // Error

1n + BigInt(2); // 3n

Number(1n) + 2; // 3 
```

The unary plus operator `+value` is not supported.


### Comparisons
Comparison is allowed between *numbers* and *bugint*:

```js
2n > 1; // true

1 == 1n; // true

1 === 1n; // false
```

### Boolean operations
BigInt acts like Numbers with truthy/falsy operations.

<br><br>

---
## Strings

Strings are immutable and can’t be changed.

```js
let str = 'Hi';

str[0] = 'h'; // error
```

### Backticks

Allow us to embed any expression into the string, by wrapping it in `${…}`:

```js
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
```

It also allows a string to span multiple lines.

<br>

### Special characters

| Character | Description |
| :-------- | :---------- |
| \n        | New line    |
| \r        | Carriage return. Windows text files use a combination of two characters \r\n to represent a line break. |
| \', \"    | Quotes      |
| \\        | Backslash   |
| \t        | Tab         |
| \b        | Backspace |
| \f        | Form Feed |
| \xXX      | Unicode character with hexadecimal unicode, e.g. '\x7A' |
| \uXXXX    | A unicode symbol with the hex code, e.g. \u00A9 |
| \u{X…XXXXXX} | A unicode symbol with the given UTF-32 encoding. e.g. emojis |
	
<br>

### properties and Methods

#### Length
```js
`NEW START`.length; // 9
```

<br>

#### Accessing characters

Use square brackets `[pos]` or call the method `str.charAt(pos)`:

```js
let str = `Hello`;

str[0]; // H
tr.charAt(0); // H

str[str.length - 1]; // o
```

When no character is found, [] returns undefined, and charAt returns an empty string.

<br>

#### Case

```js
'Interface'.toUpperCase(); // INTERFACE
'Interface'.toLowerCase(); // interface
```

<br><br>

#### Substring

We can look for substrings in multiple ways:

- `str.indexOf(substr, pos)`
- `str.lastIndexOf(substr, pos)`
- `str.includes(substr, pos) `
- `str.startsWith(searchString, pos)` 
- `str.endsWith(searchString, length)`
- `str.slice(start [, end])`
- `str.substring(start [, end])`
- `str.substr(start [, length])`

**-indexOf**: It looks for the substr in str and returns the position where the match was found or -1 if nothing can be found.

```js
let str = 'Widget with id';

str.indexOf('Widget'); // 0, 'Widget' is found at the beginning
str.indexOf('widget'); // -1, the search is case-sensitive
```

The optional second parameter allows us to search starting from the given position.

```js
let str = 'Widget with id';

str.indexOf('id', 2) // 12
```

We can run indexOf in a loop to find all the occurrences.

Note: we can use bitwise NOT to avoid getting *falsy* value when sub-string found at position 0. Not recommended but good to know:

```js
if (~str.indexOf(...)) // reads as “if found”.
```

<br>

**-lastIndexOf**: searches from the end of a string to its beginning.

```js
'canal'.lastIndexOf('a');     // returns 3
'canal'.lastIndexOf('a', 2);  // returns 1
'canal'.lastIndexOf('');      // returns 5
```

<br>

**-includes**: This more modern method returns `true`/`false` depending on whether `str` contains `substr` within.

```js
"Widget with id".includes("Widget") // true
"Hello".includes("Bye"); // false

"Widget".includes("id", 3); // false
```

<br>

**-startsWith**:

```js
"Widget".startsWith("Wid"); // true
```

<br>

**-endsWith**:

```js
"Widget".endsWith("get"); // true
```

<br>

**-slice**: Returns the part of the string from `start` to (but not including) `end`.

```js
let str = "stringify";
str.slice(2); // 'ringify'
str.slice(0, 5); // 'strin'
str.slice(0, 1); // 's'
str.slice(-4, -1); // 'gif'
```

<br>

**-substring**: Returns the part of the string between `start` and `end` (same as slice, but it allows start to be greater than end).

```js
let str = "stringify";

str.substring(6, 2); // "ring"
str.slice(6, 2); // ""
```

Negative arguments are (unlike slice) not supported, they are treated as 0.

<br>

**-substr**: Returns the part of the string from `start`, with the given `length`.

```js
let str = "stringify";

str.substr(2, 4); // 'ring'
str.substr(-4, 2); // 'gi'
```

`slice` is the most common one to use.

<br><br>

#### Comparisons

Strings are compared character-by-character in alphabetical order.

A lowercase letter is always greater than the uppercase:

```js
'a' > 'Z'; // true
```

The call `str.localeCompare(str2)` returns an integer indicating whether str is less, equal or greater than `str2` according to the language rules:

- Negative number if `str` is less than `str2`.
- Positive number if `str` is greater than `str2`.
- 0 if they are equivalent.

```js
'Österreich'.localeCompare('Zealand'); // -1
```

-**str.codePointAt(pos)**: code for the character at position.

```js
"z".codePointAt(0); // 122
"Z".codePointAt(0); // 90
```

-**String.fromCodePoint(code)**: character by its numeric code.

```js   
String.fromCodePoint(90); // Z
```

<br><br>

---
### References
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript Essentials: Types & Data Structures](https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b)