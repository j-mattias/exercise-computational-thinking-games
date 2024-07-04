// let play = true;

// while (play) {
//     console.clear();
//     let totalThrows = 0, goal = 1;
//     const stopGame = 6;
    
//     while (goal <= stopGame) {
//         let dice = Math.floor(Math.random() * 6 + 1);
//         totalThrows++;
    
//         console.log(dice);
    
//         if (dice === goal) {
//             goal++;
//             console.log(`${dice} Hit goal!`);
//         }
//     }
//     console.log(`You win! It took ${totalThrows} throws.`);
//     play = confirm("Spela igen?");
// }
lowScore = Infinity;

for (let i = 0; i < 100; i++) {

    let totalThrows = 0, goal = 1;
    const stopGame = 6;

    while (goal <= stopGame) {
        let dice = Math.floor(Math.random() * 6 + 1);
        totalThrows++;

        if (dice === goal) {
            goal++;
        }
    }

    console.log(totalThrows);
    if (totalThrows < lowScore) {
        lowScore = totalThrows;
    }
}
console.log(`Your lowest result was ${lowScore} throws`);