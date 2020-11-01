# Non-primitive Data Types

Objects such as functions and arrays are referred to as non-primitive values or Object references.

Non-primitive values are mutable and their value can be changed after it gets created.

```js
var arr = ['one', 'two', 'three'];
arr[1] = 'TWO';
```

Objects are not compared by value:

```js
var obj1 = { 'make': 'ford' };
var obj2 = { 'make': 'ford' };
obj1 === obj2;  // false
```

They are equal if they refer to the same underlying object (reference):

```js
var obj1 = { 'make': 'ford' };
var obj2 = obj1;
obj1 === obj2;  // true
```
<br>

## Arrays

Two syntaxes are available for creating an empty array:

```js
let arr = new Array();
let arr = []; // preferred
```
```js
let cars = ["Ford", "BMW", "Porsche"];
cars[1]; // BMW
cars[2] = 'Honda';
```

Array can store elements of any type:

```js
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

arr[3](); // hello
```







<br><br>

---
### References
- [JavaScript: Primitive Values & Object References](https://medium.com/@junshengpierre/javascript-primitive-values-object-references-361cfc1cbfb0)