function computerPlay(){
    let pcstate = ["Rock", "Paper", "Scissors"]
    return ranstate = pcstate[Math.floor(Math.random() * pcstate.length)];
}

console.log(computerPlay());