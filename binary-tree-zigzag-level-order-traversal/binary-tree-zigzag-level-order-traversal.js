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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    var res = [];
    var q = [root, null];
    var level_list = [];
    var order = true;
    while (q.length > 0) {
       let cur = q.shift();
        if (cur) {
            if (order) {
                level_list.push(cur.val);
            } else {
                level_list.unshift(cur.val)
            }
            if (cur.left) {
                q.push(cur.left)
            }
            if (cur.right) {
                q.push(cur.right)
            }
        } else {
            res.push(level_list);
            if (q.length > 0) {
                q.push(null);
            }
            level_list = [];
            order = !order
        }
    }
    return res;
};