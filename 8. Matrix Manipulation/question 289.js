/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length
    const n = board[0].length
    // const directions = [[-1, -1], [-1, 0], [-1, 1],
    //                     [0 , -1],          [0 , 1],
    //                     [1 , -1], [1 , 0], [1 , 1]]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0
            for (let dr = -1; dr < 2; dr++) {
                for (let dc = -1; dc < 2; dc++) {
                    const nRow = i + dr
                    const nCol = j + dc
                    if ((dr === 0 && dc === 0) || !(0 <= nRow && nRow < m && 0 <= nCol && nCol < n)) {
                        continue
                    }
                    sum = sum + (board[nRow][nCol] > 0)
                }
            }
            if (board[i][j] < 1) {
                if (sum === 3) {
                    board[i][j] = -1
                }
            }
            else {
                if (sum < 2 || sum > 3) {
                    board[i][j] = 2
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] < 0) {
                board[i][j] = 1
            }
            else if (board[i][j] > 1) {
                board[i][j] = 0
            }
        }
    }
};