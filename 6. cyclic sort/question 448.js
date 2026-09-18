/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const res = []
    const n = nums.length
    let i = 0
    while (i < n) {
        const correctIdx = nums[i] - 1
        if (nums[i] !== nums[correctIdx]) {
            const temp = nums[correctIdx]
            nums[correctIdx] = nums[i]
            nums[i] = temp
        }
        else { i++ }
    }
    for (i = 0; i < n; i++) {
        if (nums[i] - 1 !== i) res.push(i + 1)
    }
    return res
};
