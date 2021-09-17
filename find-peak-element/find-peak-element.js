/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if ((mid === start || nums[mid - 1] < nums[mid]) && (mid === end || nums[mid + 1] < nums[mid])) {
            return mid;
        }
        if (mid === start || nums[mid + 1] > nums[mid - 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};