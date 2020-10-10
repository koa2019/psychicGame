$(document).ready(function () {

    // variables
    let wins = 0
    let losses = 0
    let numGuess = 3
    let guess

    // define functions
    function renderWins() {
        console.log(wins)
        document.querySelector('#wins').innerHTML = wins
    }


    // call functions
    renderWins()

})