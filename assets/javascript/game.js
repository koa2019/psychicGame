$(document).ready(function () {

    // variables
    let wins = 0
    let loss = 0
    let numGuess = 3
    let guess

    // define functions
    function renderWins() {
        document.querySelector('#wins').textContent = wins
    }
    function renderLosses() {
        document.querySelector('#loss').textContent = loss
    }
    function renderNumGuess() {
        document.querySelector('#numGuess').textContent = numGuess
    }

    // call functions
    renderWins()
    renderLosses()
    renderNumGuess()

})