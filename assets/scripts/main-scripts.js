
/* Rock Paper Scissors Game */

const rock = document.querySelector(`figure[data-selection="rock"]`);
//console.log(rock);
rock.addEventListener('click', playGame);

function playGame() {
    const confirm = window.confirm(`You Chose Rock! \nConfirm Y/N?`);
    if(confirm) {
        alert(`Let the Games Begin!`);
    }
    else {
        alert(`You have cancelled your selection of Rock. \nPlease choose again.`);
    }
}