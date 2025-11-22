const nums = [5, 2, 9, 1, 7, 3];

let maxNum = nums[0];
let minNum = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxNum) {
        maxNum = nums[i];
    }
    if (nums[i] < minNum) {
        minNum = nums[i];
    }
}

console.log("Maximum:", maxNum);
console.log("Minimum:", minNum);
