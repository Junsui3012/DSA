/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const n = nums.length
    const res = []
    const perm = []
    const numMap = new Map()
    for (let i = 0; i < n; i++) {
        const cur = nums[i]
        if (!numMap.has(cur)) numMap.set(cur, 0)
        numMap.set(cur, numMap.get(cur) + 1)
    }

    const backtrack = () => {
        if (perm.length === n) {
            res.push([...perm])
            return
        }

        for (const num of numMap.keys()) {
            if (numMap.get(num) > 0) {
                perm.push(num)
                numMap.set(num, numMap.get(num) - 1)
                
                backtrack()

                perm.pop()
                numMap.set(num, numMap.get(num) + 1)
            }
        }
    }

    backtrack()
    return res
};
