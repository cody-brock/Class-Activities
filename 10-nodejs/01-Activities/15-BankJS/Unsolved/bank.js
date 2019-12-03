const fs = require('fs');
const chalk = require('chalk');

const command = process.argv[2];
const value = process.argv[3];

//total
function total() {
    fs.readFile('bank.txt', 'utf8', function(err, data) {
        if (err) return console.log(err);

        let preTotal = data.split(', ');
        let totalAmount = 0;
        preTotal.forEach(number => {
            totalAmount += parseFloat(number);
        })

        return console.log(chalk.green(`Your total is: $${totalAmount.toFixed(2)}`));
    })
}

//deposit
function deposit(val) {
    fs.appendFile('bank.txt', `, ${val}`, function(err) {
        if (err) return console.log(err);

        console.log(chalk.green.inverse(`You have deposited: $${val}`))
    })
}

//withdrawal
function withdraw(val) {
    fs.appendFile('bank.txt', `, -${val}`, function(err) {
        if (err) return console.log(err);

        console.log(chalk.red.inverse(`You have withdrawn: $${val}`));
    })
}

//lotto
function lotto() {
    fs.appendFile('bank.txt', `, -1`, function(err) {
        if (err) return console.log(err);
    })

    randomNum = Math.floor(Math.random() * 4) + 1

    if (randomNum === 1) {
        fs.appendFile('bank.txt', `, 10`, function(err) {
            if (err) return console.log(err);
    
            console.log(chalk.green.inverse(`YOU WON $10!!!`))
        })
    } else {
        console.log(chalk.red('Sorry, you lost - try again!'));
    }

}

//switch
switch (command) {
    case 'total':
        total();
        break;
    case 'deposit':
        deposit(value);
        break;
    case 'withdraw':
        withdraw(value);
        break;
    case 'lotto':
        lotto();
        break;
    default:
        total();
}