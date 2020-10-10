$(document).ready(function () {

    // variables
    let wins = 0
    let loss = 0
    let numGuess = 3
    let guess
    let gameOverMessage = "Oh-no! You're out of guesses"

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
    function renderUserGuess() {
        document.querySelector('#userGuess').textContent = guess
    }
    function renderZeroGuess() {
        document.querySelector("#status").textContent = gameOverMessage
        console.log("hit numGuess conditional")
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



    // event listener to listen for a keyboard input
    document.onkeyup = function (e) {

        // assigns keyboard input to guess variable
        guess = e.key
        guess.toLowerCase()


        // checks to make sure user has enough guesses to play
        if (numGuess === 0) {
            return renderZeroGuess()
        }
        else {
            renderUserGuess(guess)

            if (guess === randLetter) {
                wins++
                alert('winner')
            }
            else {
                loss++
                numGuess--
            }
        }
        renderWins()
        renderLosses()
        renderNumGuess()


    }

})