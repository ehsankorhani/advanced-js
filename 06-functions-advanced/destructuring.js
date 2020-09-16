const arr = ['red', 'green', 'blue'];
var [one, , three] = arr;

console.log(three);

// ------------------------------------

const obj = { color1: 'red', color2: 'green', color3: 'blue' };
var {color1, color3} = obj;

console.log(color3);

// ------------------------------------

console.log(arr);
console.log(obj);

// ------------------------------------

const arr2 = ['red', 'green', 'blue'];
var [one, ...rest] = arr;

console.log(one);
console.log(...rest);
