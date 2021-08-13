/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        nums[i] = a*n*n + b*n + c;
    }
    return nums.sort((a, b) => a - b)
};