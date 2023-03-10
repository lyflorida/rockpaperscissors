let greeting = alert("Welcome! Please ensure the console is open before playing. If you do not see a dashed line at the top of the console after clicking the 'ok' button, refresh the page.")

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

// NOTE: What if player clicks cancel instead of entering/pressing ok? I want to prompt: "Are you sure you want to quit now?" 
// If yes, continue game, if no, end game and display current scores. Console.log("Thanks for playing.")

// Play a game of several rounds (playRound) that ends when either computer or player reaches 5 points
// Keep track of score each round

function game() {
    while (playerScore < 5 && computerScore < 5) {
        console.log("--------------------------------")
        
        getUserInput()
        console.log(`You chose ${playerChoice}`)

        const choices = ["ROCK", "PAPER", "SCISSORS"]
        const computerChoice = choices[Math.floor(Math.random()*3)]
        console.log("The computer chose " + `${computerChoice}`)

        console.log(playRound(playerChoice, computerChoice))

        console.log(`Player score: ${playerScore} pts`)
        console.log(`Computer score: ${computerScore} pts`)
    }

    alertWinner()
}

// Play a single round where the winner of each round receives a point

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return("It's a tie!")
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        playerScore += 1
        return("You win! Rock beats scissors.")
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        playerScore += 1
        return("You win! Paper beats rock.")
    } else if (playerChoice === "SCISSORS" && computerChoice == "PAPER") {
        playerScore += 1
        return("You win! Scissors beats paper.")
    } else {
        computerScore += 1
        return(`You lose! ${computerChoice} beats ${playerChoice}.`)
    }
}

// Announce who the winner is at the end of the game

function alertWinner() {
    if (playerScore === 5) {
        console.log("Congrats! You're a winner.")
    } else if (computerScore === 5) {
        console.log("The computer won! Not rigged.")
    } else {
        return
    }
}

game()