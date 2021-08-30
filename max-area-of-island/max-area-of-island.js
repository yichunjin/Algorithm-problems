/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res= 0;
    let count = 0;
    const findIsland = (i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j>= grid[i].legnth || grid[i][j] !== 1) {
            res = Math.max(count, res);
            return;
        }
        count++;
        grid[i][j] = 2;
        findIsland(i + 1, j)
        findIsland(i - 1, j)
        findIsland(i, j + 1)
        findIsland(i, j - 1)
    }
    for (let i = 0; i < grid.length; i++) {
        for ( let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                findIsland(i, j);
                count = 0;
            }   
        }
    }
    return res;
};