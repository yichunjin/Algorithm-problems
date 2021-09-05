/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let below_row = triangle[triangle.length - 1];
    for (let i = triangle.length - 2; i >= 0; i--) {
        let cur = [];
        for (let col = 0; col <= i; col++) {
            let s = Math.min(below_row[col], below_row[col + 1]);
            cur.push(triangle[i][col] + s);
        }
        below_row = cur;
    }
    return below_row[0]
};