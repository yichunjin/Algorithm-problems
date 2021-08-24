/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.legnth === 1) {
        return nums[0];
    } 
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }
        if ((mid % 2 === 0 && nums[mid] === nums[mid - 1]) || (mid % 2 === 1 && nums[mid] === nums[mid + 1])) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};