/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const n = nums.length
    let i = 0
    while (i < n) {
        const correctIdx = nums[i] - 1
        if (nums[i] !== nums[correctIdx] && nums[i] < n && nums[i] > 0) {
            const temp = nums[correctIdx]
            nums[correctIdx] = nums[i]
            nums[i] = temp
        }
        else { i++ }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] != i + 1) return i + 1
    }
    return n + 1
};