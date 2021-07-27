/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let head = 0;
  let tail = s.length - 1;
  while(head < tail) {
      if (!s[head].match(/[a-z]|[0-9]/i)) {
          head++;
          continue;
      }
      if (!s[tail].match(/[a-z]|[0-9]/i)) {
          tail--;
          continue;
      }
      if (s[head].toLowerCase() !== s[tail].toLowerCase()) {
          return false
      }
      head++;
      tail--;
  }
  return true;
};