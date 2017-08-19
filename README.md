# Hangman Game

#### A simple game of hangman utilizing good-ol' hand-crafted code.

---

This game showcases my ability to create a fairly complex game after only learning javascript one week prior. It allowed for me to push my ability at the time to write complex logic that:

**verified inputs**
```javascript
  function isNotLetter(){
    var checkInput = alpha.indexOf(userInput);
    if (checkInput === -1) {
      isNotLetterVar = true;
    }else {
      isNotLetterVar = false;
    }
  }
```

**tested answers**
```javascript
  function checkAnswer(){
    check = nationalParksArray[gameIndex].indexOf(userInput);
    if (check === -1) {
      guessCountDown--;
      displayNewGuessCount();
      checkFalse = false;
      return checkFalse;
    }else {
      var subArrayIndexLog = [];
      var idx = nationalParksArray[gameIndex].indexOf(userInput);
      while (idx != -1) {
        subArrayIndexLog.push(idx);
        idx = nationalParksArray[gameIndex].indexOf(userInput, idx+1);
      }

      for (var j = 0; j < subArrayIndexLog.length; j++) {
        document.querySelector("#blank"+subArrayIndexLog[j]).innerHTML = userInput;
        filledInBlankSpotCounter++;
      }
      displayNewGuessCount();
      checkFalse = true;
      return checkFalse;
    }
  }
```

**tracked user guesses**
```javascript
function guessedLetters(){
  if (guessedLettersArray.indexOf(userInput) == -1) {
    guessedLettersArray.push(userInput);
    newGuessAdded++;
    document.querySelector("#lettersGuessedContainer").innerHTML = guessedLettersArray;
    alreadyGuessed = false;
    return alreadyGuessed;
  } else {
    alreadyGuessed = true;
    return alreadyGuessed;
  }
}
```

**dynamically created and filled in blanks based on the word being guessed**
```javascript
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
```
