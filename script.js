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

function getHumanChoice(){
    let x = prompt("Enter your choice: ");
    return x;
}

let humanScore=0,computerScore=0;

function playRound(humanChoice,computerChoice){

    humanChoice=humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame(){
    for (let i=0; i<5; i++){
        let x=getComputerChoice();
        let y=getHumanChoice();
        playRound(y,x);
    }
    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore>computerScore)
        console.log("Congrats! You won!");
    else if (computerScore>humanScore)
        console.log("Sorry! You lost!");
    else
        console.log("It's a draw...");
}

playGame();