/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash ={};
  for (let i = 0; i < nums.length; i++) {
      let n = hash[target - nums[i]];
      if (n !== undefined && n !== i) {
          return [i, n];
      }
      hash[nums[i]] = i;
  }
};