/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }
    let h = head;
    let s = head, f = head;
    while (f.next && f.next.next) {
        s = s.next;
        f = f.next.next;
    }
    let tail = s.next;
    s.next = null;
    let prev = null;
    while (tail) {
        let next = tail.next;
        tail.next = prev;
        prev = tail;
        tail = next;
    }
    while (prev && head) {
        if (prev.val !== head.val) {
            return false;
        }
        prev = prev.next;
        head = head.next;
    }
    return true;
    
};