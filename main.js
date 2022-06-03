let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let matchRound = 0;

let buttons = document.querySelectorAll(".cbutton");
let rbuttons = document.querySelector(".rbutton");
let players = document.querySelector(".player-score");
let computers = document.querySelector(".computer-score");
let finals = document.querySelector(".final-res");
let playAgain = document.querySelector(".play-again");
let hideAction = document.querySelector("#action-button");

/*Adding a randomly action for computer with bellow function*/
function computerPlay(){
    const pcState = ["Rock", "Paper", "Scissors"]
    computerSelection = pcState[Math.floor(Math.random() * pcState.length)];
    return computerSelection.toLowerCase();
}

buttons.forEach((xbutton) => {
    xbutton.addEventListener("click", () =>{
        const res = xbutton.value;
        playerSelection = res.toLowerCase();
        actionPlay(playerSelection, computerSelection);
        players.innerHTML = playerScore;
        computers.innerHTML = computerScore;
    })
})

rbuttons.addEventListener("click", () =>{
    resetGame();
})

/* Checking the playerSelection vs computerSelection */
function actionPlay(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    matchRound = ++matchRound;

    /*first one is checking empty strings, second one is uncompleted strings bellow than 2 characters */
    if (playerSelection === "" && computerSelection != null){
       resultx = "Select action first!";
    } else if (playerSelection.length <= 2 && computerSelection != null){
        resultx = "Select action first!";
    }

    /* checking tie result */
    if(playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors"){
        cresultx = "Tie! Player: "+playerSelection+" vs Computer: "+computerSelection;
    }

    if(playerSelection === "rock" && computerSelection === "paper"){ /*check player rock vs computer paper */
        resultx = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
        computerScore = ++computerScore;
    } else if(playerSelection === "paper" && computerSelection === "rock"){ /*check player paper vs computer rock */
        resultx = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
        playerScore = ++playerScore;
    } else if(playerSelection === "paper" && computerSelection === "scissors"){ /*check player paper vs computer scissors*/
        resultx = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
        computerScore = ++computerScore;
    } else if(playerSelection === "scissors" && computerSelection === "paper"){ /*check player scissors vs computer paper */
        resultx = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
        playerScore = ++playerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){ /*check player rock vs computer scissors */
        resultx = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
        playerScore = ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){ /*check player scissors vs computer rock */
        resultx = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
        computerScore = ++computerScore;
    }
    game();
    } 
    

/* Main function for the game, round is 5 times */
function game(){
    if (computerScore >= playerScore && computerScore === 5) {
        finals.innerHTML = "Match end, the winner is Computer";
        playAgain.style = "display: block";
        hideAction.style = "display: none";

     }else if (playerScore >= computerScore && playerScore === 5){
        finals.innerHTML = "Match end, the winner is You";
        playAgain.style = "display: block";
        hideAction.style = "display: none";
     }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    matchRound = 0;
    hideAction.style = "display: show";
    playAgain.style = "display: none";
    finals.innerHTML = "";
}
