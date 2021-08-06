/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    let maxDepth = 0;
    
    const findDepth = (input, depth) => {
        let res = [];
        maxDepth = Math.max(maxDepth, depth);
        input.forEach((i) => {
            if(i.isInteger()) {
                res.push([i.getInteger(), depth]);
            } else {
               res = res.concat(findDepth(i.getList(), depth + 1)) 
            }
        })
        return res;
    }
    const arr = findDepth(nestedList, 1);
    
    let sum = 0;
    for (let i of arr) {
        const [num, d] = i;
        sum += num * (maxDepth - d + 1)
    }
    return sum;
    /*
    var depthSumInverse = function(nestedList) {
    
    let maxDepth = 0
    
    let traverse = (nl, depth = 1) => {
        let arr = []
        maxDepth = Math.max(maxDepth, depth)
        nl.forEach(ele => {
            if(ele.isInteger()) {
                arr.push([ele.getInteger(), depth])
            } else {
                arr = arr.concat(traverse(ele.getList(), depth + 1))
            }
        })
        return arr
    }
    
    const arr = traverse(nestedList)

    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        const [num, d] = arr[i]
        sum += num * (maxDepth - d + 1)
    }
    return sum
};
    */
};