let playerSelection;
let computerSelection;
let buttons = document.querySelectorAll(".cbutton");

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
    })
})

/* Checking the playerSelection vs computerSelection */
function actionPlay(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection,computerSelection   );
    /*first one is checking empty strings, second one is uncompleted strings bellow than 2 characters */
    if (playerSelection === "" && computerSelection != null){
       resultx = "Select action first!";
       console.log(resultx);
    } else if (playerSelection.length <= 2 && computerSelection != null){
        resultx = "Select action first!";
        console.log(resultx);
    }

    /* checking tie result */
    if(playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors"){
        cresultx = "Tie! Player: "+playerSelection+" vs Computer: "+computerSelection;
        console.log(resultx);
    }
     
    if(playerSelection === "rock" && computerSelection === "paper"){ /*check player rock vs computer paper */
        resultx = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
        console.log(resultx);
    } else if(playerSelection === "paper" && computerSelection === "rock"){ /*check player paper vs computer rock */
        resultx = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
        console.log(resultx);
    } else if(playerSelection === "paper" && computerSelection === "scissors"){ /*check player paper vs computer scissors*/
        resultx = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
        console.log(resultx);
    } else if(playerSelection === "scissors" && computerSelection === "paper"){ /*check player scissors vs computer paper */
        resultx = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
        console.log(resultx);
    } else if (playerSelection === "rock" && computerSelection === "scissors"){ /*check player rock vs computer scissors */
        resultx = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
        console.log(resultx);
    } else if (playerSelection === "scissors" && computerSelection === "rock"){ /*check player scissors vs computer rock */
        resultx = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
        console.log(resultx);
    }
    } 
    

/* Main function for the game, round is 5 times */
function game(){
    for (let i = 1; i <= 5; i++) {
        matchPlay = actionPlay(playerSelection,computerSelection); /* calling funtion actionPlay */
        matchRound = "Match - "+i; /* count the match */
        console.log(matchRound, matchPlay); /* print the matchround and matchplay */
     }
}
