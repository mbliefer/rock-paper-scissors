console.log("Rock. Paper. Scissors. Shoot!");
//create a function getComputerChoice, randomly return rock,paper,scissors
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

let computerSelection = getComputerChoice();

/*function that plays a single round - playRound
takes 2 parameters - playerSelection and computerSelection
playerSelection is case-insensitive
return a string that declares winner*/

// function getPlayerSelection() {
//     playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();
//     if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
//         getPlayerSelection();
//         return playerSelection;
//     }
//     else {
//         return playerSelection;
//     }
// }

let playerSelection = "";
let buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});


function playRound(e) {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playerSelection = this.className;
    console.log(playerSelection);
    const roundWinner = document.querySelector('#roundWinner');
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerPoints++;
        roundWinner.textContent = "You win! Rock beats scissors.";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerPoints++;
        roundWinner.textContent = "You lose. Paper beats rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        roundWinner.textContent = "Tie.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerPoints++;
        roundWinner.textContent = "You lose. Scissors beats paper.";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        roundWinner.textContent = "Tie.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerPoints++;
        roundWinner.textContent = "You win! Paper beats rock.";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerPoints++;
        roundWinner.textContent = "You win! Scissors beats paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundWinner.textContent = "Tie.";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerPoints++;
        roundWinner.textContent = "You lose. Rock beats scissors.";
    }

}

let playerPoints = 0;
let computerPoints = 0;

//function game(), call playRound inside to play 5 rounds and keep score, report winner
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player: ", playerPoints, "Computer: ", computerPoints);
    }
    if (playerPoints > computerPoints) {
        console.log("You win!");
    }
    else if (playerPoints < computerPoints) {
        console.log("You Loser.");
    }
    else {
        console.log("Tie.");
    }
}


