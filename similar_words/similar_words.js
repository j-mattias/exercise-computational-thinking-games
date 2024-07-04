const word1 = prompt("Enter a word").toLowerCase();
const word2 = prompt("Enter another word").toLowerCase();
let letterCount = 0;
const lowestLen = (word1.length < word2.length) ? word1.length : word2.length;

console.log(`${word1} vs. ${word2}`);

for (let i = 0; i < lowestLen; i++) {
    if (word1[i] === word2[i]) {
        letterCount++;
    }
}
console.log(`${letterCount} letters appear in the same place in both words`);