/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let min = nums[Math.ceil((start + end) /2)];
    while (start <= end) {
        let mid = Math.ceil((start + end) /2);
        let left = nums[start];
        let right = nums[end];
        min = Math.min(min, nums[mid]);
        if (nums[mid] > right) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return min;
};