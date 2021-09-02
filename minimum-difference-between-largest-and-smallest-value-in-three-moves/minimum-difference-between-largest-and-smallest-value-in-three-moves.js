/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if (nums.length <= 4) {
        return 0;
    }
    let res = Infinity;
    nums.sort((a, b) => a - b);
    let l = 0, r = nums.length - 1;
    for (let i = 0; i < 4; i++) {
        res = Math.min(res, nums[nums.length - 4 + i] - nums[i]);
    }
    return res;
};