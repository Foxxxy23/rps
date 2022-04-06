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
                return winner;
            }
            if(computerSelection === "scissors"){
                winner = "Player";
                console.log(playerSelection + " beats " + computerSelection)
                console.log("Player wins")
                return winner;
            }
        }
        if(playerSelection === "paper"){
            if(computerSelection === "rock"){
                winner = "Player";
                console.log(playerSelection + " beats " + computerSelection)
                console.log("Player wins")
                return winner;
            }
            if(computerSelection === "scissors"){
                winner = "Computer";
                console.log(computerSelection + " beats " + playerSelection)
                console.log("Computer wins")
                return winner;
            }
        }
        if(playerSelection === "scissors"){
            if(computerSelection === "paper"){
                winner = "Player";
                console.log(playerSelection + " beats " + computerSelection)
                console.log("Player wins")
                return winner;
            }
            if(computerSelection === "rock"){
                winner = "Computer";
                console.log(computerSelection + " beats " + playerSelection)
                console.log("Computer wins")
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
const scoreInfo = document.getElementById('scoreInfo')

const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameMsg = document.getElementById('endgameMsg')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener("click", function(){
    playRound("rock", computerPlay());
});
paperBtn.addEventListener("click", function(){
    playRound("paper", computerPlay());
});
scissorsBtn.addEventListener("click", function(){
    playRound("scissors", computerPlay());
});

    
//game();
//winner1();
//console.log(totalWinner);

