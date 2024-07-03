function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let x = getRandomInt(3);
    if (x==0)
        return "rock";
    else if (x==1)
        return "paper";
    else
        return "scissors";
}

let humanScore=0,computerScore=0;

let msgElement = document.createElement('p');
let scoreElement = document.createElement('p');
let messageDiv = document.getElementById('message');

function playRound(humanChoice,computerChoice){

    humanChoice=humanChoice.toLowerCase();

    let msg='';

    if (humanChoice === computerChoice) {
        msg="It's a tie !"
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        msg=`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
        humanScore++;
    } else {
        msg=`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
        computerScore++;
    }

    msgElement.textContent=msg;

    updateScore();
    checkWinner();
}

function updateScore() {
    scoreElement.textContent = `Scores -> Human: ${humanScore}, Computer: ${computerScore}`;
    messageDiv.textContent = '';
    messageDiv.appendChild(msgElement);
    messageDiv.appendChild(scoreElement);
}

function checkWinner() {
    if (humanScore >= 5) {
        alert("Congrats! You won the game!");
        resetGame();
    } else if (computerScore >= 5) {
        alert("Sorry! You lost the game!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

document.querySelector('.stone').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.querySelector('.paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.querySelector('.scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));
