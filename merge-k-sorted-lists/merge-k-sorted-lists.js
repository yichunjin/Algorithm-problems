/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    const merge = (l1, l2) => {
        let dummy = new ListNode(0);
        let head = dummy;
        let i = l1, j = l2;
        while ( i !== null && j !== null) {
            if (i.val < j.val) {
                dummy.next = i;
                i = i.next;
            } else {
                dummy.next = j;
                j = j.next;
            }
            dummy = dummy.next;
        }
        if (i !== null) {
            dummy.next = i;
        }
        if (j !== null) {
            dummy.next = j;
        }
        return head.next;
    }
    let res = lists[0];
    for (let i = 1; i < lists.length; i++) {
        res = merge(res, lists[i]);
    }
    return res;
};