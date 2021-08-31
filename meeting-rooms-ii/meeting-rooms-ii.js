/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let res = 0;
    let start = [], end = [];
    for (let interval of intervals ) {
        start.push(interval[0]);
        end.push(interval[1]);
    }
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    let i = 0, j = 0;
    let cur = 0;
    while (i < start.length && j < end.length) { 
        if (start[i] < end[j]) {
            cur++;
            i++;
            res = Math.max(res, cur);
        } else {
            cur--;
            j++;
        }
    }
    return res;
};