class Car {
    constructor(model) {
        this.speed = 0;
        this.model = model;
    }

    accelerate(speed) {
        this.speed = speed;
        console.log(`${this.model} drives with ${this.speed} KPH.`);
    }
}

class Tesla extends Car {
    constructor(model, range) {
        super(model);
        this.range = range;
    }

    autoPark() {
        console.log(`${this.model} parks automatically.`);
    }

    accelerate(speed) {
        super.accelerate(speed);
        console.log(`Tesla ${this.model} is going faster.`);
    }
}

const myTesla = new Tesla("Model S");
myTesla.accelerate(180);
myTesla.autoPark();

console.log(myTesla instanceof Car)