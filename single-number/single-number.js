/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {};
    for (let n of nums) {
        map[n] = map[n] ? map[n] + 1 : 1;
    }
    for (let key in map) {
        if (map[key] === 1) {
            return key;
        }
    }
};