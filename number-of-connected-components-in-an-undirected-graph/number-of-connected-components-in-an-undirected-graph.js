/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let result = n;
    let par = [];
    let rank = [];
    
    for (let i = 0; i < n; i++) {
        par.push(i);
        rank.push(1);
    }
    
    const find = (n) => {
        res = n;
        while (res !== par[res]) {
            par[res] = par[par[res]];
            res = par[res];
        }
        return res;
    }
    
    const union = (n1, n2) => {
        let p1 = find(n1);
        let p2 = find(n2);
        if (p1 === p2) {
            return 0;
        }
        if (rank[p1] > rank[p2]) {
            par[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            par[p1] = p2;
            rank[p2] += rank[p1];
        }
        return 1;
    }
    
    for (let edge of edges) {
        result -= union(edge[0], edge[1]);
    }
    
    return result;
};