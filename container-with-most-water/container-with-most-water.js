/**
 * @param {number[]} height
 * @return {number}
 */
// testcases:
// [1, 1], [9, 9], [0, 9], [1,2,3,4,5,6,7,8,9]
var maxArea = function(height) {
    let max = 0;
    let i = 0; 
    let j = height.length - 1;
    while ( i < j) {
        let water = Math.min(height[i], height[j]) * (j - i);
        max = Math.max(water, max);
        if (height[i] > height[j]) {
            j = j - 1;
        } else {
            i = i + 1;
        }
    }
    return max;
};