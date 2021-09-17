/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const result = [];
    const pac = new Set(), alt = new Set();
    const r = heights.length, c = heights[0].length;
    
    const dfs = (i, j, visited, height) => {
        if (i < 0 || j < 0 || i >= r || j >= c || visited.has(i + ',' + j) || heights[i][j] < height) {
            return;
        }
        visited.add(i + ',' + j);
        dfs(i + 1, j, visited, heights[i][j]);
        dfs(i - 1, j, visited, heights[i][j]);
        dfs(i, j + 1, visited, heights[i][j]);
        dfs(i, j - 1, visited, heights[i][j]);
    }
    
    for (let j = 0; j < c; j++) {
        dfs(0, j, pac, 0);
        dfs(r - 1, j, alt, 0);
    }
    
    for (let i = 0; i < r; i++) {
        dfs(i, 0, pac, 0);
        dfs(i, c - 1, alt, 0);
    }
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (pac.has(i + ',' + j) && alt.has(i + ',' + j)) {
                result.push([i, j]);
            }
        }
    }

    return result;
};