//  ~ - ~ - ~ - ~ DECLARATIONS ~ - ~ - ~ - ~ //


// alphabet array
var alpha = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","N","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


// object called "nationalParksObject" with each national park name as an array
var nationalParksObject = {
  grandCanyon: ["G","R","A","N","D","C","A","N","Y","O","N"],
  yosemite: ["Y","O","S","E","M","I","T","E"],
  zion: ["Z","I","O","N"],
  yellowstone: ["Y","E","L","L","O","W","S","T","O","N","E"],
  olympic: ["O","L","Y","M","P","I","C"],
  mountRaineir: ["M","O","U","N","T","R","A","I","N","E","I","R"],
  deathValley: ["D","E","A","T","H","V","A","L","L","E","Y"],
  sequoia: ["S","E","Q","U","O","I","A"],
  redwood: ["R","E","D","W","O","O","D"]
};


//turn nationalParksObject into an array
var nationalParksArray = [nationalParksObject.grandCanyon, nationalParksObject.yosemite, nationalParksObject.zion, nationalParksObject.yellowstone, nationalParksObject.olympic, nationalParksObject.mountRaineir, nationalParksObject.deathValley, nationalParksObject.sequoia, nationalParksObject.redwood];


// index counter
var gameIndex = 0;


//guess counter
var guessIndex = 0;



// array for backgroundPic src location
var bgPicture = ["assets/images/grandCanyon.jpg", "assets/images/yosemite.jpg", "assets/images/zion.jpg", "assets/images/yellowstone.jpg", "assets/images/olympic.jpg", "assets/images/mountRainier.jpg", "assets/images/deathValley.jpg", "assets/images/sequoia.jpg", "assets/images/redwood.jpg", "assets/images/gameover.jpg"];









//put correct number of blank spaces in HTML document





//record which key was pressed
    var userInput
    // change all inputs to captial letters
    var userInputCap = userInput.toUpperCase();




//add intput to userInputArray
    // array for holding whichever key is pressed
    var userInputArray = [];
    //function that adds guessed letter to userInputArray
    function addGuess(){
      userInputArray.push("userInput");
    }



// check to see if input is a letter
    // variable that holds -1 if input is not a letter
    var  letterCheckHolder = alpha.indexOf(userInputArray);
    // function to check if input is a letter
    function notLetter(){
      if (letterCheckHolder === -1) {
        return true;
      }
    }


//check to see that there are no more puzzles
    function noMorePuzzles(){
      if (gameIndex === nationalParksArray.length) {
        return true;
    }



//check to see that there are no more guesses
    // variable for holding current number of remaining guesses
    var remainingGuesses = (nationalParksArray[gameIndex].length + 5);
    // function for checking if there are any guesses left
    function noMoreGuesses(){
      if (remainingGuesses === 0) {
        return true;
    }
    //function that counts and displays remaining guesses
    function updateRemainingGuesses(){
      document.querySelector("#guessesCount").innerHTML = remainingGuesses;
    }
    //function that decreases guess count by one
      function lowerGuessCount(){
        remainingGuesses--;
      }


//check to see if input has already been guessed
    // variable that holds -1 if input has already been guessed
    var alreadyGuessedHolder = userInputArray.indexOf(userInputArray);
    // functions that checks if guessed letter has already been tried
    function alreadyGuessed(){
      if (alreadyGuessedHolder === -1) {
        return true;
      }
    }



//check to see if input is correct or incorrect





//swap out blank spaces with correct answers





//display guessed letters
    // function that displays guessed letters
    function updateGuessedLetters(){
      document.querySelector("#lettersGuessed").innerHTML = userInputArray[guessIndex];
    }











//  ~ - ~ - ~ - ~ FUNCTIONS ~ - ~ - ~ - ~ //

  //function to see if game can start
  function startGame() {
    // check to see if the game is over
    if (gameIndex() < nationalParksArray.length-1) {
      //game is not over
      function setBackground(){
      document.body.style.backgroundImage= "url(bgPicture[gameIndex])"
      }
    } else {
      // game IS over, display game over picture
      function setBackground(){
      document.querySelector("#backgroundPic").setAttribute ("src", bgPicture[8])
      }
    }
  }




//  ~ - ~ - ~ - ~ MAIN PROCESSES ~ - ~ - ~ - ~ //

startGame();
updateRemainingGuesses();

document.onkeyup = function(event) {

  //record which key was pressed
  userInput = event.key;

  //add intput to userInputArray
  addGuess();

  // check to see if input is a letter
  if (notLetter === true) {
    return;
  }

  // TEST~TEST~TEST~TEST~TEST~TEST~TEST~TEST~TEST~TEST~TEST~TEST
  console.log(userInputCap);

  // check to see that there are no more puzzles
  if (noMorePuzzles === true) {
    return;
  }

  // check to see that there are no more guesses
  if (noMoreGuesses === true) {
    return;
  }

  //check to see if input has already been guessed
  if (alreadyGuessed === true) {
    return;
  }
  //lower remaining guess count by 1
  lowerGuessCount();



  gameIndex++;
  startGame();
  updateRemainingGuesses();
};
