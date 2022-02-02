
/* JavaScript code for Rock Paper Scissors Game */

// Randomly return either: Rock, Paper or Scissors
function computerPlay() {

    // ** Refactor function **
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