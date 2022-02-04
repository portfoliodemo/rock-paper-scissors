
/* Rudimentary Console Based Rock Paper Scissors Game */

// Get 'Start Game' button
const button = document.querySelector('.start');

// Listen for Start Game button click event
// playGame();
button.addEventListener("click", playGame);

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
    const userChoice = prompt(`Enter your selection: Rock, Paper or Scissors.`);
    
    // Validation needed to ensure only of the three values are entered, nothing else. 
    // (userChoice != 'Rock' || userChoice != 'Paper' || userChoice != 'Scissors') 

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

    // ** Refactor Function ** // 

    if(playerSelection == 'Rock') {

        switch (computerSelection) {

            case 'Rock':
                return `Tie game: Player(${playerSelection}) = Computer(${computerSelection})`;               
                break;
        
            case 'Paper':
                return `You lose: Player(${playerSelection}) < Computer(${computerSelection})`;
                break;

            case 'Scissors':
                alert(`Congratulations! You win: Player(${playerSelection}) > Computer(${computerSelection})`);
                return `You win: Player(${playerSelection}) > Computer(${computerSelection})`;
                break;

            default:
                break;
        }
    }

    if(playerSelection == 'Paper') {

        switch (computerSelection) {

            case 'Paper':
                return `Tie game: Player(${playerSelection}) = Computer(${computerSelection})`;               
                break;
        
            case 'Scissors':
                return `You lose: Player(${playerSelection}) < Computer(${computerSelection})`;
                break;

            case 'Rock':
                alert(`Congratulations! You win: Player(${playerSelection}) > Computer(${computerSelection})`);
                return `You win: Player(${playerSelection}) > Computer(${computerSelection})`;
                break;

            default:
                break;
        }
    }

    if(playerSelection == 'Scissors') {

        switch (computerSelection) {

            case 'Scissors':
                return `Tie game: Player(${playerSelection}) = Computer(${computerSelection})`;               
                break;
        
            case 'Rock':
                return `You lose: Player(${playerSelection}) < Computer(${computerSelection})`;
                break;

            case 'Paper':
                alert(`Congratulations! You win: Player(${playerSelection}) > Computer(${computerSelection})`);
                return `You win: Player(${playerSelection}) > Computer(${computerSelection})`;
                break;

            default:
                break;
        }
    }
}
