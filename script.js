function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        computerChoice = "rock"
    } else if (computerChoice >= 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice
}
console.log(getComputerChoice());