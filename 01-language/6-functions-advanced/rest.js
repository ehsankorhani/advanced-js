function sum(baseVal, ...args) {
  let sum = baseVal;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sum(0, 1, 4, 5));

// -----------------------------------------

function foo(...rest) {
  console.log(Array.isArray(arguments))
  console.log(Array.isArray(rest))
}

foo();