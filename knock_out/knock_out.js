let totalScore = 0;
let knockOutNum = parseInt(prompt("Choose a knock out number (6-9"));
let goal = parseInt(prompt("Choose a goal (number)"));
console.log("--Game settings--");
console.log(`Knock out number: ${knockOutNum}`);
console.log(`Goal: ${goal}`);
console.log("--------")

while (totalScore < goal) {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);

    let rolled = dice1 + dice2;

    if (rolled === knockOutNum) {
        totalScore -= knockOutNum;
        console.log(`You rolled a knockout number: ${rolled}`);
        console.log(`Score: ${totalScore}`);
    } else {
        totalScore += rolled;
        console.log(`You rolled a: ${rolled}`);
        console.log(`Score: ${totalScore}`);
    }
}
console.log(`You win!`);