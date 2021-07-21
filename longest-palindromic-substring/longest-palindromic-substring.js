/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var checkPalindrome = (string, i, j) => {
      for (let k = 0; k < Math.floor(i / 2); k++) {
          if (s[j + k] !== s[i - 1 - k + j]) {
              return false;
          }
      }
      return true;
  }

for (let i = s.length; i > 0; i--) {
  for (let j = 0; j < s.length - i + 1; j++) {
      if (checkPalindrome(s, i, j)) {
          return s.slice(j, j + i);
      }
  }
}

return '';
};