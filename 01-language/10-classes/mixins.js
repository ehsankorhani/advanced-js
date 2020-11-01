class Car {
    constructor(model) {
        this.model = model;
    }
}

const smartMixin = {

    autoPark() {
        console.log(`${this.model} parks automatically.`);
    }

}

Object.assign(Car.prototype, smartMixin);

const car = new Car('X5');
car.autoPark();