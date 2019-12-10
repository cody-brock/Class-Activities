const DigitalPal = function() {
    this.hungry = false
    this.sleepy = false
    this.bored = true
    this.age = 0
}

DigitalPal.prototype.feed = function () {
    if (this.hungry) {
        console.log("That was yummy!");
        this.hungry = false;
        this.sleepy = true;
    } else {
        console.log("No thanks!  I'm full.")
    }
}

DigitalPal.prototype.sleep = function () {
    if (this.sleepy) {
        console.log("Zzzzzzzz");
        this.sleepy = false;
        this.bored = true;
        this.increaseAge();
    } else {
        console.log("No way!  I'm not tired.");
    }
}

DigitalPal.prototype.play = function() {
    if (this.bored) {
        console.log("Yay!  Let's play.");
        this.bored = false;
        this.hungry = true;
    } else {
        console.log("No thanks.  Maybe later.");
    }
}

DigitalPal.prototype.increaseAge = function() {
    this.age++;
    console.log(`Happy Birthday to me! I am ${this.age} old!`)
}

//DOG STUFF
const dog = new DigitalPal();

console.log(dog);

dog.outside = false;
dog.bark = function() {
    console.log("Woof! Woof!");
}

dog.goOutside = function() {
    if (!dog.outside) {
        console.log("Yay! I love the outdoors!")
        this.outside = true;
        dog.bark();
    } else {
        console.log("We're already outside though...")
    }
}

dog.goInside = function() {
    if (dog.outside) {
        console.log("Do we have to? Fine...")
        dog.outside = false;
    } else {
        console.log("I'm already inside...")
    }
}
//END DOG STUFF

//CAT STUFF
const cat = new DigitalPal();

cat.houseCondition = 100;

cat.meow = function() {
    console.log("Meow! Meow!");
}

cat.destroyFurniture = function() {
    cat.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
}

buyNewFurniture = function() {
    cat.houseCondition += 50;
    console.log("Are you sure about that?");
}


function agifier(animal) {
    while (animal.age < 10) {
        animal.play();
        animal.feed();
        animal.sleep();
    }
}

agifier(dog);