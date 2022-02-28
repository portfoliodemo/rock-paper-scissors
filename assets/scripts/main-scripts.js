
/* Rock Paper Scissors Game */

const rock = document.querySelector(`figure[data-selection="rock"]`);
const paper = document.querySelector(`figure[data-selection="paper"]`);
const scissors = document.querySelector(`figure[data-selection="scissors"]`);
const div = document.createElement('div');

rock.addEventListener('click', userRock);
paper.addEventListener('click', userPaper);
scissors.addEventListener('click', userScissors);

function userRock() {
    const playerChoice = `Rock`;
    const results = playGame(playerChoice);
    displayResults(results);
    // const confirm = window.confirm(`You Chose Rock! \nConfirm Y/N?`);
    // if(confirm) {
    //     const userChoice = `Rock`;
    //     const winner = playGame(userChoice);
    //     console.log(winner);
    // }
}

function userPaper() {
    const playerChoice = `Paper`;
    const results = playGame(playerChoice);
    displayResults(results);
    // const confirm = window.confirm(`You Chose Paper! \nConfirm Y/N?`);
    // if(confirm) {
    //     const userChoice = `Paper`;
    //     const winner = playGame(userChoice);        
    //     console.log(winner);
    // }
}

function userScissors() { 
    const playerChoice = `Scissors`;
    const results = playGame(playerChoice);
    displayResults(results);
    // const confirm = window.confirm(`You Chose Scissors! \nConfirm Y/N?`);
    // if(confirm) {
    //     const userChoice = `Scissors`;
    //     const winner = playGame(userChoice);
    //     console.log(winner);
    // }
}

function playGame(playerChoice) {
    const computer = computerPlay();
    return `${playerChoice} vs ${computer}`;
}

// Randomly return either: Rock, Paper or Scissors
function computerPlay() {

    const selections = [`Rock`, `Paper`, `Scissors`];
    const computerPick = selections[(Math.floor(Math.random() * 3))];
    return computerPick;

}

function displayResults(results) {
    console.log(results);
}
        // ** Refactor function ** //
    // const rock = 0;
    // const paper = 1;
    // const scissors = 2;

    // Generate random number: 0, 1 or 2.
    //console.log(Math.floor(Math.random() * 3));
    // const randomNumber = Math.floor(Math.random() * 3);

    // switch (randomNumber) {
    //     case 0:
    //         return 'Rock';
    //         break;

    //     case 1:
    //         return 'Paper';
    //         break;

    //     case 2:
    //         return 'Scissors';
    //         break;

    //     default:
    //         break;
    // }
//}

// const elements = document.querySelectorAll(`figure[data-selection]`);
// console.log(elements);

// console.log(rock);
// rock.addEventListener('click', playGame);
// paper.addEventListener('click', userPaper);

// function userPaper() {
//     alert(`Hello World!`);
// }

// function playGame() {
//     const confirm = window.confirm(`You Chose Rock! \nConfirm Y/N?`);
//     if(confirm) {
//         alert(`Let the Games Begin!`);
//     }
//     else {
//         alert(`You have cancelled your selection of Rock. \nPlease choose again.`);
//     }
// }