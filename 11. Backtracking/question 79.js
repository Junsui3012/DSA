/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length
    const n = board[0].length
    const l = word.length

    const boardFreq = {}
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const char = board[i][j]
            boardFreq[char] = (boardFreq[char] || 0) + 1
        }
    }

    const wordFreq = {}
    for (const char of word) {
        wordFreq[char] = (wordFreq[char] || 0) + 1
        if (!boardFreq[char] || boardFreq[char < wordFreq[char]]) {
            return false
        }
    }

    if (boardFreq[word[0]] > boardFreq[word[word.length - 1]]) {
        word = word.split("").reverse().join('')
    }

    const backtrack = (i, j, charAt) => {
        if (charAt === l) return true
        if (i < 0 ||
            j < 0 ||
            i === m ||
            j === n ||
            board[i][j] !== word[charAt]) return false

        board[i][j] = "#"

        const up = backtrack(i - 1, j, charAt + 1)
        const down = backtrack(i + 1, j, charAt + 1)
        const left = backtrack(i, j - 1, charAt + 1)
        const right = backtrack(i, j + 1, charAt + 1)

        board[i][j] = word[charAt]

        return up || down || left || right
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if (backtrack(i, j, 0)) return true
            }
        }
    }
    return false
};
