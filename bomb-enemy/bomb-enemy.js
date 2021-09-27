/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    const calEnemies = (i, j) => {
        let countR = 0, countC = 0;
        for (let r = 0; r < grid.length; r++) {
            if (grid[r][j] === "W") {
                if (r < i) {
                    countR = 0;
                    continue;
                } else {
                    break;
                }
            }
            if (grid[r][j] === "E") {
                countR++;
            }
        }
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[i][c] === "W") {
                if (c < j) {
                    countC = 0;
                    continue;
                } else {
                    break;
                }
            }
            if (grid[i][c] === "E") {
                countC++;
            }
        }
        return countR + countC;
    }
    
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '0') {
                max = Math.max(max, calEnemies(i, j));
            }
        }
    }
    return max;
};