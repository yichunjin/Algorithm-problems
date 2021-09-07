/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function(points, angle, location) {
    const angles = [];
    let max = 0;
    
    for (let point of points) {
        if (point[0] === location[0] && point[1] === location[1]) {
            max++;
            continue;
        }
        angles.push(Math.atan2(point[1] - location[1], point[0] - location[0]) * (180 / Math.PI));
    }
    angles.sort((a, b) => a - b);
    const maxAngle = angles[angles.length - 1];
    for (let curAngle of angles) {
        if (curAngle + 360 - maxAngle > angle) break;
        angles.push(curAngle + 360);
    }
    let left = 0, right = 0, cur = max;
    while ( right < angles.length) {
        cur++;
        while (angles[right] - angles[left] > angle) {
            left++;
            cur--;
        }
        cur > max && (max = cur);
        right++;
    }
    
    return max;
};