/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    let rank = [];
    let par = [];
    for (let i = 0; i < n; i++) {
        rank.push(1);
        par.push(i);
    }

    const find = (node) => {
        let n = node - 1;
        while (par[n] !== n) {
            par[n] = par[par[n]]
            n = par[n]
        }
        return n;
    }

    connections.sort((a, b) => a[2] - b[2]);
    let res = 0;
    for (let connection of connections) {
        let par1 = find(connection[0]);
        let par2 = find(connection[1]);
        if (par1 !== par2) {
            res += connection[2];
            if (rank[par1] > rank[par2]) {
                par[par2] = par1;
                rank[par1]++
            } else {
                par[par1] = par2;
                rank[par2]++
            }
            
        }
    }
    for (let i = 1; i < n; i++) {
        if (find(i) !== find(i + 1)) {
            return -1;
        }
    }
    return res;
};