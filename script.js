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

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5) {
           
        function playRound(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
                console.log("It's a draw!");
            } else if (
                humanChoice == "rock" && computerChoice == "scissors" ||
                humanChoice == "scissors" && computerChoice == "paper" || 
                humanChoice == "paper" && computerChoice == "rock") {            
                humanScore++
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            } else if (
                computerChoice == "rock" && humanChoice == "scissors" ||
                computerChoice == "scissors" && humanChoice == "paper" ||
                computerChoice == "paper" && humanChoice == "rock") {
                computerScore++
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
                }
            console.log(humanScore);
            console.log(computerScore);
        }

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        round++
    }
    
    function Winner() {
        if (humanScore == computerScore) {
            console.log("Hard luck, it's a tie!");
        } else if (humanScore > computerScore) {
            console.log("Congratulations, you won the game!");
        } else if (humanScore < computerScore){
            console.log("Oops, you lost the game to a robot!");
        }
    }
    Winner();
}
playGame();