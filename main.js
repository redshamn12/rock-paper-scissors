function computerPlay(){
    const pcstate = ["Rock", "Paper", "Scissors"]
    return ranstate = pcstate[Math.floor(Math.random() * pcstate.length)];
}

function actionPlay(playerSelection, computerSelection){
    switch (playerSelection === "Paper"){
        case computerSelection === "Rock":
            return message = "You won! Paper beats Rock";
            break;
        case computerSelection === "Scissors":
            return message = "You lose! Scissors beats Paper";
            break;
        case computerSelection === "Paper":
            return message = "Tie! Paper vs Paper"
            break;
    }

    switch (playerSelection === "Rock"){
        case computerSelection === "Rock":
            return message = "Tie! Rock vs Rock";
            break;
        case computerSelection === "Scissors":
            return message = "You won! Rock beats Scissors";
            break;
        case computerSelection === "Paper":
            return message = "You lose! Paper beats Rock"
            break;
    }

    switch (playerSelection === "Scissors"){
        case computerSelection === "Rock":
            return message = "You lose! Rock beats Scissors";
            break;
        case computerSelection === "Scissors":
            return message = "Tie! Scissors vs Scissors";
            break;
        case computerSelection === "Paper":
            return message = "You won! Scissors beats Paper"
            break;
    }
}

const playerSelection = "Paper";
const computerSelection = computerPlay();

console.log(actionPlay(playerSelection,computerSelection));