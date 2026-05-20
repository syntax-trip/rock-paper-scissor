const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const resetBtn = document.getElementById("resetbtn")

const resultspace = document.getElementById("result")

const humanscoreboard = document.getElementById("humanScoreBoard")
const hackerscoreboard = document.getElementById("hackerScoreBoard")


function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    if(randomNum === 0){
        return "rock";
    }else if(randomNum === 1){
        return "paper";
    }else{
        return "scissors";
    }
}
function getHumanChoice(){
    // const choice = prompt("Enter your choice : rock, paper, scissors");
    // return choice;
    

}

// function playGame(){
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice){
    if (gameOver) return;
    const computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        resultspace.textContent = "It's a tie !!";
    }else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
    ){
        resultspace.textContent = "You won !"
        humanScore++;
    }else{
        resultspace.textContent = "You lost :("
        computerScore++;
    }
    


    humanscoreboard.textContent = `You : ${humanScore}`;
    hackerscoreboard.textContent = `Hacker : ${computerScore}`;
        if(humanScore === 5){
            resultspace.style.color = "green";
            resultspace.textContent = "You won this gameee !!! yooooooo"
            gameOver = true ;
        }else if (computerScore === 5){
            resultspace.style.color = "#cb0404";
            resultspace.textContent = "You lost this game . Better luck next time :)"
            gameOver = true;
        }else{
            console.log("The game is tie !! . You both got the same score")
            gameover = true;
        }
}
        rockBtn.addEventListener("click", ()=> playRound("rock"))
        paperBtn.addEventListener("click", ()=> playRound("paper"))
        scissorsBtn.addEventListener("click", ()=> playRound("scissors"))

// }

resetBtn.addEventListener("click", ()=> {
    humanScore = 0;
    computerScore = 0;

    gameOver = false;
    humanscoreboard.textContent = "You : 0"
    hackerscoreboard.textContent = "Hacker : 0"

    resultspace.style.color = "white";
    resultspace.textContent = "";
})

playGame();