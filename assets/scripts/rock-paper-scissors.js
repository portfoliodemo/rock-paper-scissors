/* Rock Paper Scissors */
/* Nathan Ryan */

// Variables
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('div');
const matchTracker = document.querySelector('div.match-tracker');
const matchCounter = document.createElement('h3');
const results = document.createElement('h2');
const finalResults = document.querySelector('div.final-results');
const champion = document.querySelector('div.champion');
const playAgain = document.querySelector('div.play-again');
const restart = document.createElement('h2');
const finalMessage = document.createElement('h2');
const score = document.createElement('h3');
let computerSelection = ``;
let playerSelection = ``;
let match = 0;
let playerWinTotal = 0;
let computerWinTotal = 0;
let scoreToWin = 5;
let gameOver = false;

// Computer choice, randomly return either: Rock, Paper or Scissors
function computerPlay() {
    const selections = [`Rock`, `Paper`, `Scissors`];
    const computerSelection = selections[(Math.floor(Math.random() * 3))];
    return computerSelection;
}

rock.addEventListener('click', () => {
    if(gameOver) {
        resetBoard();
    }
    playerSelection = rock.dataset.player;
    playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
    if(gameOver) {
        resetBoard();
    }
    playerSelection = paper.dataset.player;
    playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () => {
    if(gameOver) {
        resetBoard();
    }
    playerSelection = scissors.dataset.player;
    playerSelection = capitalize(playerSelection);
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

function capitalize(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function playRound(playerSelection, computerSelection) {

    match++;
    matchCounter.textContent = `Match #: ${match}`;
    matchTracker.appendChild(matchCounter);
    
    if(playerSelection === computerSelection) {
        results.style.color = "green";
        results.textContent = `Tie: ${playerSelection} vs ${computerSelection}`;
        score.textContent = `Score - Player: ${playerWinTotal} Computer: ${computerWinTotal}`;
        div.appendChild(results);
        div.appendChild(score);
        return;
    }

    if(playerSelection !== computerSelection) {
        switch (playerSelection) {

            case `Rock`:
                if(computerSelection === `Scissors`) {
                    playerWinTotal++;
                    if(playerWinTotal === scoreToWin) {
                        victory();
                        endGame();
                    } else if (playerWinTotal !== scoreToWin) {
                        winUpdate();
                    }
                } else if(computerSelection === `Paper`) {
                    computerWinTotal++;
                    if(computerWinTotal === scoreToWin) {
                        defeat();
                        endGame();
                    } else if (computerWinTotal !== scoreToWin) {
                        lossUpdate();
                    }
                }
                break;
    
            case `Paper`:
                if(computerSelection === `Rock`) {
                    playerWinTotal++;
                    if(playerWinTotal === scoreToWin) {
                        victory();
                        endGame();
                    } else if (playerWinTotal !== scoreToWin) {
                        winUpdate();
                    }
                } else if(computerSelection === `Scissors`) {
                    computerWinTotal++;
                    if(computerWinTotal === scoreToWin) {
                        defeat();
                        endGame();
                    } else if (computerWinTotal !== scoreToWin) {
                        lossUpdate();
                    }
                }
                break;
    
            case `Scissors`:
                if(computerSelection === `Paper`) {
                    playerWinTotal++;
                    if(playerWinTotal === scoreToWin) {
                        victory();
                        endGame();
                    } else if (playerWinTotal !== scoreToWin) {
                        winUpdate();
                    }
                } else if(computerSelection === `Rock`) {
                    computerWinTotal++;
                    if(computerWinTotal === scoreToWin) {
                        defeat();
                        endGame();
                    } else if (computerWinTotal !== scoreToWin) {
                        lossUpdate();
                    }
                }
                break;
    
            default: `System crash..please restart.`;
                break;
        }        
    }
}

function winUpdate() {
    results.style.color = "orange";
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    score.textContent = `Score - Player: ${playerWinTotal} Computer: ${computerWinTotal}`;
    div.appendChild(results);
    div.appendChild(score);
}

function lossUpdate() {
    results.style.color = "red";
    results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    score.textContent = `Score - Player: ${playerWinTotal} Computer: ${computerWinTotal}`;
    div.appendChild(results);
    div.appendChild(score);
}

function victory() {
    results.style.color = "orange";
    results.textContent = `You Win! ${playerSelection} vs ${computerSelection}`;
    score.textContent = `Final Score - Player: ${playerWinTotal} Computer: ${computerWinTotal}`;
    champion.style.display = "grid";
    div.appendChild(results);
    div.appendChild(score);
    finalMessage.textContent = `CHAMPION!`;
    finalResults.appendChild(finalMessage);
}

function defeat() {
    results.style.color = "red";
    results.textContent = `You Lose! ${playerSelection} vs ${computerSelection}`;
    score.textContent = `Final Score - Player: ${playerWinTotal} Computer: ${computerWinTotal}`;
    div.appendChild(results);
    div.appendChild(score);
    finalMessage.style.color = "red";
    finalMessage.textContent = `Game Over`;
    finalResults.appendChild(finalMessage);
}

function resetBoard() {
    match = 0;
    playerWinTotal = 0;
    computerWinTotal = 0;
    champion.style.display = "none";
    results.textContent = ``;
    matchCounter.textContent = ``;
    finalResults.textContent = ``;
    finalMessage.textContent = ``;
    restart.textContent = ``;
    gameOver = false;
}

function endGame() {
    // console.log(`Game Over`);
    restart.textContent = `Click Rock, Paper or Scissors to Play Again!`;
    playAgain.appendChild(restart);
    gameOver = true;
}