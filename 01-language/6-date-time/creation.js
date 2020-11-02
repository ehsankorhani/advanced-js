let now = new Date();
console.log(now);

let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970);

let dt = new Date("2020-11-03");
console.log(dt);

console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // 1 Jan 2011, 00:00:00
console.log(new Date(2011, 0, 1)); // same as above
