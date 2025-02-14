function sum(a, b) {
    const sum = a + b;
    console.log("Sum of", a, "and", b, "is: ");
    // The sum function does not return anything explicitly, so it implicitly returns undefined.
    // return sum;
}
const result = sum(2, 5);
// output: undefined;
console.log(result);
