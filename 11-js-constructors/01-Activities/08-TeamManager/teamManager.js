const inquirer = require("inquirer");

const Player = function(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

Player.prototype.goodGame = function () {
    if (Math.floor(Math.random() * 2) === 0) {
        this.offense++;
    } else {
        this.defense++;
    }
}

Player.prototype.badGame = function () {
    if (Math.floor(Math.random() * 2) === 0) {
        this.offense--;
    } else {
        this.defense--;
    }
}

Player.prototype.printStats = function () {
    console.log(`Name: ${this.name}\nPosition: ${this.position}\nOffense: ${this.offense}\nDefense: ${this.defense}`)
}

const playGame = function(starters, subs) {
    let score = 0;
    for (let i = 0; i <= 5; i++) {
        let offenseStat = (Math.floor(Math.random() * 20) + 1);
        let defenseStat = (Math.floor(Math.random() * 20) + 1);

        let teamOffense = 0;
        let teamDefense = 0;

        starters.forEach(player => {
            teamOffense += Number(player.offense);
            teamDefense += Number(player.defense);
        })

        console.log("teamOffense: ", teamOffense, "offenseStat: ", offenseStat);
        console.log("teamDefense: ", teamDefense, "defenseStat: ", defenseStat);

        if (offenseStat < teamOffense) score++;
        if (defenseStat > teamDefense) score--;
        
    }

    if (score > 0) {
        starters.forEach(player => player.goodGame())
    } else if (score < 0) {
        starters.forEach(player => player.badGame())
    }
    
    console.log(starters)

}

let counter = 0;
var starters = [];
var subs = [];

const createPlayer = function() {
    counter++;
    inquirer.prompt([
        {
            name: "name",
            message: `What is the player ${counter}'s name?`
          }, {
            name: "position",
            message: `What is player ${counter}'s position?`
          }, {
            name: "offense",
            message: `What is player ${counter}'s offense stat?`
          }, {
            name: "defense",
            message: `What is player ${counter}'s defense stat?`
          }
    ]).then(function(answers) {

        var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
        
        if (starters.length < 2) {
            console.log(`${newPlayer.name} added to the starters.`)
            starters.push(newPlayer);
            createPlayer();
        } else {
            console.log(`${newPlayer.name} added to the subs.`)
            subs.push(newPlayer);

            console.log("Starters: ", starters);
            console.log("Subs: ", subs);

            playGame(starters, subs);
        }
        //**************After team is created *************/

    } 
)};
      
createPlayer();

// cody.goodGame();

// cody.printStats