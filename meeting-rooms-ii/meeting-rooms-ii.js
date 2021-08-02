/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let result = 0;
    let count = 0;
    let start = [];
    let end = [];
    for (let i of intervals) {
        start.push(i[0]);
        end.push(i[1]);
    }
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    let s = 0;
    let e = 0;
    while (s < intervals.length) {
        if (start[s] < end[e]) {
            count++;
            s++;
        } else {
            count--;
            e++;
        }
        result = Math.max(count, result);
    }
    return result;
};