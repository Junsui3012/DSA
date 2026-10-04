/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const n = intervals.length
    const res = []
    const sorted = intervals.sort((a, b) => a[0] - b[0])
    let j = 0
    res.push(sorted[0])

    for (let i = 1; i < n; i++) {
        const left = sorted[i][0]
        const right = sorted[i][1]
        const curEle = res[j]
        if (left > curEle[1]) {
            res.push([left, right])
            j++
        }
        else {
            curEle[1] = right > curEle[1] ? right : curEle[1]
        }
    }

    return res
};