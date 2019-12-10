const CharacterCreate = function (name, profession, gender, age, strength, hp) {
    this.name = name,
    this.profession = profession,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hp = hp
}
    // this.printStats = function() {
    //     console.log(`Name: ${this.name}\nProfession: ${this.profession}\nGender: ${this.gender}\nAge: ${this.age}\nStrength: ${this.strength}\nHP: ${this.hp}`);
    // }
    // this.isAlive = function() {
    //     console.log(this.hp > 0 ? "Yes, alive!" : "No, dead.");
    // }
    // this.attack = function(attacked) {
    //     attacked.hp -+ this.strength;
    // }
    // this.levelUp = function(){
    //     this.age++;
    //     this.strength += 5;
    //     this.hp += 25;
    // }


CharacterCreate.prototype.printStats = function() {
    console.log(`Name: ${this.name}\nProfession: ${this.profession}\nGender: ${this.gender}\nAge: ${this.age}\nStrength: ${this.strength}\nHP: ${this.hp}`);
} 

CharacterCreate.prototype.isAlive = function() {
    this.isAlive = function() {
        console.log(this.hp > 0 ? "Yes, alive!" : "No, dead.");
    }
}

CharacterCreate.prototype.attack = function(attacked) {
    this.attack = function(attacked) {
        attacked.hp -+ this.strength;
    }
}

CharacterCreate.prototype.levelUp = function() {
    this.levelUp = function(){
        this.age++;
        this.strength += 5;
        this.hp += 25;
    }
}


const cody = new CharacterCreate('cody', 'king', 'male', 28, 10, 10);
const rubberducky = new CharacterCreate('ducky', 'duckduck', 'duckmale', 1000, 5, 15)

rubberducky.attack(cody);
rubberducky.attack(cody);
rubberducky.attack(cody);
rubberducky.attack(cody);

console.log(cody.hp);
cody.isAlive();

cody.levelUp();
cody.printStats();
console.log(cody.hp);