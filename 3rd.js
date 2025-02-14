function make_avg(arr, arrLen) {
    console.log("The input array is:", arr);
    let sum = 0;
    console.log("Index values of the array are: ");
    for (let i = 0; i < arrLen; i++) {
        let num = arr[i];
        console.log(num);
        sum = sum + num;
    }
    const avg = sum / arrLen;
    return avg;
}
const nums = [30, 40, 50, 60, 70];
const len = nums.length;
const result = make_avg(nums, len);
console.log("Average of the values of the array:", result);
