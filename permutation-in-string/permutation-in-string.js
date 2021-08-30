/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    let l = s1.length;
    let map = {};
    for ( let i = 0; i < l; i++) {
        if (!map[s1[i]]) {
           map[s1[i]] = 1; 
        } else {
            map[s1[i]]++;
        }
    }
    let start = 0, end = 0, counter = Object.keys(map).length;
    while (end < s2.length) {
        if (map[s2[end]] !== undefined) {
            map[s2[end]]--;
            if (map[s2[end]] === 0) {
                counter--;
            }
        }
        end++;
        while (counter === 0) {
            if (map[s2[start]] !== undefined) {
                map[s2[start]]++;
                if (map[s2[start]] > 0) {
                    counter++;
                }
            }
            if (end - start === s1.length) {
                return true;
            }
            start++;
        }
    }
    return false;
    
};