const car = {
    type: 'vehicle'
}

function tesla(model) {
    this.model = model;
}

tesla.prototype = car;

const modelS = new tesla('modelS');
console.log(modelS.__proto__);


function Boat(make) {}
console.log(Boat.prototype);

console.log(Boat.prototype.constructor === Boat); // true

Boat.prototype.sail = () => {};
