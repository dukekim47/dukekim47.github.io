let result = document.getElementById("result");
let startGame = document.getElementById("start");
let playerScore = document.getElementById("playerscore");
let computerScore = document.getElementById("computerscore");
let reset = document.getElementById("reset");
let pScore = 0;
let cScore = 0;
let playerInput = "";

function computerGame() {
    let cgResult;
    let computerPlay = Math.random() * 100;
    computerPlay < 33 ? cgResult = "ROCK" : computerPlay < 66 ? cgResult ="PAPER" : cgResult = "SCISSORS";
    return cgResult;
}

function theGame () {
    if (playerInput == "ROCK" && computerGame() == "PAPER") {cScore++; result.textContent = "COMPUTER WINS";}
    else if (playerInput == "PAPER" && computerGame() == "SCISSORS") {cScore++; result.textContent = "COMPUTER WINS";}
    else if (playerInput == "SCISSORS" && computerGame() == "ROCK") {cScore++; result.textContent = "COMPUTER WINS";}
    else if (playerInput == computerGame()) {result.textContent = "TIE - PLAY AGAIN!"} 
    else {pScore++; result.textContent = "YOU WIN!"};
}

function showResult () {
    playerScore.textContent = "Your Score: " + pScore;
    computerScore.textContent = "Computer Score: " + cScore;
}


let playerInputRock = document.getElementById("rock");
playerInputRock.addEventListener("click", () => {
    playerInput = "ROCK";
    computerGame();
    theGame();
    showResult();
})


let playerInputPaper = document.getElementById("paper");
playerInputPaper.addEventListener("click", () => {
    playerInput = "PAPER";
    computerGame();
    theGame();
    showResult();
})

let playerInputScissors = document.getElementById("scissors");
playerInputScissors.addEventListener("click", () => {
    playerInput = "SCISSORS";
    computerGame();
    theGame();
    showResult();
})

function replay() {
    cScore = 0;
    pScore = 0;
    result.textContent = "Rock!! Paper!! Scissors!!!"
    showResult();
}

reset.addEventListener("click", replay);

startGame.addEventListener("click", () => {
    alert("Click on one of the three images to start playing! Press RESET to reset scores to 0.");
})




