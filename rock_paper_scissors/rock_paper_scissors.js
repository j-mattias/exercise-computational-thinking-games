const maxWins = 3;
let numWinsPlayer1 = 0, numWinsPlayer2 = 0;

while (numWinsPlayer1 < maxWins && numWinsPlayer2 < maxWins) {
  const player1 = prompt("Pick rock, paper or scissors").toLowerCase();
  const player2 = prompt("Pick rock, paper or scissors").toLowerCase();
  console.log(`Player1: ${player1} vs. Player2: ${player2}`);

  if (player1 !== player2) {
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "paper") ||
      (player1 === "paper" && player2 === "rock")
    ) {
      numWinsPlayer1++;
      alert(`Player1 wins the round`);
    } else {
      numWinsPlayer2++;
      alert(`Player2 wins the round`);
    }
  } else {
    alert("Draw");
  }
  alert(`Current score: Player1 (${numWinsPlayer1}) | Player2 (${numWinsPlayer2})`);
}

if (numWinsPlayer1 === maxWins) {
    alert(`Player1 wins!`);
} else {
    alert(`Player2 wins!`);
}