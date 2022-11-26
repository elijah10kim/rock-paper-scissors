const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
});

const results = document.querySelector('#results');
const pScore = document.querySelector('#player');
const cScore = document.querySelector('#computer');
let playerScore = 0;
let computerScore = 0;
pScore.textContent = playerScore;
cScore.textContent = computerScore;


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
    if (playerSelection === computerSelection) {
        results.textContent = "Tie Game. Better luck next time";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            results.textContent = "You Win! Rock beats Scissors";
            playerScore += 1;
            pScore.textContent = playerScore;
        } else {
            results.textContent = "You Lose! Paper beats Rock";
            computerScore += 1;
            cScore.textContent = computerScore;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            results.textContent = "You Lose! Scissors beats Paper";
            computerScore += 1;
            cScore.textContent = computerScore;
        } else {
            results.textContent = "You Win! Paper beats Rock";
            playerScore += 1;
            pScore.textContent = playerScore;
        }
    } else {
        if (computerSelection === "paper") {
            results.textContent = "You Win! Scissors beats Paper";
            playerScore += 1;
            pScore.textContent = playerScore;
        } else {
            results.textContent = "You Lose! Rock beats Scissors";
            computerScore += 1;
            cScore.textContent = computerScore;
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


/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let validInput;
    //for (let i=0; i < 5; i++) {
        validInput = false;
        while (!validInput) {
            playerSelection = prompt("Please enter rock, paper or scissors.");
            if (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors') {
                validInput = true;
            }
        }
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
    //}
    if (playerScore > computerScore) {
        console.log(`Congratulations. You won ${playerScore}-${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lost ${playerScore}-${computerScore}. Better luck next time.`);
    } else {
        console.log(`Tie Game. The score was ${playerScore}-${computerScore}`);
    }
}
*/