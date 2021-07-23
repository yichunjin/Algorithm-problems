/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let storage = {};
    for (let i of strs) {
        let letters = i.split('').sort();
        if (storage[letters]) {
            storage[letters].push(i);
        } else {
            storage[letters] = [i];
        }
    }
    return Object.values(storage);
};