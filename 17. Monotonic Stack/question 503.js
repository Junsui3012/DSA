/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    if (nums.length === 1) return [-1]
    const stack = []
    const res = []
    const rev = nums.reverse()

    stack.push(rev[0])
    for (const num of rev.slice(1)) {
        while (num >= stack[stack.length - 1]) {
            stack.pop()
        }
        stack.push(num)
    }
    for (const num of rev) {
        while (num >= stack[stack.length - 1]) {
            stack.pop()
        }
        if (stack.length === 0) res.push(-1)
        else res.push(stack[stack.length - 1])
        stack.push(num)
    }

    return res.reverse()
};
