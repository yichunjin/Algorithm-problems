/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {string[]} names
 * @param {string[]} targetPath
 * @return {number[]}
 */
var mostSimilar = function(n, roads, names, targetPath) {
    const m = targetPath.length;
    const dp = new Array(m).fill(null).map(x => new Array(n).fill(-1));
    const visited = new Array(m).fill(null).map(x => new Array(n));
    const adjMatrix = new Array(n).fill(null).map(x => new Array(n));
    
    for (let road of roads) {
        const [s, e] = road;
        adjMatrix[s][e] = true;
        adjMatrix[e][s] = true;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = targetPath[i] === names[j] ? 1: 0;
            let max = -1;
            let prevNode = null;
            
            if (i === 0) {
                dp[i][j] = count;
                continue;
            }
            
            for (let c = 0; c < n; c++) {
                if (adjMatrix[j][c]) {
                    if (count + dp[i - 1][c] > max) {
                        max = count + dp[i - 1][c];
                        prevNode = c;
                    }
                }
            }
            dp[i][j] = max;
            visited[i][j] = prevNode;
        }
    }
    
    let lastCity = dp[m - 1];
    let idx = -1;
    let count = -1;
    for (let i = 0; i < lastCity.length; i++) {
        if (lastCity[i] > count) {
            count = lastCity[i];
            idx = i;
        }
    }
    let path = [idx];
    for (let i = m - 1; i > 0; i--) {
        idx = visited[i][idx];
        path.unshift(idx);
    }
    return path;
};