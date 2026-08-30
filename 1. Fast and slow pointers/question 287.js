/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    hare = nums[0]
    tort = nums[0]

    do {
        hare = nums[nums[hare]]
        tort = nums[tort]
    } while (hare !== tort)

    temp = nums[0]
    while (temp !== hare){
        temp = nums[temp]
        hare = nums[hare]
    }
    return hare
};