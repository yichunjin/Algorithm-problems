/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);
    const map = {};
    let max = 1;
    for (let word of words) {
        let cur = 1;
        for (let i = 0; i < word.length; i++) {
            let subWord = word.slice(0, i) + word.slice(i + 1);
            if (map[subWord]) {
                cur = Math.max(cur, map[subWord] + 1);
            }
            map[word] = cur;
            max = Math.max(max, cur);
        }
    }
    return max;
};