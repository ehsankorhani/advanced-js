class Car {
    _speed = 0;

    constructor(model) {
        this.model = model;
    }

    set speed(value) {
        if (value < 0) throw new Error("Negative speed");
        this._speed = value;
    }

    get speed() {
        return this._speed;
    }
}

const car = new Car('X5');
car.speed = 80;
console.log(car._speed);
