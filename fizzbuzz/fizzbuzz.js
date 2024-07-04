for (let num = 1; num <= 100; num++) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log(`FizzBuzz (${num} / 3 or 5)`);
    } else if (num % 3 === 0) {
        console.log(`Fizz (${num} / 3)`);
    } else if (num % 5 === 0) {
        console.log(`Buzz (${num} / 5)`);
    }
}