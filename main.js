const choices = ['rock', 'paper', 'scissors']
const winners = []

function game() {
    for(let i = 0; i <5; i++){
        playRound(i + 1);
    }
    logWins();
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice() {
//get input from player
let input = prompt('Choose Rock, Paper, or Scissors');
while (input == null){
    input = prompt('Please enter a valid response')
}
input = input.toLowerCase();
let check = validateInput(input);

while (check == false) {
    input = prompt('Please enter a valid response')
    while (input == null) {
        input = prompt('Please enter a valid response')
    }
    input = input.toLowerCase();
    check = validateInput(input);
}
return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    console.log(computerChoice)
}

function validateInput(choice){
 return choices.includes(choice)
}

function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC){
        return 'Tie'
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP == 'scissor' && choiceC == 'paper')){
        return 'Player'
    }
    else {
        return 'Computer'
    }

}

function logWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results: ')
    console.log('Player Wins: ', playerWins)
    console.log('Computer Wins: ', computerWins)
    console.log('Ties: ', ties)
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round: ', round)
    console.log('Player Chose: ', playerChoice)
    console.log('Computer Chose: ', computerChoice)
    console.log(winner, 'Won the Round')
    console.log('--------------------------------')
}


//recieve input from user 
//check if input is valid
//generate random answer from computer
//compare user answer and computer answer
//return winner 
//loop over 5 times
//return overall winner 