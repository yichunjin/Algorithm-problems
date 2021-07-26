/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') {
        return 0;
    }
    let result = new Array(s.length + 1).fill(0);
    result[0] = 1;
    result[1] = 1;
  for (let i = 2; i < s.length + 1; i++) {
      let oneDigit = Number(s[i - 1]);
      if (oneDigit > 0) {
          result[i] = result[i] + result[i - 1] || result[i - 1];
      }
      let twoDigit = Number(s[i - 2] + s[i - 1]);
      if (twoDigit >= 10 && twoDigit <= 26) {
          result[i] = result[i] + result[i - 2] || result[i - 2];
      }
  }
  return result[s.length];
};