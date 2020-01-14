console.log('10' - '5'); // 5 (int)
console.log('10' * '5'); // 50 (int)
console.log('10' / '5'); // 2 (int)

console.log('10' - 5); // 5 (int)
console.log(10 * '5'); // 50 (int)

console.log(10 + 5); // 15 (int)
console.log('10' + 5); // 105 (str)
console.log(10 + '5'); // 105 (str)
console.log('10' + '5'); // 105 (str)

console.log(+'10'); // 10 (int)

console.log(!!true); // true
console.log(!!"non-empty string"); // true
console.log(!!null); // false
console.log(!!{}); // true
console.log(!![]); // true

console.log(Boolean(null)); // false