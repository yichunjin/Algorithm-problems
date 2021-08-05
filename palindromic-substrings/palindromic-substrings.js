/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const isPalindrom = (sub) => {
      let mid = Math.floor(sub.length / 2);
      for (let i = 0; i <= mid; i++) {
          if (sub[i] !== sub[sub.length - 1 - i]) {
              return false;
          }
      }
      return true;
  }
  let res = [];
  for (let i = 0; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
          let cur = s.slice(j, i);
          if (isPalindrom(cur)) {
              res.push(cur);
          }
      }
  }
  return res.length;
};