/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) {
        return -1;
    }
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let queue = [[0, 0]];
    grid[0][0] = 1;
    const bfs = (i, j) => {
        for (let d of directions) {
            let c = i + d[0];
            let r = j + d[1];
            if (c < 0 || r < 0 || c >= grid.length  || r >= grid[c].length || grid[c][r] !== 0) {continue;}
            grid[c][r] = grid[i][j] + 1;
            queue.push([c, r])
        }
    }
    while (queue.length > 0) {
       let cor = queue.shift();
        if(cor[0] === grid.length - 1 && cor[1] === grid[cor[0]].length - 1) {
            return grid[cor[0]][cor[1]];
        }
        bfs(cor[0], cor[1]);
    }
    return -1;


};