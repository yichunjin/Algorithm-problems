/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let map = {};
    for (let w of words) {
        for (let i of w) {
            map[i] = new Set();
        }
    }
    for (let i = 0; i < words.length - 1; i++) {
        let minLength = Math.min(words[i].length, words[i + 1].length);
        if (words[i].slice(0, minLength) === words[i + 1].slice(0, minLength) && words[i].length > words[i + 1].length) {
            return "";
        }
        for (let j = 0; j < minLength; j++) {
            if (words[i][j] !== words[i + 1][j]) {
                map[words[i][j]].add(words[i + 1][j])
                break;
            }
        }
    }
    let visited = {};
    let res = [];
    const dfs = (c) => {
        if (c in visited) {
            return visited[c];
        }
        visited[c] = true;
        for (let nei of map[c]) {
            if (dfs(nei)) {
                return true;
            }
        }
        visited[c] = false;
        res.push(c);
    }
    
    for (let key in map) {
        if (dfs(key)) {
            return ""
        }
    }
    return res.reverse().join('');
};