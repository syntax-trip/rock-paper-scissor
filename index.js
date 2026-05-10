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
    const choice = prompt("Enter your choice : rock, paper, scissors");
    return choice;
}

function playGame(){

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const choice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log("It's a tie !!");
    }else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
    ){
        console.log("You won !")
        humanScore++;
    }else{
        console.log("You lost :(")
        computerScore++;
    }
    }

    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());

    
        console.log(`your score : ${humanScore} | computer score : ${computerScore}`)
        if(humanScore > computerScore){
            console.log("You won this gameee !!! yooooooo")
        }else if (computerScore > humanScore){
            console.log("You lost this game . Better luck next time :)")
        }else{
            console.log("The game is tie !! . You both got the same score")
        }
}


playGame();