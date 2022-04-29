/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNum = getRandomIntInclusive(1, 20); //start w Rand #
console.log(randNum);
let messageObj = document.querySelector(".message");

let score = 20; // GLOBAL variable (accessible by all functions)
let scoreObj = document.querySelector(".score");

let highscore = 0


function check() {
  let guess = Number(document.querySelector(".guess").value);
  if (guess === randNum) {
    //alert('win')
    messageObj.textContent = "You win!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = randNum
    if (score > highscore){
      highscore = score
      document.querySelector(".highscore").textContent = highscore
    }
  } else if (guess < randNum) {
    //alert('too low')
    messageObj.textContent = "Too low. Guess Again";
    score -= 1;
    scoreObj.textContent = score;
  } else if (guess > randNum) {
    //alert('too high')
    messageObj.textContent = "Too high. Guess Again";
    score -= 1;
    scoreObj.textContent = score;
  }
}

function again() {
  alert("Star over!")
  document.body.style.backgroundColor = "black"
  randNum = getRandomIntInclusive(1, 20)
  document.querySelector(".number").textContent = "?"
  score = 20
  scoreObj.textContent = score 
  guess = document.querySelector(".guess").value = ' '
  messageObj.textContent = "Start guessing..." 
}

//document.querySelector()

//document.querySelector()
