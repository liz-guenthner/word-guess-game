// create array of words
var words = ["davis", "coltrane", "mingus", "rollins", "ellington"];
    
var game = 0;
var wins = 0;
var losses = 0;

// pick random word from array
var word = words[Math.floor(Math.random() * words.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    

    // setup answerArray to show how many letters in the chosen word
    // using underscores
    var answerArray = [];

    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }

    // create a variable to hold the number of remainingLetters to be guessed
    var remainingLetters = word.length;

    // **** MAIN GAME LOOP ****

    // while there are letters left to be guessed
    while (remainingLetters > 0) {
      // show player their progress
      $( "#currentWord" ).append( answerArray.join(" ") );
      

      // if guess is blank or cancel
      if (userGuess == null) {
      //  exit game loop
        break;
      // if guess is more than one letter or no letters
      } else if (userGuess.length !== 1) {
      //  alert to guess single letter only
        $( "#flash-message" ).append( "Please enter a single letter." );
      //   valid guess 
      } else {
      //  update game state with guess
        for (var j = 0; j < word.length; j++) {
          //  if letter they guessed is in the word
          //  at that point or index
          if (word[j] === userGuess) {
          //update answer array with the letter they guessed
          //at that point or index
            answerArray[j] = userGuess;
            //  subtract 1 from remaining letters
            remainingLetters--;
          }
        }
      }
      //  **** END OF GAME LOOP ****
    }
    // let player know the word 
    $( "#currentWord" ).append( answerArray.join(" ") );

    // congratulate the player
    $( "#flash-message" ).append( "Good job! The answer was " + word );
};