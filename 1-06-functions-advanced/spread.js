function foo(param1, param2, param3) {
  console.log(param1)
  console.log(param2)
  console.log(param3)
}

const arr = [1, 5, 7, 2];

foo(...arr)

// ------------------------------------

const obj1 = { color1: 'red', color2: 'green', color3: 'blue' };
const obj2 = { color1: 'cyan', color2: 'magenta' };

const colors = { ...obj1, ...obj2 };

console.log(colors)