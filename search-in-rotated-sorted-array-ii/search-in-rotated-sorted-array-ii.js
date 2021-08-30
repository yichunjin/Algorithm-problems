/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        
        if (nums[mid] === target) {
            return true;
        }
        if (nums[mid] === nums[r]) {
            r--;
        } else if (nums[mid] < nums[r]) {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return false;
};