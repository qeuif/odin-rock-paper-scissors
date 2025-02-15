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