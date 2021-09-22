/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = -Infinity, prev = 0;
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(nums[i], nums[i] + prev);
        result = Math.max(result,prev);
    }
    return result;
};