function count_zero(str) {
    console.log(str);
    let count = 0;
    for (const value of str) {
        if (value === "0") {
            count++;
        }
    }
    return count;
}
const binarString = "011001100000000000010000011000";
const result = count_zero(binarString);
console.log("Number of zeros: ", result);
