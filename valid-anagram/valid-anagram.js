/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let hash = {};
    for (let l of s) {
        if (hash[l]) {
            hash[l]++;
        } else {
            hash[l] = 1;
        }
    }
    for (let l of t) {
        if (hash[l] === undefined) {
            return false;
        }
        hash[l]--;
        if (hash[l] < 0) {
            return false;
        }
    }
    return true;
};