/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let storage = {};
    for (let n of nums) {
        if (storage[n]) {
            return true;
        }
        storage[n] = true;
    }
    return false
};