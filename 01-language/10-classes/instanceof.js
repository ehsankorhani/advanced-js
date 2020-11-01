class Car {
 //...
}

class Tesla extends Car {
 //..
}

const car = new Car();
console.log(car instanceof Car);

const myTesla = new Tesla();
console.log(myTesla instanceof Car);

console.log(myTesla instanceof Object);

console.log(myTesla.__proto__.__proto__ === Car.prototype)