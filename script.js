let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const humanChoice = prompt();
    return humanChoice;
}
console.log(getHumanChoice());

function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        computerChoice = "rock";
    } else if (computerChoice >= 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice
}
console.log(getComputerChoice());