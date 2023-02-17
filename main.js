const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissor');
const resetButton = document.getElementById('reset');
const roundResult = document.getElementById('round-result');
const playerWinsDiv = document.getElementById('playerWins');
const computerWinsDiv = document.getElementById('computerWins');
const tiesDiv = document.getElementById('ties');
const overallResult = document.getElementById('overall-result');
const choices = ['rock', 'paper', 'scissors']
const header = document.getElementById('headers');
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let round = 0;

//starting a round, and updating the results of that round
function playRound(selection){
    
    round++;
    const playerSelection = selection;
    const computerSelection = computerChoice();
    if (round < 5){
        updateResults(checkWinner(playerSelection, computerSelection));
    }
    else {
        if (playerWins > computerWins){
            header.innerText = 'Player Wins!';
        }
        else if (computerWins > playerWins){
            header.innerText = 'Computer Wins!';
        }
        else if (playerWins = computerWins){
            header.innerText = 'It\'s A Tie!';
        }
        roundResult.innerHTML = '<h2>Reset The Game To Play Again!</h2>';
    }
}
// grabbing computer choice
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

// checking round winner 
function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC){
        ties++;
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP == 'scissor' && choiceC == 'paper')){
        playerWins++;
        return 'Player';
    }
    else {
        computerWins++;
        return 'Computer';
    }
}

// displaying the round result and overall score
updateResults = (winner) => {
    
    if (winner == 'Player' || winner == 'Computer'){
        roundResult.innerHTML = `<h2>${winner} Wins!</h2>`;
    }
    else {
        roundResult.innerHTML = '<h2>It\'s A Tie!</h2>';
    }

    playerWinsDiv.innerHTML = `<p>Player Wins: ${playerWins}</p>`
    computerWinsDiv.innerHTML = `<p>CPU Wins: ${computerWins}</p>`
    tiesDiv.innerHTML = `<p>Ties: ${ties}</p>`
}



// Attaching event listeners for the player choice, and starting the round 
rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    playRound(playerSelection);
})

paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    playRound(playerSelection);
})

scissorsButton.addEventListener('click', () => {
    let playerSelection = 'scissors';
    playRound(playerSelection);
})

resetButton.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    round =0;
    
    playerWinsDiv.innerHTML = '';
    computerWinsDiv.innerHTML = '';
    tiesDiv.innerHTML= '';
    roundResult.innerHTML = '';
    header.innerText = 'Best of 5 Wins!';
})
    