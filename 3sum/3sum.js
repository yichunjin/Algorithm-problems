/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    
    const twoSum = (i) => {
        const seen = new Set();
        for (let j = i + 1; j < nums.length; j++) {
            let positive = 0 - nums[i] - nums[j];
            if (seen.has(positive)) {
                result.push([nums[i], nums[j], positive]);
                while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                    j++;
                }
            }
            seen.add(nums[j]);
        }
    }
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSum(i);
        }
    }
    
    return result;
};