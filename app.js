let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('.msg');
let userScore = document.querySelector('.user');
let compScore = document.querySelector('.comp');
let drawScore = document.querySelector('.draw');
let resetBtn = document.querySelector('.resetBtn');

userScoreIni = 0;
compScoreIni = 0;
drawScoreIni = 0;

const compGenChoice = (userChoice)=>{
    const compChoiceArr = ['rock','paper','scissors'];
    const idx = Math.floor(Math.random()*3);
    compChoice = compChoiceArr[idx];
    playGame(compChoice,userChoice)
} ;

const drawGame = ()=>{
    msg.innerHTML = 'Game Draw';
    drawScoreIni++;
    drawScore.innerText = drawScoreIni
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin === true){
        msg.innerHTML = `You won! your ${userChoice} beat ${compChoice}`;
        userScoreIni++
        userScore.innerText = userScoreIni;
    }
    else{
        compScoreIni++
        msg.innerHTML = `You lose! ${compChoice} beat your ${userChoice}`;
        compScore.innerText = compScoreIni;
    }
}

const playGame = (compChoice,userChoice)=>{
    if (userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false :true;
        }
        else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        compGenChoice(userChoice);
    })
})

resetBtn.addEventListener('click',()=>{
    resetGame();
})
const resetGame = ()=>{
    userScoreIni = 0,compScoreIni=0,drawScoreIni = 0

    userScore.innerText = 0;
    compScore.innerText = 0;
    drawScore.innerText = 0
    msg.innerText = 'Play Your Move!';
}