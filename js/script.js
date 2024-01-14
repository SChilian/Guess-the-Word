const playerGuessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const input = document.querySelector("input");
const inProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message")
const hiddenButton = document.querySelector(".play-again")

const word = "magnolia";


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
        console.log(guessInput);
        input.value = "";
    });



