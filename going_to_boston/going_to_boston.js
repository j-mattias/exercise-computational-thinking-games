const maxScore = 18;
let totalScore = 0, diceThrowsLeft = 3;

for (; diceThrowsLeft > 0; diceThrowsLeft--) {
    let highestRoll = 0;

    for (let i = 0; diceThrowsLeft > i; i++) {
        dice = Math.floor(Math.random() * 6 + 1);
        highestRoll = (dice > highestRoll) ? dice : highestRoll;
        console.log(dice);
    }

    console.log(`Highest roll ${highestRoll}`);
    totalScore += highestRoll;
}
console.log(`Total score: ${totalScore} (Max Score: ${maxScore})`);