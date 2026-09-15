/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length
    let i = 0
    while (i < n) {
        if (nums[i] < n && nums[i] != i) {
            const temp = nums[nums[i]]
            nums[nums[i]] = nums[i]
            nums[i] = temp
        }
        else i++
    }
    for (let j = 0; j < n; j++) {
        if (nums[j] != j) return j
    }
    return n
};

/*
var missingNumber = function(nums) {
    let xor = 0
    for (let i = 0; i<nums.length; i++){
        xor = xor ^ i
        xor = xor ^ nums[i]
    }
    return xor ^ nums.length
};
*/

/*
var missingNumber = function(nums) {
    const n = nums.length
    const n_sum = n * (n + 1) / 2
    let totalSum = 0
    nums.forEach((val) => {totalSum += val})
    return n_sum - totalSum
};
*/