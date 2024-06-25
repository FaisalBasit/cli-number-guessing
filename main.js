#! /usr/bin/env node
import inquirer from "inquirer";
let playagain = true;
while (playagain) {
    const randomNumber = Math.floor(Math.random() * 10 + 1); //range 1-10
    let repeat = true;
    while (repeat) {
        console.log("");
        const answers = await inquirer.prompt([
            { name: "UserGuess", type: "number", message: "Please guess a number" },
        ]);
        if (answers.UserGuess === randomNumber) {
            console.log("Your answer is correct");
            repeat = false;
        }
        else if (answers.UserGuess > randomNumber) {
            console.log("Guess a smaller number");
        }
        else {
            console.log("Guess a larger number");
        }
    }
    console.log("");
    const again = await inquirer.prompt([
        { name: "pa", type: "confirm", message: "Do you want to play again" },
    ]);
    playagain = again.pa;
}
