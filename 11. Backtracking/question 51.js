/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const backtrack_half = Math.floor((n + 1) / 2)
    const queenPos = new Set()
    const res = []

    const checkQueen = (i, j) => {
        for (const [iq, jq] of queenPos) {
            if (jq === j ||
                iq + jq === i + j ||
                iq - jq === i - j) {
                return false
            }
        }
        return true
    }

    const backtrack = (i) => {
        if (i === n) {
            const board = new Array(n)
            for (const [i, j] of queenPos) {
                board[i] = ".".repeat(j) + "Q" + ".".repeat(n - j - 1)
            }
            res.push(board)
            const rev_board = board.map(val => val.split('').reverse().join(''))
            if (board[0] !== rev_board[0]) res.push(rev_board)
            return
        }
        for (let j = 0; j < n; j++) {
            if (!checkQueen(i, j)) continue

            const curPos = [i, j]
            queenPos.add(curPos)

            backtrack(i + 1)

            queenPos.delete(curPos)
        }
    }

    for (let j = 0; j < backtrack_half; j++) {
        const curPos = [0, j]
        queenPos.add(curPos)
        backtrack(1)
        queenPos.delete(curPos)
    }

    return res
};

// Alternative: Optimized
/**
var solveNQueens = function (n) {
    const backtrack_half = Math.floor((n + 1) / 2)
    const queenPos = new Array(n)
    const lDig = new Array(2 * n - 1).fill(0)
    const col = new Array(n).fill(0)
    const rDig = new Array(2 * n - 1).fill(0)
    const res = []

    const backtrack = (i) => {
        if (i === n) {
            const board = new Array(n)
            for (let i = 0; i < n; i++) {
                const j = queenPos[i]
                board[i] = ".".repeat(j) + "Q" + ".".repeat(n - j - 1)
            }
            res.push(board)
            const rev_board = board.map(val => val.split('').reverse().join(''))
            if (board[0] !== rev_board[0]) res.push(rev_board)
            return
        }
        for (let j = 0; j < n; j++) {
            if (lDig[n + i - j] === 1 ||
                col[j] === 1 ||
                rDig[i + j] === 1) continue

            lDig[n + i - j] = 1
            col[j] = 1
            rDig[i + j] = 1
            queenPos[i] = j

            backtrack(i + 1)

            lDig[n + i - j] = 0
            col[j] = 0
            rDig[i + j] = 0
        }
    }

    for (let j = 0; j < backtrack_half; j++) {
        lDig[n - j] = 1
        col[j] = 1
        rDig[j] = 1
        queenPos[0] = j

        backtrack(1)

        lDig[n - j] = 0
        col[j] = 0
        rDig[j] = 0
    }

    return res
};
*/