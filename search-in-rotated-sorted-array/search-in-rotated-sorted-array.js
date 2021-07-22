/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let result = -1;
  let rotated = 0;
  // find the retoated index
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
      let mid = Math.ceil((start + end) / 2);
      if (nums[mid] < nums[mid - 1]) {
          rotated = mid;
          break;
      }
      if (nums[mid] > nums[end]) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  // inplement binary search
  start = 0;
  end = nums.length - 1;
  while (start <= end) {
      let mid = Math.ceil((start + end) / 2);
      let realMid = (mid + rotated) % nums.length
      if (nums[realMid] === target) {
          return realMid;
      }
      if (nums[realMid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
  }
  return result;
};