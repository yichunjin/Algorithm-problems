/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    let arr = [];
    const dfs = (node) => {
        if (!node) {
            return;
        }
        let diff = Math.abs(node.val - target);
        arr.push([diff, node.val])
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    arr.sort((a, b) => a[0] - b[0])
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i][1])
    }
    return res;
};