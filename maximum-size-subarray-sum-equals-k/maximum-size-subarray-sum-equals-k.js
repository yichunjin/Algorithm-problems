/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let prefix = 0, max = 0;
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        if (prefix === k) {
            max = i + 1;
        }
        if (map[prefix - k] !== undefined) {
            max = Math.max(max, i - map[prefix - k]);
        }
        if (map[prefix] === undefined) {
            map[prefix] = i;
        }
    }
    return max;
};