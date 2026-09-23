/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let curHead = head
    let prevHead = null
    while (curHead && curHead.next) {
        const temp = curHead.next
        curHead.next = temp.next
        temp.next = curHead
        if (prevHead) prevHead.next = temp
        else head = temp
        prevHead = curHead
        curHead = curHead.next
    }
    return head
};