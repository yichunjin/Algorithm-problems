/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const q = [];
    let freshOranges = 0;
    let r = grid.length, c = grid[0].length;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }
    q.push([-1, -1]);
    let count = -1;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    while (q.length > 0) {
        let cur = q.shift();
        if (cur[0] === -1) {
            count++;
            if (q.length > 0) {
                q.push([-1, -1]);
            }
        } else {
            for (let d of directions) {
                let cor1 = cur[0] + d[0], cor2 = cur[1] + d[1];
                if (cor1 >=0 && cor2 >= 0 && cor1 < r && cor2 < c) {
                    if (grid[cor1][cor2] === 1) {
                        grid[cor1][cor2] = 2;
                        freshOranges--;
                        q.push([cor1, cor2]);
                    }
                }
            }
        }
    }
    return freshOranges === 0 ? count : -1;
};