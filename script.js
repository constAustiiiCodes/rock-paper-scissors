let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const humanChoice = prompt();
    console.log(`You chose: ${humanChoice}`);
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        computerChoice = "rock";
    } else if (computerChoice >= 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw! Play again!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        console.log("You win! Rock beats scissors.");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        console.log("You win! Scissors beats paper.")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        console.log("You win! Paper beats rock.")
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++
        console.log("You lose! Rock beats scissors.");
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++
        console.log("You lose! Scissors beats paper.")
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++
        console.log("You lose! Paper beats rock.");
    } 
    console.log(humanScore);
    console.log(computerScore);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
