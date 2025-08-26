let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = "Please enter a number between 1 and 10.";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "Too high! Try again.";
    message.style.color = "red";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
}
