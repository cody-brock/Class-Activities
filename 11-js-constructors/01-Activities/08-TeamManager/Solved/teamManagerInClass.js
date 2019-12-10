const inquirer = require('inquirer');
const Player = function(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function(){
        if (Math.floor(Math.random() * 2) === 1) {
            this.offense++;
        } else {
            this.defense++;
        }
    }
    this.badGame = function() {
        if (Math.floor(Math.random() * 2) === 1) {
            this.offense--;
        } else {
            this.defense--;
        }
    }
    this.printStats = function() {
        console.log(`Name: ${this.name}\nPosition: ${this.position}\nOffense: ${this.offense}\nDefense: ${this.defense}`);
    }
}

const starters = [];
const subs = [];
const team = [];
 
const createPlayer = () => {
if (starters.length + subs.length < 3) {
inquirer.prompt([{
    "message": "Player's Name",
    "name": "name"
}, {
    "message": "Player's Position",
    "name": "position"
}, {
    "message": "Player's Offense",
    "name": "offense"
}, {
    "message": "Player's Defense",
    "name": "defense"
}]).then(function(answers) {
    const player = new Player(answers.name, answers.position, answers.offense, answers.defense);
    if (starters.length < 2) {
        starters.push(player);
        team.push(player);
        console.log(`${player.name} added to the starters`);
    } else {
        subs.push(player);
        team.push(player);
        console.log(`${player.name} added to the subs`);
    }
    createPlayer();
})
} else {
    console.log('The team is created.  Let\'s play some games!');
    //the teams are created.  Start the game
    round();
}

}

createPlayer();

let score = 0;
const playGame = () => {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;

    let teamOffense = 0;
    let teamDefense = 0;
    
    starters.forEach(player => {
        teamOffense += Number(player.offense);
        teamDefense += Number(player.defense);
    })

    console.log('firstNumber', firstNumber, 'teamOffense', teamOffense);
    console.log('secondNumber', secondNumber, 'teamDefense', teamDefense);

    if (firstNumber < teamOffense) {
        score++;
    }

    if (secondNumber > teamDefense) {
        score--
    }

    if (score > 0) {
        starters.forEach(player => player.goodGame());
    } else if (score < 0) {
        starters.forEach(player => player.badGame());
    }
    starters.forEach(player => player.printStats());

}

const round = () => {

    for (let index = 0; index <= 5; index++) {
        playGame();

    }
}
