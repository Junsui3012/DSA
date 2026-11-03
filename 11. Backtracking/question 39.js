/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    const n = candidates.length
    const res = []
    const cur = []
    const backtrack = (num, i) => {
        if (num === target) {
            res.push([...cur])
            return
        }
        for (let j = i; j < n; j++) {
            const curSum = num + candidates[j]
            if (curSum > target) return

            cur.push(candidates[j])

            backtrack(curSum, j)

            cur.pop()
        }
    }
    backtrack(0, 0)
    return res
};
