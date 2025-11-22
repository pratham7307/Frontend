const nums = [1, 3, 2, 3, 4, 3, 5];
const target = 3;

const count = nums.filter(num => num === target).length;

console.log(`Element ${target} appears ${count} times`);
