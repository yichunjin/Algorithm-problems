/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let res = s.split('');
    for (let i = 0; i < sources.length; i++) {
        let source = sources[i];
        if (source === s.slice(indices[i], indices[i] + source.length)) {
            res[indices[i]] = targets[i];
            for (let j = indices[i] + 1; j < indices[i] + source.length; j++) {
                res[j] = ''
            }
        }
    }
    return res.join('');
};