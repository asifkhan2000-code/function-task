const prompt = require("prompt-sync")();
function odd_even(number) {
    if (number % 2 === 0) {
        console.log(number, "is an even number");
        return "Even";
    }
    console.log(number, "is an odd number");
    return "Odd";
}
const num = parseInt(prompt("Enter an integer number: "));
const result = odd_even(num);
console.log(result);