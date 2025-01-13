let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["stone", "paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "game was draw! Play Again";
    msg.style.backgroundColor = "#772e25";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScorePara.innerText = `${userScore}`;
    }
    else{
        compScore++;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScorePara.innerText = `${compScore}`;
    }
}
const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //Generate computer choice;
    const compChoice = genCompChoice();
    console.log("computerChoice ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissor"? false : true;
        }
        else{
            //rock,paper
            userWin = compChoice === "stone"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
        choice.addEventListener("click",() => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
    })
})