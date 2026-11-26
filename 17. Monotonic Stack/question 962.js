/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    const n = nums.length
    const stack = []
    for (let i = 0; i < n; i++) {
        const num = nums[i]
        if (!stack.length || num < nums[stack[stack.length - 1]]) {
            stack.push(i)
        }
    }

    let maxRamp = 0
    let j = n - 1
    while (stack.length && j >= 0 && j >= stack[stack.length - 1]) {
        while (stack.length && nums[j] >= nums[stack[stack.length - 1]]) {
            const top = stack.pop()
            const curRamp = j - top
            maxRamp = curRamp > maxRamp ? curRamp : maxRamp
        }
        j--
    }
    return maxRamp
};
