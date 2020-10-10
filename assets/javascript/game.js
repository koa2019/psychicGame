$(document).ready(function () {

    // variables
    let wins = 0
    let loss = 0
    let numGuess = 3
    let guess

    // define functions
    // functions render values to browser
    function renderWins() {
        document.querySelector('#wins').textContent = wins
    }
    function renderLosses() {
        document.querySelector('#loss').textContent = loss
    }
    function renderNumGuess() {
        document.querySelector('#numGuess').textContent = numGuess
    }
    function renderUserGuess(){
        document.querySelector('#userGuess').textContent = guess
    }

    // function picks random letter from alphabet
    // site: https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
    function getRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        return randomCharacter
    }

    


    // call functions
    renderWins()
    renderLosses()
    renderNumGuess()
    renderUserGuess()
    let randLetter = getRandomLetter()
    console.log(randLetter)

    // event listener to capture user's input 
    document.onkeyup = function(e){
        guess = e.key
        renderUserGuess(guess)
    }


})