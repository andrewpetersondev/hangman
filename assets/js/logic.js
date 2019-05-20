// ========== GLOBAL VARIABLES ===========================

// array for words
var words = ["computer", "programming", "javascript", "ajax", "mozilla", "open"];

// random word chosen by computer
var gameWord = "";

// this breaks the game word into individual letters to be stored in an array
var lettersInGameWord = [];

// this will be the number of blanks we show based on the solution
var numBlanks = 0;

// holds a mix of blank and solved letters 
var blanksAndSuccesses = [];

// holds the letters guessed
var lettersGuessed = "";

// holds all the wrong guesses
var wrongGuesses = [];

// game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 10;


// ================== FUNCTIONS ========================

// startGame();

function startGame() {

    // reset the guesses back to 0 
    numGuesses = 10;

    // randomly choose word from array
    gameWord = words[Math.floor(Math.random() * words.length)];

    // game word is broken into individual letters
    lettersInGameWord = gameWord.split("");

    // count the number of letters in the word
    numBlanks = lettersInGameWord.length;

    // print the solution to the console for testing
    console.log(gameWord);

    // reset the the guess and success array at each round
    blanksAndSuccesses = [];

    // reset the wrong guesses from the previous round
    wrongGuesses = [];

    // fill up the blanks and successed list with appropriate number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);

    // Reprints the guessesLeft to 9.
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // Prints the blanks at the beginning of each round in the HTML.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    // Clears the wrong guesses from the previous round.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

// checkLetters();

// roundComplete();

// ================ HTML UPDATES =========================

// ===================== MAIN PROCESS =======================

// start game by calling function startGame(); 
startGame();

// initiate function for capturing key clicks

// convert all key clicks to lowercase letters

// run the function that checks for correct guesses

// run the function that ends each round