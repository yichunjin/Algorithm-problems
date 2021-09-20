/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const results = [];
    const curPath = [];
    const l = beginWord.length;
    const allCombination = {};
    
    const findNeighbors = (word, wordList) => {
        let neighbors = [];
        let letters = word.split('');
        
        for (let i = 0; i < word.length; i++) {
            let oldChar = word[i];
            for (let j = 0; j < 26; j++) {
                let c = String.fromCharCode(97 + j);
                letters[i] = c;
                let newWord = letters.join('');
                if (c === oldChar || !wordList.has(newWord)) {
                    continue;
                }
                neighbors.push(newWord);
            }
            letters[i] = oldChar;
        }
        
        return neighbors;
    }
    
    const backTracking = (source, destination) => {
        if (source === destination) {
            let tempPath = curPath.slice();
            results.push(tempPath);
        }
        
        if (!(source in allCombination)) {
            return;
        }
        
        for (let i = 0; i < allCombination[source].length; i++) {
            curPath.push(allCombination[source][i]);
            backTracking(allCombination[source][i], destination);
            curPath.pop();
        }
    }
    
    const bfs = (wordList) => {
        const q = [beginWord];
        
        if (wordList.has(beginWord)) {
            wordList.delete(beginWord)
        }
        
        const isEnqueued = {};
        isEnqueued[beginWord] = 1;

        while (q.length > 0) {
            let visited = [];
            let l = q.length;
            for (let i = l- 1; i >= 0; i--) {
                let curWord = q.shift();
                let neighbors = findNeighbors(curWord, wordList);
                for (let n of neighbors) {
                    visited.push(n);
                    
                    if (!(curWord in allCombination)) {
                        allCombination[curWord] = [];
                    }
                    allCombination[curWord].push(n);
                    if (!(n in isEnqueued)) {
                        q.push(n);
                        isEnqueued[n] = 1;
                    }
                }
            }
            
            for (let i = 0; i < visited.length; i++) {
                if (wordList.has(visited[i])) {
                    wordList.delete(visited[i])
                }
            }
        }
    }
    
    let copy = new Set(wordList);
    bfs(copy);
    curPath.push(beginWord);
    backTracking(beginWord, endWord);
    return results;

    
};