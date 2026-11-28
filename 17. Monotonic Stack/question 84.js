/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const n = heights.length
    const stack = []
    let max = 0
    for (let i = 0; i < n; i++) {
        const bar = heights[i]
        while (stack.length && bar <= heights[stack[stack.length - 1]]) {
            const ele = stack.pop()
            const left = stack.length ? stack[stack.length - 1] : -1
            const area = (i - 1 - left) * heights[ele]
            max = area > max ? area : max
        }
        stack.push(i)
    }
    while (stack.length) {
        const ele = stack.pop()
        const left = stack.length ? stack[stack.length - 1] : -1
        const area = (n - 1 - left) * heights[ele]
        max = area > max ? area : max
    }
    return max
};
// Alternate: triple pass (easier logic)
/**
var largestRectangleArea = function (heights) {
    const n = heights.length
    const stack = []
    const leftSmallest = new Array(n).fill(-1)
    const rightSmallest = new Array(n).fill(n)
    for (let i = 0; i < n; i++) {
        const bar = heights[i]
        while (stack.length && bar <= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) leftSmallest[i] = stack[stack.length - 1]
        stack.push(i)
    }
    while (stack.length) {
        stack.pop()
    }
    for (let i = n - 1; i >= 0; i--) {
        const bar = heights[i]
        while (stack.length && bar <= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) rightSmallest[i] = stack[stack.length - 1]
        stack.push(i)
    }
    let max = 0
    for (let i = 0; i < n; i++) {
        const height = heights[i]
        const width = rightSmallest[i] - leftSmallest[i] - 1
        const area = height * width
        max = area > max ? area : max
    }
    return max
};
*/
// Alternate: two pass
/**
var largestRectangleArea = function (heights) {
    const n = heights.length
    const stack = []
    const leftSmallest = new Array(n).fill(-1)
    // const rightSmallest = new Array(n).fill(n)
    for (let i = 0; i < n; i++) {
        const bar = heights[i]
        while (stack.length && bar <= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) leftSmallest[i] = stack[stack.length - 1]
        stack.push(i)
    }
    while (stack.length) {
        stack.pop()
    }
    let max = 0
    for (let i = n - 1; i >= 0; i--) {
        const bar = heights[i]
        while (stack.length && bar <= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        // if (stack.length) rightSmallest[i] = stack[stack.length - 1]
        const right = stack.length ? stack[stack.length - 1] : n
        const area = (right - leftSmallest[i] - 1) * heights[i]
        max = area > max ? area : max
        stack.push(i)
    }
    return max
};
*/
