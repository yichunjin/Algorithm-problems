/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) {
        return 0;
    }
    let prod = 1, result = 0;
    let l = 0, r = 0;
    while (r < nums.length) {
        prod *= nums[r];
        while (prod >= k) {
            prod /= nums[l];
            l++
        }
        result += r - l + 1;
        r++;
    }
    return result;
};