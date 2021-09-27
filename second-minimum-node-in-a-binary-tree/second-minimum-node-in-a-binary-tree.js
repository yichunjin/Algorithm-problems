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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let min1 = root.val;
    let ans = Infinity;
    const dfs = (node) => {
        if (node !== null) {
            if (min1 < node.val && node.val < ans) {
                ans = node.val;
            } else if (min1 === node.val) {
                dfs(node.left);
                dfs(node.right);
            }
        }
    }
    dfs(root);
    return ans !== Infinity ? ans : -1;
};