let playGame = document.querySelector(".playGame");
let playerSelection = "";
let computerSelection = getComputerChoice();
let playerPoints = 0;
let computerPoints = 0;
let buttons = document.querySelectorAll("#rps button");

//click "play game" button to start game
//remove "play game" button and add rock, paper, scissor buttons
playGame.addEventListener('click', () => {
    playGame.remove();
    buttons.forEach((button) => {
        button.style.display = "inline";
    })
});

//create a function getComputerChoice, randomly return rock,paper,scissors
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

//click a button to play a round
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

let player = document.getElementById("playerPoints");
let computer = document.getElementById("computerPoints");


function playRound() {
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
    player.textContent = playerPoints;
    computer.textContent = computerPoints;
    game();
}

let gameOver = document.querySelector("#rps");
let playAgain = document.createElement("button");
playAgain.innerHTML = "Play Again";
playAgain.addEventListener('click', () => location.reload());

//function game(), first to 5 wins
function game() {
    if (playerPoints === 5) {
        //gameOver.remove();
        gameOver.innerHTML = "You Win!";
        document.body.appendChild(playAgain);
        //alert("You win!");
        //location.reload();
    }
    else if (computerPoints === 5) {
        gameOver.innerHTML = "You Loser."
        document.body.appendChild(playAgain);
    }
}


