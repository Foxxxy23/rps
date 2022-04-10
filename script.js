let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    selection = "";
    selection = Math.floor(Math.random() * 101)
        if (selection < 33){
            computer = "rock";
        }
        if (selection >= 33 && selection <= 66){
            computer = "paper";
        }
        if (selection > 66) {
            computer = "scissors";
        }
    return computer;
    }

function playRound(playerSelection, computerSelection){
    updateChoices(playerSelection, computerSelection);
    winner = "";
        if(playerSelection === computerSelection){
            winner = "Tie";
            console.log("Tie")
            return winner;
        }
        if(playerSelection === "rock"){
            if(computerSelection === "paper"){
                winner = "Computer";
                console.log(computerSelection + " beats " + playerSelection)
                console.log("Computer wins")
                computerScore++;
                return winner;
            }
            if(computerSelection === "scissors"){
                winner = "Player";
                console.log(playerSelection + " beats " + computerSelection)
                console.log("Player wins")
                playerScore++;
                return winner;
            }
        }
        if(playerSelection === "paper"){
            if(computerSelection === "rock"){
                winner = "Player";
                console.log(playerSelection + " beats " + computerSelection)
                console.log("Player wins")
                playerScore++;
                return winner;
            }
            if(computerSelection === "scissors"){
                winner = "Computer";
                console.log(computerSelection + " beats " + playerSelection)
                console.log("Computer wins")
                computerScore++;
                return winner;
            }
        }
        if(playerSelection === "scissors"){
            if(computerSelection === "paper"){
                winner = "Player";
                console.log(playerSelection + " beats " + computerSelection)
                console.log("Player wins")
                playerScore++;
                return winner;
            }
            if(computerSelection === "rock"){
                winner = "Computer";
                console.log(computerSelection + " beats " + playerSelection)
                console.log("Computer wins")
                computerScore++;
                return winner;
        }
    }
}
function game(){
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 1; i++) {
        console.log("Round " + (i + 1));
        computerSelection = computerPlay();
        console.log("Player has chosen: " + playerSelection);
        console.log("Computer has chosen: " + computerSelection);
        playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
            if(winner === "Player"){
                playerScore = playerScore + 1;
                console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
        }
            if(winner === "Computer"){
                computerScore = computerScore + 1;
                console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
        }
            if (winner === "Tie"){
                console.log("Tie");
        }
    }
}

function winner1(){
    totalWinner = "";
    if (playerScore === computerScore){
        totalWinner = "Tie game";
        return totalWinner;
    }
    if (playerScore > computerScore){
        totalWinner = "Player wins!";
        return totalWinner;
    }
    if (playerScore < computerScore){
        totalWinner = "Computer wins!";
        return totalWinner;
    }

}


//UI
const input = document.getElementById("input")

const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameMsg = document.getElementById('endgameMsg')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener("click", function(){
    playRound("rock", computerPlay());
    updateScore(winner);
});
paperBtn.addEventListener("click", function(){
    playRound("paper", computerPlay());
    updateScore(winner);
});
scissorsBtn.addEventListener("click", function(){
    playRound("scissors", computerPlay());
    updateScore(winner);
});

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        playerSign.textContent = '✊'
        break
      case 'paper':
        playerSign.textContent = '✋'
        break
      case 'scissors':
        playerSign.textContent = '✌'
        break
    }
    switch (computerSelection) {
        case 'rock':
          computerSign.textContent = '✊'
          break
        case 'paper':
          computerSign.textContent = '✋'
          break
        case 'scissors':
          computerSign.textContent = '✌'
          break
      }
    }

function updateScore(winner) {
    if (winner === "Tie") {
        input.textContent = "It's a tie!"
     } else if (winner === 'Player') {
        input.textContent = 'You won!'
    } else if (winner=== 'Computer') {
        input.textContent = 'You lost!'
    }
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

//game();
//winner1();
//console.log(totalWinner);