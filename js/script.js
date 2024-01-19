const playerGuessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const input = document.querySelector(".letter");
const inProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message")
const hiddenButton = document.querySelector(".play-again")

let word = "magnolia";
const guessedLetters = [];
let remainingGameGuesses = 8;

const grabWord = async function () {
    const response = await fetch( 
        "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt"
    );
    const data = await response.text();
    console.log(data);
    const wordArray = data.split("\n");
    console.log(wordArray);

    const grabRandomWord = Math.floor(Math.random () * wordArray.length)
    console.log(wordArray);
    word = wordArray[grabRandomWord].trim();
    letterSymbol(word)
};
grabWord();


const letterSymbol = function (word) {
    const symbols = [];
    for (const letter of word) {
        console.log(letter);
        symbols.push("●");
    }

    inProgress.innerText = symbols.join("");

};



guessButton.addEventListener("click", function (e) {
    e.preventDefault();

    const guessInput = input.value;
    //console.log(guessInput);
    message.innerText = "";
    const check = inputValidation(guessInput);
    makeGuess(guessInput);
    input.value = "";

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
        console.log(guessedLetters);
        showLetters();
        guessCount(guessInput);
        wordInProgress(guessedLetters)
    }
};

const showLetters = function () {
    playerGuessedLetters.innerHTML = "";
    for (const letter of guessedLetters) {
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

        }
    }
    inProgress.innerText = updatedLetter.join("");
    guessedCorrectly();
};

const guessCount = function (guessInput) {
    const getWord = word.toUpperCase();
    if (!getWord.includes(guessInput)) {
        message.innerText = `Sorry, the letter ${guessInput} is not in the word.`;
        remainingGameGuesses -= 1;
    } else {
        message.innerText = `Yes, the letter ${guessInput} is in the word!`;
    }

    if (remainingGameGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
    } else if (remainingGameGuesses === 1) {
        span.innerText = `${remainingGameGuesses} guess`;
    } else {
        span.innerText = `${remainingGameGuesses} guesses`;
    }

}

const guessedCorrectly = function () {
    if (word.toUpperCase() === inProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
}



