const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', gameScreen);

const startScreen = document.querySelector('.start-screen');
const gameContainer = document.querySelector('.game-container');
const gameOverScreen = document.querySelector('.game-active');
const buttonContainer = document.querySelector('.button-container');

const buttons = document.querySelectorAll('.game-btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, getComputerChoice()));
});

const playAgainButton = document.querySelector('#play-again-btn');
playAgainButton.addEventListener('click', restartGame);

const results = document.querySelector('#results');
const pScore = document.querySelector('#player');
const cScore = document.querySelector('#computer');
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
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
    checkWin(playerScore, computerScore);
}

function gameScreen() {
    startScreen.classList.toggle('start-screen');
    startScreen.classList.toggle('start-visible');
    gameContainer.classList.toggle('game-container');
    gameContainer.classList.toggle('game-start');
}


function checkWin(playerScore, computerScore) {
    if (playerScore == 5) {
        results.textContent = `Congratulations! You won ${playerScore}-${computerScore}`;
        gameOver = true;
    }
    if (computerScore == 5) {
        results.textContent = `Game Over. You lost ${playerScore}-${computerScore}`;
        gameOver = true;
    }
    if (gameOver) {
        buttonContainer.classList.toggle('button-container');
        buttonContainer.classList.toggle('buttons-inactive');
        gameOverScreen.classList.toggle('game-active');
        gameOverScreen.classList.toggle('game-over');
    }
}

function restartGame() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    buttonContainer.classList.toggle('button-container');
    buttonContainer.classList.toggle('buttons-inactive');
    gameOverScreen.classList.toggle('game-active');
    gameOverScreen.classList.toggle('game-over');
    results.textContent = "First to 5. Good luck!";
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

