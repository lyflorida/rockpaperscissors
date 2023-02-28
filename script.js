let greeting = alert("Welcome! Please open up the console to proceed with the game.")

let playerScore = 0
let computerScore = 0

// Get user's input via prompt
// If input is not a valid choice, reprompt user
function getUserInput() {
    let playerSelection = prompt("Rock, paper or scissors?: ")
    playerChoice = playerSelection.toUpperCase()

    while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
        playerSelection = prompt("Invalid input! Rock, paper, scissors?: ")
        playerChoice = playerSelection.toUpperCase()
    }
    
    return playerChoice;
}