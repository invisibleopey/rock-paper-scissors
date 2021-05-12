const buttons = document.querySelectorAll(".button");
let playerSelection;
let computerSelection;
let result = "";
const resultParagraph = document.querySelector("#roundResult");

buttons.forEach((button) => button.addEventListener("click", gamePlay));

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
    // console.log("Player's Selection is: " + playerSelection.toLowerCase());
    // console.log("Computer's Selection is: " + computerSelection);
    // console.log(result);
    resultParagraph.textContent += result + "\r\n";
    resultParagraph.setAttribute('style', 'white-space: pre;');

    countScore();
    gameOver();

}


const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
let pScoreText = pScore.textContent;
let cScoreText = cScore.textContent;
let pScoreNum = Number(pScoreText);
let cScoreNum = Number(cScoreText);

function countScore () {
    if (result === "You win! Rock beats Scissors" || result === 
        "You win! Paper beats Rock" ||result === "You win! Scissors beats Paper") 
        { pScoreNum += 1;
    } else if (result === "You lose! Paper beats Rock" || result === 
        "You lose! Scissors beats Paper" || result === "You lose! Rock beats Scissors") 
        { cScoreNum += 1; }
    pScore.textContent = pScoreNum;
    cScore.textContent = cScoreNum;
}

const finalResult = document.querySelector("#finalResult");

function gameOver () {
    if (pScoreNum === 5 && cScoreNum < 5 ) {
        finalResult.textContent = "Joe, we did it. Congratulation!"
    } else if (cScoreNum === 5 && pScore < 5) {
        finalResult.textContent = "Aww, you lost! Better luck next time"
    } else return
}