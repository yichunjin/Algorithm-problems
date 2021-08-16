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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    let res = [];
    const dfs = (node) => {
        if (!node) {
            return -1;
        }
        let lHeight = dfs(node.left);
        let rHeight = dfs(node.right);
        
        let curHeight = Math.max(lHeight, rHeight)  + 1;
        if (res.length === curHeight) {
            res.push([]);
        }
        res[curHeight].push(node.val);
        return curHeight;
    }
    dfs(root);
    return res;
};