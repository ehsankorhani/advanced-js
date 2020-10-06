async function foo() {
  return 1;
}

// async function foo() {
//   return Promise.resolve(1);
// }

//foo().then(result => { console.log(result) })

async function bar() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; 
  console.log(result); // "done!"
}

bar();

console.log(`other logics...`);

//const slow = await fetch('https://www.example.com/car.json')

// ---------------------------------------------------------

class Thenable {
  constructor(val) {
    this.val = val;
  }

  then(resolve, reject) {
    setTimeout(() => resolve(this.val * 2), 1000);
  }
};

async function baz() {
  let result = await new Thenable(1);
  console.log(result);
}

baz();

// ---------------------------------------------------------

async function qux() {

  try {
    //const response = await fetch('https://www.example.com/car');
  } catch(err) {
    console.log(err);
  }
}

qux();

async function qux() {
  const response = await fetch('https://www.example.com/car');
}

qux().catch(result => console.log(result));