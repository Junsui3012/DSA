/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length
    let firstCol = 1
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstCol = 0
            break
        }
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            matrix[0][0] = 0
            break
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }
    for (let j = n - 1; j > 0; j--) {
        if (matrix[0][j] === 0) {
            for (let i = m - 1; i > 0; i--) matrix[i][j] = 0
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        if (matrix[i][0] === 0) {
            for (let j = n - 1; j > 0; j--) matrix[i][j] = 0
        }
    }
    if (firstCol === 0) {
        for (let i = 0; i < m; i++) matrix[i][0] = 0
    }
};

// Alternate
// var setZeroes = function (matrix) {
//     const m = matrix.length
//     const n = matrix[0].length
//     const rowSet = new Set()
//     const colSet = new Set()
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (matrix[i][j] === 0) {
//                 rowSet.add(i)
//                 colSet.add(j)
//             }
//         }
//     }
//     rowSet.forEach(row => {
//         for (let j = 0; j < n; j++) {
//             matrix[row][j] = 0
//         }
//     })
//     colSet.forEach(col => {
//         for (let i = 0; i < m; i++) {
//             matrix[i][col] = 0
//         }
//     })
// };