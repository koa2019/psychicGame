$(document).ready(function () {

    // variables
    let wins = 0
    let loss = 0
    let numGuess = 3
    let userGuess = []
    let randLetter = null
    let guess = null
    const winnerMessage = " is Correct!"
    let gameOverMessage = "Game Over! You're out of guesses"

    // +++++++ FUNCTION DEFINTIONS ++++++++++

    // functions render various varible's values to browser when called
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
        document.querySelector('#userGuess').textContent = userGuess
    }
    function renderCorrectGuess() {
        document.querySelector('#correctLetterText').textContent = guess
    }
    // function renders winner message
    function renderWinnerMessage() {
        alert(guess + winnerMessage)
    }
    // functions renders Game Over message
    function renderGameOverMessage() {
        alert(gameOverMessage)
    }
    // function picks random letter from alphabet
    // site: https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
    function getRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        randLetter = alphabet[Math.floor(Math.random() * alphabet.length)]

    }

    function guessIsValid(guess) {

        // https://www.w3resource.com/javascript/form/all-letters-field.php
        var letters = /^[A-Za-z]+$/;
        if (guess.match(letters)) {
            return true;
        }
        else {
            alert("Please guess any letter in the alphabet")
            return false
        }
    }

    // function resets game, but keeps number of wins & losses
    function resetGame() {
        numGuess = 3
        guess = "?"
        userGuess = []
        renderWins()
        renderLosses()
        renderNumGuess()
        renderUserGuess()
        getRandomLetter()
        console.log('New Game. Letter to guess ' + randLetter)
    }

    // call functions when page loads
    renderNumGuess()
    getRandomLetter()
    console.log('Letter to guess ' + randLetter)


    // event listener for a keyboard input from user
    document.onkeyup = function (e) {


        // assigns keyboard input to guess variable 
        guess = e.key

        let isValidGuess = guessIsValid(guess)

        if (isValidGuess) {
            guess = guess.toLowerCase()
            numGuess--
            renderNumGuess()
        }
        else {
            return
        }

        // render user guess to browser
        userGuess.push(guess)
        console.log(userGuess)

        if (guess === randLetter) {
            wins++
            // renderCorrectGuess()
            renderWinnerMessage()
            renderWins()
            resetGame()
        }
        else {
            renderWins()
            renderLosses()
            renderUserGuess()
        }

        if (numGuess === 0) {
            loss++
            renderGameOverMessage()
            resetGame()
        }

    } // ends.onkeyup()
}) // ends document.ready()

