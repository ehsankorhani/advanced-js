
const foo = (...args) => {
  console.log(args);
}

foo(1, 2, 3);

// ----------------------------------------

const foo2 = (name, salutation) => `Hi ${salutation} ${name}`;

console.log(foo2('Alfie', 'Mr.'))

// ----------------------------------------

const fn = function() {
  console.log(this) // -> Object [global]
}

const arrow = () => {
  console.log(this) // -> {}
}

fn()
arrow()

let t = new fn();
let y = new arrow();
