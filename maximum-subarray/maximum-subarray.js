/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let max = Math.max(prev + nums[i], nums[i]);
        prev = max;
        res = Math.max(res, prev);
    }
    return res;
};