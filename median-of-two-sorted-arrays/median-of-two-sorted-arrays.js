/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a = nums1, b = nums2;
    if (nums2.length < nums1.length) {
        a = nums2;
        b = nums1;
    }
    let total = a.length + b.length;
    let half = Math.floor(total / 2);
    let l = 0, r = a.length - 1;
    while (true) {
        let i = Math.floor((l + r) / 2);
        let j = half - i - 2;
        let leftA = i < 0 ? -Infinity : a[i];
        let rightA = i + 1 >= a.length ? Infinity : a[i + 1];
        let leftB = j < 0 ? -Infinity : b[j];
        let rightB = j + 1 >= b.length ? Infinity : b[j + 1];
        if (leftA <= rightB && leftB <= rightA) {
            if (total % 2 === 0) {
                return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
            } else {
                return Math.min(rightA, rightB);
            }
        } else if (leftA > rightB) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
};