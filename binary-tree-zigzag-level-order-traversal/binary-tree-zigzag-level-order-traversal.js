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
    let res = [];
    let q = [root, null];
    let levelList = [];
    let order = true;
    while (q.length > 0) {
       let cur = q.shift();
        if (cur) {
            if (order) {
                levelList.push(cur.val);
            } else {
                levelList.unshift(cur.val);
            }
            if (cur.left) {
                q.push(cur.left);
            }
            if (cur.right) {
                q.push(cur.right)
            }
        } else {
            res.push(levelList);
            levelList = [];
            if (q.length > 0) {
              q.push(null);  
            }
            order = !order;
        }

        
    }
    return res;
};