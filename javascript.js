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
        alert("Invalid Input");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i+1}`);
        let res = playRound(humanSelection, computerSelection);
        if (res === null) {
            continue;
        }
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You won overall! (${humanScore}-${computerScore})`);
    } else if (humanScore < computerScore) {
        console.log(`Computer won overall! (${computerScore}-${humanScore})`);
    } else {
        console.log(`It/'s a tie overall! (${humanScore}-${computerScore})`);
    }

    function playRound(humanChoice, computerChoice) {
        // console.log(humanChoice);
        // console.log(computerChoice);
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "rock":
                    console.log("It\'s a tie! Both played Rock");
                    break;
                case "paper":
                    console.log("You lose! Paper beats Rock");
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissors");
                    humanScore += 1;
                    break;
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "paper":
                    console.log("It\'s a tie! Both played Paper");
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats Paper");
                    computerScore += 1;
                    break;
                case "rock":
                    console.log("You win! Paper beats Rock");
                    humanScore += 1;
                    break;
            }
        } else if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "scissors":
                    console.log("It\'s a tie! Both played Scissors");
                    break;
                case "rock":
                    console.log("You lose! Rock beats Scissors");
                    computerScore += 1;
                    break;
                case "paper":
                    console.log("You win! Scissors beats Paper");
                    humanScore += 1;
                    break;
            }
        } else { // Invalid Input
            console.log("Invalid Input");
            return null;
        }
    }
}

playGame();