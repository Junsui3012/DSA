/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxWater = 0

    while (left < right){
        const curWater = (right - left) * ((height[left] < height[right]) ? height[left] : height[right])
        maxWater = (maxWater > curWater) ? maxWater : curWater

        if (height[left] <= height[right]) { left++ }
        else { right-- }
    }
    return maxWater
};
