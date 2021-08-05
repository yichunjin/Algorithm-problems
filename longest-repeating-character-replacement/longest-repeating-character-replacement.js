/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let result = 0;
  let count = {};
  let start = 0;
  for (let end = 0; end < s.length; end++) {
      count[s[end]]  = count[s[end]] + 1 || 1;
      let max = Math.max(...Object.values(count));
      while (end - start + 1 - max > k) {
          count[s[start]]--;
          start++;
      }
      result = Math.max(result, end - start + 1)
  }
  return result;
};