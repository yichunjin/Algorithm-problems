/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let preSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let curSum = nums[i];
        if (preSum > 0) {
            curSum = preSum + nums[i]; 
        }
        if (curSum > max) {
            max = curSum;
        }
        preSum = curSum;
    }
    return max;
};