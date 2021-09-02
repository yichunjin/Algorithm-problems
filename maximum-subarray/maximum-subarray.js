/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let cur = Math.max(nums[i], nums[i] + prev);
        max = Math.max(cur, max);
        prev = cur;
    }
    return max;
};