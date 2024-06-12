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
