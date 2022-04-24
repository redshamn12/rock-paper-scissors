function computerPlay(){
    const pcstate = ["Rock", "Paper", "Scissors"]
    return ranstate = pcstate[Math.floor(Math.random() * pcstate.length)];
}

function actionPlay(playerSelection, computerSelection){
    
    if (playerSelection === "" && computerSelection != null){
        return result = "Select action first!";
    } else if (playerSelection.length <= 2 && computerSelection != null){
        return result = "Select action first!";
    }

    if(playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors"){
        return result = "Tie! Player: "+playerSelection+" vs Computer: "+computerSelection;
    } 

    if(playerSelection === "Rock" && computerSelection === "Paper"){
        return result = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return result = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
    } else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return result = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return result = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return result = "You won! Player: "+playerSelection+" beats Computer: "+computerSelection;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return result = "You lose! Computer: "+computerSelection+" beats Player: "+playerSelection;
    }
}

function game(){
    for (let i = 1; i <= 5; i++) {
        let actionChoose = prompt("Select your action! Choose between Rock, Paper, Scissors");
        const section1 = actionChoose.charAt(0).toUpperCase();
        const section2 = actionChoose.slice(1).toLowerCase();
        const playerSelection = section1+section2;
        const computerSelection = computerPlay();
        matchplay = actionPlay(playerSelection,computerSelection);
        matchround = "Match - "+i;
        console.log(matchround, matchplay);
     }
}

game();