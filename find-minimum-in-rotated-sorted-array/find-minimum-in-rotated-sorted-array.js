/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > nums[nums.length - 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return nums[start];
};