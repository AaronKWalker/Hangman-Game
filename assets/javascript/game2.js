//  ~ - ~ - ~ - ~ declarations ~ - ~ - ~ - ~ //



// alphabet array
var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

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
var guessCountDown = 0;

// array for backgroundPic src location
var bgPicture = ["assets/images/grandCanyon.jpg", "assets/images/yosemite.jpg", "assets/images/zion02.jpg", "assets/images/yellowstone02.jpg", "assets/images/olympic02.jpg", "assets/images/mountRainier.jpg", "assets/images/deathValley.jpg", "assets/images/sequoia.jpg", "assets/images/redwood.jpg", "assets/images/gameover.jpg", "assets/images/youwon03.gif"];

// holder for keypress
var userInput

// array for holding whichever key is pressed
var userInputArray = [];

// variable for storing # of inputBlanks interations
var numberOfLoops = 0;

//variable to hold isNotLetter's status
var isNotLetterVar


var checkAnswerVar
var guessedLettersArray = [];
var newGuessAdded = -1;
var noMoreGuesses
var alreadyGuessed
var checkFalse
var filledInBlankSpotCounter = 0;
var noMoreBlankSpots
var lastGame
var check

//=================== functions ===================//

// set the background picure
function setBackground(){
document.querySelector("#backgroundPic").setAttribute ("background", bgPicture[gameIndex])
}


//put correct number of blank spaces in HTML document
function inputBlanks(){
  for (var i = 0; i < nationalParksArray[gameIndex].length; i++) {
    var holder = document.createElement("span");
    holder.setAttribute("id","blank"+numberOfLoops);
    var blankSpot = document.createTextNode("_  ");
    holder.appendChild(blankSpot);
    document.querySelector("#blankSpotContainer").appendChild(holder);
    numberOfLoops++;
  }
}


//set correct number of guesses available
function setGuessesCount(){
  guessCountDown = (nationalParksArray[gameIndex].length + 3);
}

//display the number of guesses available
function displayGuessCount(){
  var holder = document.createElement("span");
  var holderHolder = document.createTextNode(guessCountDown);
  holder.appendChild(holderHolder);
  document.querySelector("#guessCounter").appendChild(holder);
}


//display change in number of guesses available
function displayNewGuessCount(){
  document.querySelector("#guessCounter").innerHTML =
  guessCountDown;
}


//check if user's guess is a letter, if input is NOT a letter, returns true, otherwise returns false
function isNotLetter(){
  var checkInput = alpha.indexOf(userInput);
  if (checkInput === -1) {
    //input is not a letter
    isNotLetterVar = true;
  }else {
    //inpus is a letter
    isNotLetterVar = false;
  }
}


//check if user's guess is correct
function checkAnswer(){
  check = nationalParksArray[gameIndex].indexOf(userInput);
  if (check === -1) {
    //wrong answer! function will return false
    guessCountDown--;
    displayNewGuessCount();
    checkFalse = false;
    return checkFalse;
  }else {
    //correct answer - log sub-array indexes where correct answers occurs
    var subArrayIndexLog = [];
    var idx = nationalParksArray[gameIndex].indexOf(userInput);
    while (idx != -1) {
      subArrayIndexLog.push(idx);
      idx = nationalParksArray[gameIndex].indexOf(userInput, idx+1);
    }

    //commented out in case I need to bring it back
    // for (var i = 0; i < nationalParksArray[gameIndex].length; i++) {
    //   if (nationalParksArray[gameIndex][i] == userInput);
    //   subArrayIndexLog.push(i);
    // }

    //replace blank spots in HTML with correctly-guessed letter(s)
    for (var j = 0; j < subArrayIndexLog.length; j++) {
      document.querySelector("#blank"+subArrayIndexLog[j]).innerHTML = userInput;
      filledInBlankSpotCounter++;
    }
    displayNewGuessCount();
    checkFalse = true;
    return checkFalse;
  }
}


// records and displays letters guessed
function guessedLetters(){
//check if already guessed
  if (guessedLettersArray.indexOf(userInput) == -1) {
    //input has NOT already been guessed

    //record input
    guessedLettersArray.push(userInput);
    newGuessAdded++;
    //display letters guessed
    document.querySelector("#lettersGuessedContainer").innerHTML = guessedLettersArray;
    alreadyGuessed = false;
    return alreadyGuessed;
  } else {
    //input has already been guessed
    alreadyGuessed = true;
    return alreadyGuessed;
  }
}



//checks if user is out of guesses
function outOfGuesses(){
  if (guessCountDown == 0) {
    // user has no guesses, function will return false
    noMoreGuesses = true;
    return noMoreGuesses;
  } else {
    // user still has guesses left
    noMoreGuesses = false;
    return noMoreGuesses;
  }
}


//checks if there are any black spots left to fill
function blankSpotCheck(){
  if (filledInBlankSpotCounter === nationalParksArray[gameIndex].length) {
    noMoreBlankSpots = true;
    return noMoreBlankSpots;
  }else {
    noMoreBlankSpots = false;
    return noMoreBlankSpots;
  }
}

//check if on the last game
function lastGameCheck(){
  if (gameIndex === 7) {
    lastGame = true;
    return lastGame;
  }
}


//clears out error message
function clearErrorMessage(){
  var clearErrorMessage = document.querySelector("#errorMessage");
  while (clearErrorMessage.firstChild) {
    clearErrorMessage.removeChild(clearErrorMessage.firstChild);
  }
}


//resets EVERYTHING
function resetAll(){
  //clear out guess counter
  var clearGuessCounter = document.querySelector("#guessCounter");
  while (clearGuessCounter.firstChild) {
    clearGuessCounter.removeChild(clearGuessCounter.firstChild);
  }
  //clear out guessed letters
  var clearGuessedLetters = document.querySelector("#lettersGuessedContainer");
  while (clearGuessedLetters.firstChild) {
    clearGuessedLetters.removeChild(clearGuessedLetters.firstChild);
  }
  //clear out blank spots
  var clearBlankSpots = document.querySelector("#blankSpotContainer");
  while (clearBlankSpots.firstChild) {
    clearBlankSpots.removeChild(clearBlankSpots.firstChild);
  }
  //clear out variables with assigned values
  guessCountDown = 0;
  userInputArray = [];
  numberOfLoops = 0;
  guessedLettersArray = [];
  filledInBlankSpotCounter = 0;
  //set variables to 'undefined'
  userInput = (function () { return; })();
  isNotLetterVar = (function () { return; })();
  checkAnswerVar = (function () { return; })();
  newGuessAdded = (function () { return; })();
  noMoreGuesses = (function () { return; })();
  alreadyGuessed = (function () { return; })();
  checkFalse = (function () { return; })();
  noMoreBlankSpots = (function () { return; })();
  check = (function () { return; })();
}




//=================== main process ===================//

setBackground();
inputBlanks();
setGuessesCount();
displayGuessCount();
guessedLetters();
clearErrorMessage();
console.log("I got past the initial load");

document.onkeyup = function(event){
  clearErrorMessage();

  console.log("I got past clearErrorMessage");

  //check if user has any remaining guesses;
  outOfGuesses();
  if (noMoreGuesses === true) {
    document.querySelector("#backgroundPic").setAttribute ("background", bgPicture[9]);
    return;
  }

  console.log("I got past outOfGuesses");
  console.log("THERE ARE STILL GUESSES LEFT!!!");

  //record which key is pressed
  userInput = event.key;
  userInput = userInput.toUpperCase();

  console.log(userInput);
  console.log("I got past userInput");
  console.log("IF I STOP HERE, INPUT IS NOT A LETTER!!!");

  //check to see if input is a letter
  isNotLetter();
  if (isNotLetterVar === true) {
    document.querySelector("#errorMessage").innerHTML = "INPUT IS NOT A LETTER!!!";
    return;
  }

  console.log("I got past isNotLetter");
  console.log("INPUT IS A LETTER OF THE ALPHABET!!!");

  //check to see if input has been tried before
  guessedLetters();
  if (alreadyGuessed === true) {
    document.querySelector("#errorMessage").innerHTML = "YOU HAVE ALREADY TRIED THAT GUESS!!!";
    return;
  }

  console.log("I got past guessedLetters");
  console.log("INPUT HAS NOT BEEN TRIED YET BUT IS WRONG!!!");

  //check to see if input is wrong
  checkAnswer();
  if (checkFalse === false) {
    document.querySelector("#errorMessage").innerHTML = "WRONG!!! SO VERY VERY WRONG!!!";
    return;
  }

  console.log("I got past checkAnswer");
  console.log("THE ANSWER WAS CORRECT!!!!");

  //check to see if there are any remaining blank spots
  blankSpotCheck();
  if (noMoreBlankSpots === true) {
    lastGameCheck();
    if (lastGame == true) {
      //YOU WON! YOU WON! YOU WON!
      document.querySelector("#backgroundPic").setAttribute ("background", bgPicture[10]);
      return;
    } else {
      // load next game
      gameIndex++;
      setBackground();
      resetAll();
      setGuessesCount();
      displayGuessCount();
      clearErrorMessage();
      inputBlanks();
    }
    return;

  }

  console.log("I got past blankSpotCheck");
  console.log("THERE ARE BLANK SPOTS REMAINING!!!");

  //check if user has any remaining guesses;
  outOfGuesses();
  if (noMoreGuesses === true) {
    document.querySelector("#backgroundPic").setAttribute ("background", bgPicture[9]);
    return;
  }

  console.log("I got past outOfGuesses");
  console.log("THIS IS THE END OF THE ROAD!!!");
}
