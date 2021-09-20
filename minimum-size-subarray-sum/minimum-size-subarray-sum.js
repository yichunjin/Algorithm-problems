/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Infinity;
    let l = 0, r = l;
    let sum = nums[l];
    while (r < nums.length) {
        if (sum >= target) {
            let length = r - l + 1;
            result = Math.min(result, length);
            sum -= nums[l];
            l++;
        } else {
            r++;
            sum += nums[r];
            
        }
        
    }
    return result === Infinity ? 0 : result;
};