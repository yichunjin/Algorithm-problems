/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    let res = 0;
    let r = 1, c= cols;
    while (r <= rows) {
        for (let i = 0; i < sentence.length; i++) {
            const l = sentence[i].length;
            if (l > cols) {
                return res;
            }
            if (l <= c) {
                if (l === c) {
                    c++;
                }
                c -= l + 1;
                if (i === sentence.length - 1) {
                    res++;
                    i = -1;
                }
                continue;
            } else {
                r++;
                i--;
                c = cols;
                if (r > rows) {
                    return res;
                }
            }

        }
    }
    return res;
};