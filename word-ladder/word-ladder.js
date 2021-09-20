/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let l = beginWord.length;
    const allCombination = {};
    
    wordList.forEach((word) => {
        for (let i = 0; i < l; i++) {
            let newWord = word.slice(0, i) + '*' + word.slice(i + 1);
            if (!(newWord in allCombination)) {
                allCombination[newWord] = [];
            }
            allCombination[newWord].push(word);
        }
    })

    const q = [[beginWord, 1]];
    
    const visited = {};
    visited[beginWord] = true;
    
    while (q.length > 0) {
        let cur = q.shift();
        let word = cur[0], level = cur[1];
        for (let i = 0; i < l; i++) {
            let newWord = word.slice(0, i) + '*' + word.slice(i + 1);
            if (newWord in allCombination) {
                for (let adjacentWord of allCombination[newWord]) {
                    if (adjacentWord === endWord) {
                        return level + 1;
                    }

                    if (!(adjacentWord in visited)) {
                        visited[adjacentWord] = true;
                        q.push([adjacentWord, level + 1])
                    }
                }
            }
        }
    }
    
    
    return 0;
};