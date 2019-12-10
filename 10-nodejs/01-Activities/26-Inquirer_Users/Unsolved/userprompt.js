// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require('inquirer');

inquirer
    .prompt([
        //username
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        //password
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        //favorite color
        {
            type: "list",
            message: "What is your favorite color?",
            choices: ["Red", "Blue", "Green"],
            name: "color"
        },
        //favorite pizza toppings
        {
            type: "checkbox",
            message: "What are your favorite pizza toppings?",
            choices: ["cheese", "pepperoni", "anchovies"],
            name: "pizza"
        },
        //display data
        {
            type: "confirm",
            message: "Are you ready to see your data?",
            name: "confirm",
            default: true
        }
    ]).then(function(inquirerResponse) {
        if (inquirerResponse.confirm) {
            console.log(inquirerResponse.pizza)
            console.log(`Your name is ${inquirerResponse.username}, \n Your favorite color is ${inquirerResponse.color}, \n And your favorite pizza toppings are ${inquirerResponse.pizza}`)
        } else {
            console.log("Try again");
        }

    });