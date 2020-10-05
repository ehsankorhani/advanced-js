function Garage() {
    this.construct = function(builder, options) {
        builder.step1(options);
        builder.step2(options);
        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;
 
    this.step1 = function(options) {
        this.car = new Car();
    };
 
    this.step2 = function(options) {
        this.car.addParts(options);
    };
 
    this.get = function() {
        return this.car;
    };
}

function Car() {
    this.engine = null;
 
    this.addParts = function(options) {
        this.engine = options.engine || "v4";
    };
 
    this.start = function() {
        console.log(`The ${this.engine} engine is starting...`);
    };
}


var garage = new Garage();
var carBuilder = new CarBuilder();
var myX5 = garage.construct(carBuilder, { engine: "v6" });

myX5.start()