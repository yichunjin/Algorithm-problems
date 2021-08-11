/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    for (let i = 0; i < box.length; i++) {
        for (let j = 0; j < box[i].length - 1; j++) {
            if ( box[i][j] === '#' ) {
                for (let k = j + 1; k < box[i].length; k++) {
                    if (box[i][k] === '*') {
                        break;
                    }
                    if (box[i][k] === '.') {
                        box[i][j] = '.';
                        box[i][k] = '#';
                        break;
                    }
                }
            }
        }
    }

    // rotated
    let res = [];
    for ( let i = 0; i < box[0].length; i++) {
        res[i] = [];
        for (let j = 0; j < box.length; j++) {
            res[i][j] = box[j][i];
        }
        res[i] = res[i].reverse()
    }
    return res;
};