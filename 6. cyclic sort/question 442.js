/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const n = nums.length
    if (n === 1) return []
    for (let i = 0; i < n; i++) {
        while (nums[i] !== nums[nums[i] - 1]) {
            const index = nums[i] - 1
            const temp = nums[index]
            nums[index] = nums[i]
            nums[i] = temp
        }
    }
    const res = []
    for (let i = 1; i < n; i++) {
        if (nums[i] !== i+1) res.push(nums[i])
    }
    return res
};