/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    const reverse = (word) => {
        word = word.split('');
        let i = 0;
        let j = word.length - 1;
        while (i < j) {
            [word[i], word[j]] = [word[j], word[i]];
            i++;
            j--
        }
        return word.join('');
    }
    s = s.split(' ');
    for (let word of s) {
        result.push(reverse(word));
    }
    return result.join(' ');
};