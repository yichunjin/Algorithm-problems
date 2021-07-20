/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let length = 0;
  let subString = {};
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (subString[s[i]] !== undefined) {
      if (length < i - start) {
        length = i - start;
      }
      if (subString[s[i]] + 1 > start) {
        start = subString[s[i]] + 1;
      }
    }
    subString[s[i]] = i;
  }
  if (s.length - start > length) {
    return s.length - start;
  }
  return length;
};