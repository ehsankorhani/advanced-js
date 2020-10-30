const car = {
    type: 'vehicle'
}

const tesla = Object.create(car);
console.log(tesla.type);

console.log(Object.getPrototypeOf(tesla) === car); // true

Object.setPrototypeOf(tesla, {}); // change the prototype of tesla to {}
