/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let lis = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i > -1; i--) {

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                lis[i] = Math.max(lis[i], 1 + lis[j]);
            }
        }
    }
    return Math.max(...lis)
};