/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const derictions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const m = grid.length, n = grid[0].length;
    const seen = new Array(m);
    for (let i = 0; i < m; i++) {
        let cur = new Array(n).fill(Infinity);
        seen[i] = cur;
    }
    seen[0][0] = 0;
    
    const q = [[0,0,0]];
    let steps = 0;

    while (q.length > 0) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let cur = q.shift();
            let row = cur[0], col = cur[1];
            if (row === m - 1 && col === n - 1) {
                return steps;
            }
            for (let d of derictions) {
                let r = row + d[0], c = col + d[1];
                
                if (r >= 0 && r < m && c >= 0 && c < n) {
                    let obstacle = cur[2] + grid[r][c];
                    if (obstacle > k || obstacle >= seen[r][c]) { continue; }
                    seen[r][c] = obstacle;
                    q.push([r, c, obstacle]);
                }
            }
        }
        steps++;
    }
    return -1;
};