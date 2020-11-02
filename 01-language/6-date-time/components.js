let date = new Date();

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime());

console.log(date.getTimezoneOffset())

date.setHours(0);
console.log(date);

date.setHours(0, 0, 0, 0);
console.log(date);

// ----------------------------------

let dt = new Date(2016, 1, 28);
dt.setDate(dt.getDate() + 2);

console.log(dt); // 1 Mar 2016

// ----------------------------------

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

console.log(`${end - start} ms`);

// ----------------------------------

let startNow = Date.now();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let endNow = Date.now();

console.log(`${endNow - startNow} ms`);
