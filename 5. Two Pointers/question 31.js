/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let ind = -1
    const n = nums.length
    for (let i=n-2; i>=0; i--){
        if (nums[i]<nums[i+1]){
            ind = i
            break
        }
    }
    if(ind===-1){
        nums.reverse()
        return
    }
    for(let i=n-1; i>ind; i--){
        if(nums[i]>nums[ind]){
            [nums[i],nums[ind]] = [nums[ind],nums[i]]
            break
        }
    }
    let start=ind+1, end=n-1
    while (start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]]
        start++
        end--
    }
    return
};
