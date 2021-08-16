/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let w1 = [], w2 = [];
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            w1.push(i);
        } else if (wordsDict[i] === word2) {
            w2.push(i);
        }
    }
    let min = Math.abs(w1[0] - w2[0]);
    let i = 0, j = 0;
    while(i < w1.length && j < w2.length) {
        min = Math.min(min, Math.abs(w1[i] - w2[j]));
        if (w1[i] < w2[j]) {
            i++
        } else {
            j++
        }
    }
    return min;
};