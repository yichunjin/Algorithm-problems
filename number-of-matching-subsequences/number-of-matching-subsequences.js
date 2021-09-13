/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    const map = {};
    for (let i= 0; i < s.length; i++) {
        let c = s[i]
        if (map[c]) {
            map[c].push(i);
        } else {
            map[c] = [i];
        }
    }
    
    
    let result = 0;
    
    const checkWord = (word) => {
        let idx = -1;
        for (let l of word) {
            if (!(l in map)) {
                return false;
            }
            let cur = map[l];
            let curIdx = idx;
            for (let i = 0; i < cur.length; i++) {
                if (cur[i] > idx) {
                    curIdx = cur[i];
                    break;
                }
            }
            if (curIdx <= idx) {
                return false;
            }
            idx = curIdx;
        }
        return true;
    }
    
    for (let w of words) {
        if (checkWord(w)) {
            result++;
        }
    }
    
    return result;
};