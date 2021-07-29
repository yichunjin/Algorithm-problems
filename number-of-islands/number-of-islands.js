/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;
    const markSeen = (i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
            return
        }
        if (grid[i][j] === '0' || grid[i][j] === '2') {
            return;
        }
        
        grid[i][j] = '2';
        markSeen(i + 1, j);
        markSeen(i - 1, j);
        markSeen(i, j + 1);
        markSeen(i, j - 1);
        
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                result++;
                markSeen(i, j) 
            }
            
        }
    }
    return result;
};