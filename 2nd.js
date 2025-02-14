function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number,"is an even number");
        number = number / 2;
        return number;
    }
    console.log(number, "is an odd number");
    number = number * 2;
    return number;
}
let result = isEvenOrOdd(5);
console.log("final result is", result);
result = isEvenOrOdd(10);
console.log("final result is", result);
result = isEvenOrOdd(15);
console.log("final result is", result);
result = isEvenOrOdd(20);
console.log("final result is", result);

