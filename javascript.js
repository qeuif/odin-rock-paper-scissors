// console.log("hello world!");

function getComputerChoice() {
    let choice = Math.random();

    if (choice < 0.33) {
        return "rock";
    } else if (choice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let roundNumber = 1;
    let maxRound = 5;
    let printResult = document.querySelector(".result");
    let printFinalScore = document.querySelector(".finalScore");
    let printHumanScore = document.querySelector(".humanScore");
    let printComputerScore = document.querySelector(".computerScore");
    let choiceButtons = document.querySelectorAll("#choices button");
    let printComputerChoice = document.querySelector(".computerChoice");

    let printRoundNumber = document.querySelector(".roundNumber");
    printRoundNumber.textContent = `Round ${roundNumber}`;

    let chosen = document.querySelector("#choices");
    chosen.addEventListener("click", (event) => {
        let target = event.target;
        console.log(target.disabled);
        if (roundNumber <= maxRound && !target.disabled) {
            switch (target.id) {
                case "rock":
                    humanChoice = "rock";
                    break;
                case "paper":
                    humanChoice = "paper"
                    break;
                case "scissors":
                    humanChoice = "scissors"
                    break;
            }
        }
        playRound(humanChoice, getComputerChoice());
        console.log(`${humanScore}, ${computerScore}`);
        updateScores();

        if (roundNumber >= maxRound) {
            disableChoiceButtons();
            displayFinalScore();
            displayPlayAgainButton();
        } else {
            roundNumber += 1;
            printRoundNumber.textContent = `Round ${roundNumber}`;   
        }
    });

    function playRound(humanChoice, computerChoice) {
        printComputerChoice.textContent = computerChoice;
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "rock":
                    printResult.textContent = "It\'s a tie! Both played Rock";
                    break;
                case "paper":
                    printResult.textContent = "You lose! Paper beats Rock";
                    computerScore += 1;
                    break;
                case "scissors":
                    printResult.textContent = "You win! Rock beats Scissors";
                    humanScore += 1;
                    break;
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "paper":
                    printResult.textContent = "It\'s a tie! Both played Paper";
                    break;
                case "scissors":
                    printResult.textContent = "You lose! Scissors beats Paper";
                    computerScore += 1;
                    break;
                case "rock":
                    printResult.textContent = "You win! Paper beats Rock";
                    humanScore += 1;
                    break;
            }
        } else if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "scissors":
                    printResult.textContent = "It\'s a tie! Both played Scissors";
                    break;
                case "rock":
                    printResult.textContent = "You lose! Rock beats Scissors"
                    computerScore += 1;
                    break;
                case "paper":
                    printResult.textContent = "You win! Scissors beats Paper";
                    humanScore += 1;
                    break;
            }
        }
    }

    function updateScores() {
        printHumanScore.textContent = humanScore;
        printComputerScore.textContent = computerScore;
    }

    function displayFinalScore() {
        if (humanScore > computerScore) {
            console.log(`You won overall! (${humanScore}-${computerScore})`);
            printFinalScore.textContent = "You won overall!";
        } else if (humanScore < computerScore) {
            console.log(`Computer won overall! (${computerScore}-${humanScore})`);
            printFinalScore.textContent = "Computer won overall!";
        } else {
            console.log(`It/'s a tie overall! (${humanScore}-${computerScore})`);
            printFinalScore.textContent = "It\'s a tie overall!";
        }
    }

    function displayPlayAgainButton() {
        const body = document.querySelector("body");
        const resetButton = document.createElement("button");
        resetButton.textContent = "Play again";
        body.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            resetButton.remove();
            enableChoiceButtons();
            resetGame();
        });
    }

    function disableChoiceButtons() {
        for (let j=0; j<choiceButtons.length; j++) {
            choiceButtons[j].disabled = true;
        }
    }

    function enableChoiceButtons() {
        for (let k=0; k<choiceButtons.length; k++) {
            choiceButtons[k].disabled = false;
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        roundNumber = 1;

        printRoundNumber.textContent = `Round ${roundNumber}`;
        printResult.textContent = "";
        printFinalScore.textContent = "";
        printHumanScore.textContent = humanScore;
        printComputerScore.textContent = computerScore;
        printComputerChoice.textContent = "Computer Choice";
    }
}

playGame();