// YouTube example https://www.youtube.com/watch?v=SvPtEr9tblU

// Examples I will need:
// document.getElementById("currentWord").innerHTML = "New text!";
// document.getElementById("myImage").src = "landscape.jpg";
// element.addEventListener("click", function(){ alert("Hello World!"); });

// create array of words
var words = ["davis", "coltrane", "mingus", "rollins", "ellington"];

// pick random word from array
var word = words[Math.floor(Math.random() * words.length)];

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
  alert(answerArray.join(" ")); // puts spaces in between each space or letter
  
  // get a guess from player
  var guess = prompt("Guess a letter, or click cancel to stop playing.");

  // if guess is blank or cancel
  if (guess == null) {
    // exit game loop
    break;
    // if guess is more than one letter or no letters
  } else if (guess.length !== 1) {
    // alert to guess single letter only
    alert("Please enter a single letter.");
    // valid guess 
  } else {
    // update game state with guess
    for (var j = 0; j < word.length; j++) {
      // if letter they guessed is in the word
      // at that point or index
      if (word[j] === guess) {
        //update answer array with the letter they guessed
        //at that point or index
        answerArray[j] = guess;
        // subtract 1 from remaining letters
        remainingLetters--;
      }
    }
  }
  //  **** END OF GAME LOOP ****
}
// let player know the word 
alert(answerArray.join(" "));
// congratulate the player
alert("Good job! The answer was " + word);