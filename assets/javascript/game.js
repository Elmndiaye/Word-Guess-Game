//VARIABLES SETUP
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var yourGuessesSoFar = [];
var compChoices = ["a", "r", "g", "i", "v"];

//SHOW VARIABLES ON SCREEN
document.getElementById("winCounter").textContent = wins;
document.getElementById("lossesCounter").textContent = losses;
document.getElementById("guessesLeft").textContent = guessesLeft;

//GAMEOVER FUNCTION
function gameReset() {
    guessesLeft = 5;
    yourGuessesSoFar = [];
    comGuess = compChoices[Math.floor(Math.random() * compChoices.length )];
};

var comGuess = compChoices[Math.floor(Math.random() * compChoices.length )];
// document.getElementById("compGuess").textContent = comGuess;

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    document.getElementById("userGuess").textContent = userGuess; 

    if (userGuess === comGuess) {
        //USER GUESSED CORRECTLY
        wins++;
        document.getElementById("winCounter").textContent = wins;
        document.getElementById("compGuess").textContent = comGuess;
        gameReset();   
        } else {
        //USER GUESS INCORRECTLY
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = guessesLeft; 
        yourGuessesSoFar.push(event.key.toLowerCase());
        document.getElementById("misses").textContent = yourGuessesSoFar;
    }

    if (guessesLeft === 0) {
        //USER LOST THE GAME
        losses++;
        document.getElementById("lossesCounter").textContent = losses;  
        document.getElementById("compGuess").textContent = comGuess
        gameReset();
    }

//document.querySelector("#game").innerHTML = html;
};
