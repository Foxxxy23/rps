function computerPlay(){
    selection = "";
    selection = Math.floor(Math.random() * 101)
    console.log(selection);
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
            return winner;
        }
        if(playerSelection === "rock"){
            if(computerSelection === "paper"){
                winner = "Computer";
                return winner;
            }
            if(computerSelection === "scissors"){
                winner = "Player";
                return winner;
            }
        }
        if(playerSelection === "paper"){
            if(computerSelection === "rock"){
                winner = "Player";
                return winner;
            }
            if(computerSelection === "scissors"){
                winner = "Computer";
                return winner;
            }
        }
        if(playerSelection === "scissors"){
            if(computerSelection === "paper"){
                winner = "Player";
                return winner;
            }
            if(computerSelection === "rock"){
                winner = "Computer";
                return winner;
        }
    }
}
const playerSelection = "sciSsors";
const computerSelection = computerPlay();
playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
console.log("Player:" + playerSelection.toLowerCase());
console.log("Computer:" + computerSelection);
console.log("Winner:" + winner);