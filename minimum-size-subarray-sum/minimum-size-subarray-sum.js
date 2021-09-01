/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let res = Infinity;
    let l = 0, r = 0;
    let sum = nums[0];
    while (l <= r && r < nums.length ) {
        if (sum < target) {
            r++;
            sum += nums[r];
        } else {
            res = Math.min(res, r - l + 1);
            sum -= nums[l];
            l++;
            
        }
    }
    if (res === Infinity) {
        return 0;
    }
    return res;
};