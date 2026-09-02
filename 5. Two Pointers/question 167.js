/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left<right){
        const curSum = numbers[left] + numbers[right]
        if (curSum === target) break
        else if (curSum > target) right--
        else left++
    }
    return [left+1, right+1]
};