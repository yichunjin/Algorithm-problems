/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function(cars) {
    let n = cars.length;
    const stack = [], res = [];
    for (let i = n - 1; i >= 0; i--) {
        res[i] = -1;
        let pos = cars[i][0], speed = cars[i][1];
        while (stack.length > 0) {
            let j = stack[stack.length - 1], p0 = cars[j][0], s0 = cars[j][1];
            if (speed <= s0 || (p0 - pos) / (speed - s0) >= res[j] && res[j] > 0) {
                stack.pop();
            } else {
                break;
            }
        }
        if (stack.length > 0) {
            let j = stack[stack.length - 1], p0 = cars[j][0], s0 = cars[j][1];
            res[i] =  (p0 - pos) / (speed - s0);
        }
        stack.push(i);
    }
    return res;
};