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
var letterGuessed = "";

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
function checkLetters(letter) {

    // use a boolean to toggle a function on and off
    var letterInWord = false;

    // check if a letter exists inside an array
    for (var i = 0; i < gameWord.length; i++) {

        if (gameWord[i] === letter) {

            // if the letter exists in the game word then toggle boolean to true
            letterInWord = true;
        }

    }

    // if the letter exists then determine where it exists
    if (letterInWord) {

        // loop through the word
        for (var j = 0; j < gameWord.length; j++) {

            // populate the blanksAndSuccesses with every instance of the letter
            if (gameWord[j] === letter) {

                // set specific blank spaces to equal the correct letter
                // when there is a match
                blanksAndSuccesses[j] = letter;
            }
        }

        // log the current blanks and successed for testing
        console.log(blanksAndSuccesses);

    }

    // if the letter doesnt exist in the game word
    else {

        // add the letter to the this of wrong letters
        wrongGuesses.push(letter);

        // subtract one guess
        numGuesses--;

    }

}

// roundComplete();
function roundComplete() {

    // first log a status update to the console
    console.log("Win Count : " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

    // UPDATE HTML

    // update html to reflect new number of guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    // This will print the array of guesses and blanks onto the page.
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    // This will print the wrong guesses onto the page.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    // If our Word Guess string equals the solution.
    // (meaning that we guessed all the letters to match the solution)
    if (lettersInGameWord.toString() === blanksAndSuccesses.toString()) {

        // add to the win counter
        winCounter++; 

        // update win counter in html
        document.getElementById("win-counter").innerHTML = winCounter;

        // restart the game
        startGame();

    }

    // if we run out of guesses
    else if (numGuesses === 0) {

        // add to the loss counter
        lossCounter++;

        // update loss counter on html
        document.getElementById("loss-counter").innerHTML = lossCounter; 

        // restart game
        startGame();

    }

}



// ===================== MAIN PROCESS =======================

// start game by calling function startGame(); 
startGame();

// initiate function for capturing key clicks
document.onkeyup = function(event) {

// convert all key clicks to lowercase letters
letterGuessed = String.fromCharCode(event.which).toLowerCase(); 

// run the function that checks for correct guesses
checkLetters(letterGuessed);

// run the function that ends each round
roundComplete();

};

