/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    let freq = [];
    let map = {};
    for (let i of nums) {
        if (map[i] !== undefined) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    for (let key in map) {
        if (freq[map[key]] !== undefined) {
            freq[map[key]].push(Number(key))
        } else {
            freq[map[key]] = [Number(key)]
        }
    }

    for (let i = freq.length - 1; i > -1; i--) {
        if (freq[i] !== undefined) {
            for (let n of freq[i]) {
                result.push(n);
                k--;
                if (k === 0) {
                    return result;
                }
            }
        }
    }

};