
// JavaScript Logic by me, Front end by Chat GPT, because i
// have 2nd sem final tommarrow


let box = document.querySelector(".box");
let submit = document.querySelector(".submit");
let paragraph = document.querySelector(".lowOrHigh");
let remainGuess = document.querySelector(".remainGuess");
let prevGuess = document.querySelector(".prevGuess");
let newGameSelect = document.querySelector(".newGame");

let randomNumber = Math.floor((Math.random() * 100) + 1);
let playGame = true;
let numGuess = 1;

if (playGame) {
    submit.addEventListener("click", () => {
        const userGuess = box.value;
        validateGuess(userGuess);
    });
}

function validateGuess(userGuess) {
    userGuess = Number(userGuess); // Ensure userGuess is a number
    if (isNaN(userGuess)) {
        alert("Please enter a valid number...");
    } else if (userGuess < 1) {
        alert("Please enter a number greater than 1...");
    } else if (userGuess > 100) {
        alert("Please enter a number less than 100...");
    } else {
        if (numGuess === 10) {
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            checkGuess(userGuess);
            displayGuess(userGuess);
        }
    }
}

function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (userGuess < randomNumber) {
        displayMessage(`Number is TOO low`);
    } else if (userGuess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }
}

function displayGuess(userGuess) {
    box.value = '';
    remainGuess.innerText = `Your Remaining Guesses are: ${10 - numGuess}`; // Correct the plural and spacing
    numGuess++;
    prevGuess.innerHTML += `${userGuess}, `;
}

function displayMessage(message) {
    paragraph.innerText = `HINT: ${message}`;
}

function endGame() {
    playGame = false;
    box.setAttribute('disabled', '');
    newGameSelect.innerHTML = `<h1 id="new">Start a new game</h1>`;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#new");
    newGameButton.addEventListener("click", () => {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        box.value = '';
        numGuess = 1;
        prevGuess.innerText = '';
        paragraph.innerText = '';
        newGameSelect.innerText = '';
        box.removeAttribute('disabled');
        playGame = true;
    });
}
