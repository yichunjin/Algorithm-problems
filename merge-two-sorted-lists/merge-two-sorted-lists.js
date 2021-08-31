/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let startNode = new ListNode(0);
    let curNode = startNode;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curNode.next = l1;
            l1 = l1.next;
        } else {
            curNode.next = l2;
            l2 = l2.next;
        }
        curNode = curNode.next;
    }
    if (l1 !== null) {
        curNode.next = l1;

    }
    if (l2 !== null) {
        curNode.next = l2;

    }
    return startNode.next;
    
};