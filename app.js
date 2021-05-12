const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => button.addEventListener("click", gamePlay));

let playerSelection;
let computerSelection;
let result = "";

function gamePlay (e, computerSelection) {
    // Assign id of the buttons to playerSelection variable
    playerSelection = e.target.id;
    // Computer Selection
    let computerChoices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * (2 - 0 + 1 ) + 0 ); //randomly picks 0,1,2
    computerSelection = computerChoices[random];

    // Logic of assigning winner
    if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats Scissors";
    } else if (playerSelection=== "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats Scissors";
    } else if (playerSelection=== "paper" && computerSelection === "rock") {
        result = "You win! Paper beats Rock";
    } else if (playerSelection=== "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats Paper"; 
    } else {
        result = "Tie, try again";
    }
    console.log("Player's Selection is: " + playerSelection.toLowerCase());
    console.log("Computer's Selection is: " + computerSelection);
    console.log(result);
    return result;

}

