/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const storage = {};
    for (let path of paths) {
        let cur = path.split(' ');
        let dir = cur[0];
        for (let i = 1; i < cur.length; i++) {
            let k = cur[i].replace(/.*\./,"");
            if (!(k in storage)) {
                storage[k] = [];
            }
            storage[k].push(dir + '/' + cur[i].replace(/\(.*/,""))
        }
    }
    const res = [];
    for (let key in storage) {
        if (storage[key].length > 1) {
            res.push(storage[key]);
        }
    }
    return res;
};