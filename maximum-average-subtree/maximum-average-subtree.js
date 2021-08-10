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
var maximumAverageSubtree = function(root) {
    if (root === null) {
        return 0;
    }
    let max = 0;
    const dfs = (node) => {
        if (!node) {
            return [0, 0];
        }
        let [sum_l, node_l] = dfs(node.left)
        let [sum_r, node_r] = dfs(node.right)
        let sum_total = node.val + sum_l +sum_r
        let node_total = 1 + node_l + node_r
        let avg = sum_total / node_total
        max = Math.max(max, avg)
        return [sum_total, node_total]
    }
    
    dfs(root);
    return max;
};