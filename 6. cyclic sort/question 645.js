/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const n = nums.length
    let i = 0
    while (i < n) {
        const correctIdx = nums[i] - 1
        if (nums[correctIdx] !== nums[i]) {
            const temp = nums[correctIdx]
            nums[correctIdx] = nums[i]
            nums[i] = temp
        }
        else { i++ }
    }
    for (i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return [nums[i], i + 1]
        }
    }
};