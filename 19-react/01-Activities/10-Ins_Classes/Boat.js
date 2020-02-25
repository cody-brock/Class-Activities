const Vehicle = require('./Vehicle');

class Boat extends Vehicle {
    constructor(type, topspeed) {
        super(topspeed)
    };

    sink() {
        this.speed = 0;
        console.log()
    }
}