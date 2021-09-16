/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const window = [], result = [];

  const insert = (n) => {
    if (n > window[window.length - 1]) {
      window.push(n);
      return;
    }
      let start = 0, end = window.length - 1;
      while (start < end) {
          let mid = Math.floor((start + end) / 2);
          if (window[mid] > n) {
              end = mid;
          } else {
              start = mid + 1;
          }
      }
        window.splice(end, 0, n);
  };

  const remove = (n) => {
      let start = 0, end = window.length - 1;
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (window[mid] === n) {
              window.splice(mid, 1);
              break;
          }
          if (window[mid] < n) {
              start = mid + 1;
          } else {
              end = mid -1;
          }
      }
  }

  let isOdd = k % 2 === 1;
  const addMedian = (isOdd) => {
      let mid = Math.floor(window.length / 2)
      if (isOdd) {
          result.push(window[mid]);
      } else {
          let median = (window[mid] + window[mid - 1]) /2
          result.push(median);
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (window.length < k) {
          insert(nums[i]);
      } else {
          addMedian(isOdd);
          insert(nums[i]);
          remove(nums[i - k]);
      }
  }
  addMedian(isOdd);
  return result;
};