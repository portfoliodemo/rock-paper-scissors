
/* Rudimentary Console Based Rock Paper Scissors Game */

// Get 'Start Game' button
const button = document.querySelector('.start');

// Game Counters
let playerCount = 0;
let computerCount = 0;

// Listen for Start Game button click event
// playGame();
// button.addEventListener("click", playGame);

// Trigger five games
for(let i = 0; i < 5; i++) {
    playGame();

    if(i == 4) {
        console.log(`Final Score: Player = ${playerCount} | Computer = ${computerCount}`);
        if(playerCount > computerCount) {
            alert(`Congratulations! You won the series! Final Score: Player = ${playerCount} | 
                    Computer = ${computerCount}`);
        } else if (playerCount < computerCount) {
            alert(`You lost the series! Better luck next time! Final Score: Player = ${playerCount} | 
                    Computer = ${computerCount}`);
        } else {
            alert(`Series was a tie! Final Score: Player = ${playerCount} | Computer = ${computerCount}`);
        }
    } else {
        console.log(`Current Score: Player = ${playerCount} | Computer = ${computerCount}`);
    }
}

function playGame() {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

// Play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Compare the two entries and signify win, loss or tie.
    const gameResult = evaluateMatch(playerSelection, computerSelection);
    console.log(gameResult);
}

// Prompt the user to enter either: Rock, Paper or Scissors
function userPlay() {
    let userChoice = prompt(`Enter your selection - Rock, Paper or Scissors: `);
    return userChoice;
}

// Randomly return either: Rock, Paper or Scissors
function computerPlay() {
    // ** Refactor function ** //
    const rock = 0;
    const paper = 1;
    const scissors = 2;

    // Generate random number: 0, 1 or 2.
    //console.log(Math.floor(Math.random() * 3));
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'Rock';
            break;

        case 1:
            return 'Paper';
            break;

        case 2:
            return 'Scissors';
            break;

        default:
            break;
    }
}

// A function to compare entries, determine result
function evaluateMatch(playerSelection, computerSelection) {
    // Rules of Rock, Paper, Scissors
    // Rock > Scissors
    // Paper > Rock
    // Scissors > Paper
    // Rock = Rock

    // Track player and computer score

    // ** Refactor Function ** //

    if(playerSelection.toLocaleLowerCase() == 'rock') {

        switch (computerSelection) {

            case 'Rock':
                return `Tie game: Player(${playerSelection}) = Computer(${computerSelection})`;
                break;

            case 'Paper':
                computerCount++;
                return `You lose: Player(${playerSelection}) < Computer(${computerSelection})`;
                break;

            case 'Scissors':
                playerCount++;
                alert(`Congratulations! You win: Player(${playerSelection}) > Computer(${computerSelection})`);
                return `You win: Player(${playerSelection}) > Computer(${computerSelection})`;
                break;

            default:
                break;
        }
    }

    if(playerSelection.toLocaleLowerCase() == 'paper') {

        switch (computerSelection) {

            case 'Paper':
                return `Tie game: Player(${playerSelection}) = Computer(${computerSelection})`;
                break;

            case 'Scissors':
                computerCount++;
                return `You lose: Player(${playerSelection}) < Computer(${computerSelection})`;
                break;

            case 'Rock':
                playerCount++;
                alert(`Congratulations! You win: Player(${playerSelection}) > Computer(${computerSelection})`);
                return `You win: Player(${playerSelection}) > Computer(${computerSelection})`;
                break;

            default:
                break;
        }
    }

    if(playerSelection.toLocaleLowerCase() == 'scissors') {

        switch (computerSelection) {

            case 'Scissors':
                return `Tie game: Player(${playerSelection}) = Computer(${computerSelection})`;
                break;

            case 'Rock':
                computerCount++;
                return `You lose: Player(${playerSelection}) < Computer(${computerSelection})`;
                break;

            case 'Paper':
                playerCount++;
                alert(`Congratulations! You win: Player(${playerSelection}) > Computer(${computerSelection})`);
                return `You win: Player(${playerSelection}) > Computer(${computerSelection})`;
                break;

            default:
                break;
        }
    }
}
