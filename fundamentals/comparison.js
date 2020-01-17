console.log(null == 0);

console.log(null > 0);
console.log(null >= 0);

console.log(undefined == 0);

console.log(undefined > 0);
console.log(undefined < 0);

console.log(1 < 2 < 3);
console.log(3 < 2 < 1);

console.log(Object.is("5", 5));

console.log(Object.is(Number.NaN, NaN));
console.log(Number.NaN === NaN);

console.log(Object.is(-0, +0));
console.log(-0 === +0);
