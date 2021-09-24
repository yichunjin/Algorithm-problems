/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = new Array(isConnected.length).fill(0);
    
    const dfs = (i) => {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1 && visited[j] === 0) {
                visited[j] = 1;
                dfs(j);
            }
        }
    }
    
    let count = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (visited[i] === 0) {
            dfs(i);
            count++;
        }
    }
    return count;
};