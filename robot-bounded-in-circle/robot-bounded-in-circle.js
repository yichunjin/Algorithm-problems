/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0, y = 0;
    let idx = 0;
    
    for (let i of instructions) {
        if (i === 'L') {
            idx = (idx + 3) % 4;
        } else if (i === 'R') {
            idx = (idx + 1) % 4;
        } else {
            x += directions[idx][0];
            y += directions[idx][1];
        }
    }
    return (x === 0 && y === 0) || idx !== 0;
};