/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0];
    let max = 1;
    let min = 1;
    for (let i of nums) {
        let curMax = i*max;
        max = Math.max(i, curMax, i * min);
        min = Math.min(i, curMax, i * min);
        result = Math.max(max, result);
    }
    return result;
};