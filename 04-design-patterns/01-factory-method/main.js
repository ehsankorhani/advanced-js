function CarFactory() { }

CarFactory.prototype.createCar = function (options) {

  var car;

  switch (options.type) {
    case "Sedan":
      car = new Sedan(options);
      break;
    case "Pickup":
      car = new Pickup(options);
      break;
    case "SUV":
      car = new SUV(options);
      break;
    case "Coupe":
      car = new Coupe(options);
      break;
    default:
      throw "Error! Unknown vehicle."
  }

  car.start = function () {
    console.log(`The ${car.engine} engine is starting...`);
  }

  return car;
}

var Sedan = function (options) {
  this.doors = 4;
  this.engine = options.engine || "v4";
};

var Pickup = function (options) {
  this.doors = 2;
  this.engine = options.engine || "v8";
};

var SUV = function (options) {
  this.doors = 5;
  this.engine = options.engine || "v6";
};

var Coupe = function (options) {
  this.doors = 2;
  this.engine = options.engine || "v4";
};


var carFactory = new CarFactory();

var myX5 = carFactory.createCar({ type: "SUV", engine: "v8" });
var myMiata = carFactory.createCar({ type: "Coupe" });

myX5.start();
myMiata.start();