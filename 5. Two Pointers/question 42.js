/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1
    let totalWater = 0

    let leftMax = 0
    let rightMax = 0

    while (left < right) {
        if (height[left] <= height[right]) {
            if (leftMax > height[left]) totalWater += leftMax - height[left]
            else leftMax = height[left]
            left++
        }
        else {
            if (rightMax > height[right]) totalWater += rightMax - height[right]
            else rightMax = height[right]
            right--
        }
    }
    
    return totalWater
};