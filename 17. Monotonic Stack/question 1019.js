/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let res
    const stack = []
    const dfs = (curNode, i) => {
        if (!curNode) {
            res = new Array(i).fill(0)
            return
        }
        dfs(curNode.next, i + 1)
        const val = curNode.val
        while (stack.length && val >= stack[stack.length - 1]) {
            stack.pop()
        }
        if (stack.length) {
            res[i] = stack[stack.length - 1]
        }
        stack.push(val)
    }
    dfs(head, 0)
    return res
};
