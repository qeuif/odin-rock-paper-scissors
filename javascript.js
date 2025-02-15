// console.log("hello world!");

function getComputerChoice() {
    let choice = Math.random();
    // console.log(choice);
    if (choice < 0.33) {
        return "rock";
    } else if (choice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors: ");
    choice = choice.toLowerCase();
    // console.log(choice);
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        alert("Invalid Input\nPlease refresh page.");
    }
}

getHumanChoice()