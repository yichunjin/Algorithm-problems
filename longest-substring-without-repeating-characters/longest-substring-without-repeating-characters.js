/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let map = {};
        let max = 0
        for (let j = i; j < s.length; j++) {
            if (!map[s[j]]) {
                map[s[j]] = 1;
                max++;
            } else {
                break;
            }
        }
        result = Math.max(max, result);
        
    }
    return result;
};