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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const sameTree = (node1, node2) => {
        if (!node1 || !node2) {
            return !node1 && !node2;
        }
        if (node1.val !== node2.val) {
            return false;
        }
        return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
    }
    
    if (root === null) {
        return !subRoot;
    }
    return sameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};