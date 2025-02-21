// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.


export function getConcatenation(nums) {

let ans = [];
const doubleLength = 2 * nums.length;
let countup = 0;

for (let i = 0; i < doubleLength; i++) {
  if (countdown > nums.length - 1) {
    countdown = 0;
  }
  ans.push(nums[countdown]);
  countdown++;
}

}
