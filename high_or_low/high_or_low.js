const secretNum = Math.floor(Math.random() * 100 + 1);
let playerGuess = 0;

while (playerGuess !== secretNum) {
    playerGuess = parseInt(prompt("Guess a number (1-100)"));
    if (playerGuess > secretNum) {
        alert("Too high!");
    } else if (playerGuess < secretNum) {
        alert("Too low!");
    }
}
alert(`You guessed the secret number! ${secretNum}`);