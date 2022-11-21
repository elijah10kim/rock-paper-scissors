function getComputerChoice(){
    let number = Math.floor((Math.random()*3)+1)
    let computerChoice = ""
    if (number == 1) {
        computerChoice = "rock";
    } else if (number == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let lowCasePlayer = playerSelection.toLowerCase();
    if (lowCasePlayer === computerSelection) {
        return "Tie Game. Better luck next time";
    } else if (lowCasePlayer === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose! Paper beats Rock";
        }
    } else if (lowCasePlayer === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Win! Paper beats Rock";
        }
    } else {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Rock beats Scissors";
        }
    }
}

function determineWin(resultMsg) {
    let result;
    if (resultMsg === "You Win! Rock beats Scissors" || resultMsg === "You Win! Paper beats Rock" || resultMsg === "You Win! Scissors beats Paper") {
        result = "W";
    } else if (resultMsg === "Tie Game. Better luck next time") {
        result = "T";
    } else {
        result = "L";
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    for (let i=0; i < 5; i++) {
        playerSelection = prompt("Please enter rock, paper or scissors.");
        computerSelection = getComputerChoice();
        roundMsg = playRound(playerSelection, computerSelection)
        roundResult = determineWin(playRound(playerSelection, computerSelection))
        if (roundResult === "W") {
            playerScore += 1;
        } else if (roundResult === "L") {
            computerScore += 1;
        } 
        console.log(roundMsg);
        console.log(`The score is - Player: ${playerScore} | Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log(`Congratulations. You won ${playerScore}-${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lost ${playerScore}-${computerScore}. Better luck next time.`);
    } else {
        console.log(`Tie Game. The score was ${playerScore}-${computerScore}`);
    }
}