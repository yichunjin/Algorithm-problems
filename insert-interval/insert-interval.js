/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let inserted = [];
    let pushed = false;
    if (intervals.length === 0) {
        return [newInterval]
    }
    let i;
    for (i = 0; i < intervals.length; i++) {
        if (newInterval[0] > intervals[i][1]) {
            inserted.push(intervals[i]);
        } else if (newInterval[1] < intervals[i][0]) {
            inserted.push(newInterval);
            pushed = true;
            break;
        } else {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
    }

    if (!pushed) {
        inserted.push(newInterval);
    } else {
        inserted = inserted.concat(intervals.slice(i));
    }
    return inserted;
};
