const playerGuessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const input = document.querySelector("input");
const inProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message")
const hiddenButton = document.querySelector(".play-again")

const word = "magnolia";
const guessedLetters = [];


const letterSymbol = function (word) {
    const symbols = [];
    for (const letter of word) {
        console.log(letter);
        symbols.push("●");
    }

    inProgress.innerText = symbols.join("");

    };

    letterSymbol(word);

    guessButton.addEventListener("click", function(e) {
        e.preventDefault();
        
        const guessInput = input.value;
        //console.log(guessInput);
        input.value = "";
        message.innerText="";
        const check = inputValidation(guessInput);
        makeGuess(guessInput);
    
        
    });

    const inputValidation = function (input) {
         const acceptedLetter = /[a-zA-Z]/;
         if (input.length === 0) {
            message.innerText = "Please enter a letter!";
         } else if (input.length > 1) {
            message.innerText = "Enter only one letter!";
         } else if (!input.match(acceptedLetter)) {
            message.innerText = "Enter a letter between A-Z!";
         } else {
            return input;
         };
    };

    const makeGuess = function (guessInput) {
        guessInput = guessInput.toUpperCase();
            if (guessedLetters.includes(guessInput)) {
                message.innerText = "You already tried that letter. Try again!";
            } else {
                guessedLetters.push(guessInput);
                console.log (guessedLetters);
        
                
            }
        
    };

    


