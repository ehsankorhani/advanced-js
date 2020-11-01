class Car {
    static staticMethod() {
        console.log(this === Car)
    }
}

Car.staticMethod();

// var car = new Car();
// car.staticMethod();

// class Car { }
// Car.staticMethod = function() {
//     console.log(this === Car)
// };
// Car.staticMethod();


class NumberUtil {
    static addLeadingZero(num) {
        return ('0' + num).slice(-2)
    }
}
console.log(NumberUtil.addLeadingZero(7));

// class Car {
//     static type = 'vehicle';
// }
// // or
// Car.type = 'vehicle';

class Tesla extends Car {
    autoPark() {
        console.log(`${this.model} parks automatically.`);
    }
}

Tesla.staticMethod();