console.log("Rock. Paper. Scissors. Shoot!");
//create a function getComputerChoice, randomly return rock,paper,scissors
function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}
/*function that plays a single round - playRound
takes 2 parameters - playerSelection and computerSelection
playerSelection is case-insensitive
return a string that declares winner*/

//function game(), call playRound inside to play 5 rounds and keep score, report winner



