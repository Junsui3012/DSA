/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const res = []
    const m = matrix.length
    const n = matrix[0].length
    let topSet = 0
    let bottomSet = m - 1
    let leftSet = 0
    let rightSet = n - 1
    while (topSet <= bottomSet && leftSet <= rightSet) {
        for (let j = leftSet; j <= rightSet; j++) res.push(matrix[topSet][j])
        topSet++
        for (let i = topSet; i <= bottomSet; i++) res.push(matrix[i][rightSet])
        rightSet--
        if (topSet <= bottomSet) {
            for (let j = rightSet; j >= leftSet; j--) res.push(matrix[bottomSet][j])
            bottomSet--
        }
        if (leftSet <= rightSet) {
            for (let i = bottomSet; i >= topSet; i--) res.push(matrix[i][leftSet])
            leftSet++
        }
    }
    return res
};