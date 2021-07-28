/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head === null || head.next === null) {
        return;
    }
    // find mid
    let l1 = head;
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null
    let l2 = reverse(slow)
    merge(l1, l2);
};

// reverse second half
const reverse = (head) => {
    let prev = null;
    let cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

const merge = (l1, l2) => {
    while(l1 !== null) {
        let next1 = l1.next;
        let next2 = l2.next;
        l1.next = l2;
        if (next1 === null) {
            break;
        }
        l2.next = next1;
        l1 = next1;
        l2 = next2
    }
}