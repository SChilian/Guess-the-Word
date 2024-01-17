const playerGuessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const input = document.querySelector(".letter");
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
        message.innerText="";
        const check = inputValidation(guessInput);
        makeGuess(guessInput); 
        input.value ="";
        
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
                showLetters();
                wordInProgress(guessedLetters)
            }
    };

    const showLetters = function () {
        playerGuessedLetters.innerHTML = "";
        for ( const letter of guessedLetters) {
          const li = document.createElement("li");
          li.innerText = letter; 
          playerGuessedLetters.append(li);
        }
    };


    const wordInProgress = function (guessedLetters) {
        const wordUpper = word.toUpperCase();
        const wordArray = wordUpper.split("");
        const updatedLetter = [];
       for (const letter of wordArray) {
           if (guessedLetters.includes(letter)) {
            updatedLetter.push(letter.toUpperCase());
          } else {
              updatedLetter.push("●");
               //console.log(updatedLetter)
                inProgress.innerText = updatedLetter.join("");
          }
        }
        guessedCorrectly();
    };

    const guessedCorrectly = function () {
        if (word.toUpperCase() === inProgress.innerText) {
            message.classList.add("win");
            message.innerText = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
        }
}

   
//console.log(makeGuess("l"));
