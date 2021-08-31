/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < intervals.length - 1) {
        if (intervals[i + 1][0] <= intervals[i][1]) {
            intervals[i][1] = Math.max(intervals[i + 1][1], intervals[i][1]);
            intervals.splice(i + 1, 1);
            i--;
        }
        i++;
    }
    return intervals;
};