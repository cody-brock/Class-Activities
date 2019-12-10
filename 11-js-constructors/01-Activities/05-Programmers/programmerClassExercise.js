

//ES5 version******************************
const Programmer = function(name, job, age, language) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.language = language;
}

Programmer.prototype.printInfo = function() {
    console.log(`Name: ${this.name}\nJob: ${this.job}\nAge: ${this.age}\nFavorite Programming Language: ${this.language}`);
}

var cody = new Programmer("Cody", "Travel", 28, "Javascript");
cody.printInfo();
// *********************************************


//ES6 version ******************************
class Coder {
    constructor(name, job, age, language) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.language = language;
    }
}

Coder.prototype.printInfo = function() {
    console.log(`Name: ${this.name}\nJob: ${this.job}\nAge: ${this.age}\nFavorite Programming Language: ${this.language}`);
}

var cody = new Coder("Cody", "Travel", 28, "Javascript");
cody.printInfo();
// *********************************************