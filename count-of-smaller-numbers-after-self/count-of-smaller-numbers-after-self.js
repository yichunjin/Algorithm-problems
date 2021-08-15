/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const Item = function(v, i) {
        this.val = v;
        this.index = i;
    }
    let res = new Array(nums.length).fill(0);
    const items = [];

    for (let i = 0; i < nums.length; i++) {
        let item = new Item(nums[i], i);
        items.push(item)
    }

    const mergeSort = (start, end) => {
        if (end <= start) {return;}
        let mid = Math.floor((start + end) / 2);
        mergeSort(start, mid);
        mergeSort(mid + 1, end);
        merge(start, mid, mid + 1, end);
    }

    const merge = (l, lEnd, h, hEnd ) => {
        let sorted = [];
        let hPoint = h, lPoint = l;
        let rightCount = 0;

        while(lPoint <= lEnd && hPoint <= hEnd) {
            if (items[hPoint].val < items[lPoint].val) {
                sorted.push(items[hPoint]);
                rightCount++;
                hPoint++;
            } else {
                let i = items[lPoint].index;
                res[i] += rightCount;
                sorted.push(items[lPoint]);
                lPoint++;
            }
        }
        while (lPoint <= lEnd) {
            let i = items[lPoint].index;
            res[i] += rightCount;
            sorted.push(items[lPoint])
            lPoint++;
        }

        while (hPoint <= hEnd) {
            sorted.push(items[hPoint])
            hPoint++;
        }
        items.splice(l, hEnd - l + 1, ...sorted);
    }

    mergeSort(0, nums.length - 1)

    return res;
};

