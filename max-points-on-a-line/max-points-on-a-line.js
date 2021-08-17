/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 2) {
        return points.length;
    }
    const getSlope = (a, b) => {
        if (a[0] === 0 && b[0] === 0) {
            return Infinity;
        }
        if (a[1] === 0 && b[1] === 0) {
            return 0;
        }
        return (b[1] - a[1]) / (b[0] - a[0]);
    }
    
    let max = 1;
    const s = new Set();
    for (let i = 0; i < points.length; i++) {
        let map = {};
        if (s.has(points[i][0] + ',' + points[i][1])) {
            continue;
        }
        for (let j = i + 1; j < points.length; j++) {
            let s = getSlope(points[i], points[j]);
            if (map[s]) {
                map[s]++
            } else {
                map[s] = 2;
            }
            max = Math.max(max, map[s]);
        }
        s.add(points[i][0] + ',' + points[i][1]);
    }
    return max;
};