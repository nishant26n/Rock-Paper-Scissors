let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r','p','s'];
    const RandomNumber = Math.floor(Math.random()*3);
    return choices[RandomNumber];
}

function convertToWords(letter){
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Your ${convertToWords(userChoice)} beats ${convertToWords(computerChoice)}. YOU WIN !!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')},300);
}

function loss(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML =  `${convertToWords(computerChoice)} beats your ${convertToWords(userChoice)}. YOU LOSS !!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')},300);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWords(computerChoice)} equals ${convertToWords(userChoice)}. It's a draw !!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){userChoice_div.classList.remove('grey-glow')},300);
}

function game(UserChoice){
    const computerChoice = getComputerChoice();
    
    switch(UserChoice+computerChoice){
        case "pr":
        case "sp":
        case "rs":
            win(UserChoice, computerChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            loss(UserChoice, computerChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw(UserChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    })

    paper_div.addEventListener('click', function(){
        game('p');
    })

    scissors_div.addEventListener('click', function(){
        game('s');
    })
}
main();
    
