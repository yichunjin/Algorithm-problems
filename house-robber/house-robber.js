/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let sums = [0, nums[0]]
    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i] + sums[0], sums[1]);
        sums[0] = sums[1];
        sums[1] = temp;
    }
    return sums[1]
};