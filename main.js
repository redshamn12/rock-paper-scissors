/*Adding a randomly action for computer with bellow function*/
function computerPlay(){
    const pcState = ["Rock", "Paper", "Scissors"]
    return ranState = pcstate[Math.floor(Math.random() * pcstate.length)];
}

/* Checking the playerSelection vs computerSelection */
function actionPlay(playerSelection, computerSelection){
    
    /*first one is checking empty strings, second one is uncompleted strings bellow than 2 characters */
    if (playerSelection === "" && computerSelection != null){
        return result = "Select action first!";
    } else if (playerSelection.length <= 2 && computerSelection != null){
        return result = "Select action first!";
    }

    /* checking tie result */
    if(playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors"){
        return result = "Tie! Player: "+playerSelection+" vs Computer: "+computerSelection;
    } 

    if(playerSelection === "Rock" && computerSelection === "Paper"){ /*check player rock vs computer paper */
        return result = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){ /*check player paper vs computer rock */
        return result = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
    } else if(playerSelection === "Paper" && computerSelection === "Scissors"){ /*check player paper vs computer scissors */
        return result = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){ /*check player scissors vs computer paper */
        return result = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){ /*check player rock vs computer scissors */
        return result = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){ /*check player scissors vs computer rock */
        return result = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
    }
}

/* Main function for the game, round is 5 times */
function game(){
    for (let i = 1; i <= 5; i++) {
        let actionChoose = prompt("Select your action! Choose between Rock, Paper, Scissors"); /* Player input the choosed action, case insensitive */
        const section1 = actionChoose.charAt(0).toUpperCase(); /* take the first word of selected player action then change to uppercase*/
        const section2 = actionChoose.slice(1).toLowerCase(); /* take the second word to the rest of word selected player action then change to lowercase */
        const playerSelection = section1+section2; /* join the section1 and section2 then store them into playerSelection */
        const computerSelection = computerPlay(); /* calling function computerPlay then store it to computerSelection */
        matchPlay = actionPlay(playerSelection,computerSelection); /* calling funtion actionPlay */
        matchRound = "Match - "+i; /* count the match */
        console.log(matchround, matchplay); /* print the matchround and matchplay */
     }
}

game();
