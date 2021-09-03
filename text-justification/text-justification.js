/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let i = 0, n = words.length;
    while (i < n) {
        let totalChars = words[i].length;
        let last = i + 1;
        
        while (last < n) {
            if (totalChars + words[last].length + 1 > maxWidth) {
                break;
            }
            totalChars += words[last].length + 1;
            last++;
        }
        
        let gaps = last - i - 1;
        let cur = '';
        
        if (last === n || gaps === 0) {
            for (let j = i; j < last; j++) {
                cur += words[j];
                cur += ' ';
            }
            
            cur = cur.slice(0, -1);
            while (cur.length < maxWidth) {
                cur += ' ';
            }
        } else {
            let spaces = Math.floor((maxWidth - totalChars) / gaps);
            let rest = (maxWidth - totalChars) % gaps;
            
            for (let j = i; j < last - 1; j++) {
                cur += words[j];
                cur += ' ';
                
                for (let s = 0; s < spaces + (j - i < rest ? 1 : 0); s++) {
                    cur += ' ';
                }
            }
            
            cur += words[last - 1];
        }
        result.push(cur);
        i = last;
    }
    return result;
};