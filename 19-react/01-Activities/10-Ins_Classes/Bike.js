const Vehicle = require("./Vehicle");

class Bike extends Vehicle {
    constructor(type, topspeed) {
        super(topspeed);
        this.type = type;
    }

    peddle() {
        this.accelerate(5);
        console.log(`my ${this.type} bike is going faster`); 
        this.logSpeed();
    }

}

const Trek = new Bike("Mountain", 20);
Trek.peddle();