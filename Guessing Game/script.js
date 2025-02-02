let randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let guessingNumber = randomNumber(1, 100);

console.log(guessingNumber);

document.querySelector(".Guess").textContent = guessingNumber;
document.querySelector(".Guess").textContent = "?";
let score = 100;
function playSound() {
  var sound = new Audio("Too Low/to/your/fail.mp3");
  sound.play();
}

function guessedAnswer() {
  let guessingValue = document.getElementById("guessedNumber").value;
  console.log(guessingValue);
  if (guessingValue < guessingNumber) {
    document.querySelector(".result").textContent = " Too Low";
    score = score - 10;

    document.querySelector(".score").textContent = score;
  } else if (guessingValue > guessingNumber) {
    document.querySelector(".result").textContent = "Result: Too High";
    score = score - 10;

    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".result").textContent = "Result: You Won";
    document.querySelector(".Guess").textContent = guessingNumber;
    Style.display = "block";
  }

  if (score == -10) {
    location.reload();
  }
}

function reset() {
  location.reload();
}
