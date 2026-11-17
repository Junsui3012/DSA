/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const n = s.length
    const res = []
    const cur = []

    const isPalindrome = (l, r) => {
        while (l < r) {
            if ((s.charCodeAt(l++) ^ s.charCodeAt(r--)) !== 0) return false
        }
        return true
    }

    const backtrack = (start) => {
        if (start === n) {
            res.push([...cur])
        }
        for (let i = start; i < n; i++) {
            if (!isPalindrome(start, i)) continue

            cur.push(s.slice(start, i + 1))
            backtrack(i + 1)
            cur.pop()
        }
    }
    backtrack(0)
    return res
};
