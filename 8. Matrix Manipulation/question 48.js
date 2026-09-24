// Optimal
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length
    const rows = ~~(n / 2)
    const cols = ~~((n + 1)/ 2)
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const c1 = matrix[row][col]
            const c2 = matrix[col][n - 1 - row]
            const c3 = matrix[n - 1 - row][n - 1 - col]
            const c4 = matrix[n - 1 - col][row]
            matrix[row][col] = c4
            matrix[col][n - 1 - row] = c1
            matrix[n - 1 - row][n - 1 - col] = c2
            matrix[n - 1 - col][row] = c3
        }
    }
};

// Alternate - Brute force
// var rotate = function (matrix) {
//     const n = matrix.length
//     const n_2 = ~~(n / 2)
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             const temp = matrix[i][j]
//             matrix[i][j] = matrix[j][i]
//             matrix[j][i] = temp
//         }
//     }
//     matrix.forEach((row) => {
//         for (let col = 0; col < n_2; col++) {
//             const temp = row[col]
//             row[col] = row[n - 1 - col]
//             row[n - 1 - col] = temp
//         }
//     })
// };