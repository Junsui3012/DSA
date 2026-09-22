/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let newHeadNode = head
    let prevHead = null
    if (k === 1) return head

    while (newHeadNode) {
        [newHeadNode, oldHeadNode] = reverseGroup(prevHead, newHeadNode, k)
        if (!newHeadNode) break
        if (oldHeadNode === head) head = newHeadNode
        if (prevHead) prevHead.next = newHeadNode
        newHeadNode = oldHeadNode.next
        prevHead = oldHeadNode
    }
    return head
};

const reverseGroup = function (prevNode, headNode, k) {
    const groupLength = k
    let newNode = prevNode
    let oldHeadNode = headNode
    let nextNode
    while (k > 0 && headNode) {
        nextNode = headNode.next
        headNode.next = newNode
        newNode = headNode
        headNode = nextNode
        k--
    }
    if (k > 0) {
        headNode = newNode
        newNode = null
        while (k < groupLength) {
            nextNode = headNode.next
            headNode.next = newNode
            newNode = headNode
            headNode = nextNode
            k++
        }
        return [null, oldHeadNode]
    }
    oldHeadNode.next = nextNode
    return [newNode, oldHeadNode]
}