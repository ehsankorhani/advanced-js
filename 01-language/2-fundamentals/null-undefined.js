var foo;
var bar = undefined;
var baz = null;

console.log(foo) // = undefined
console.log(bar) // = undefined
console.log(baz) // = null

var nullType = typeof null;
var undefinedType = typeof undefined;

console.log(nullType) // "object"
console.log(undefinedType) // "undefined"