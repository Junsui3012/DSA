// Bi-directional BFS solution
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const n = beginWord.length

    if (!wordList.includes(endWord) || beginWord === "" || wordList == []) {
        return 0
    }

    // n-directional BFS
    // originator: 0->beginWord, 1->endWord

    // "h*t" -> [hot, hit, hat]
    const bucket = new Map()

    // "hot" -> [originator]
    const visited = new Map()
    visited.set(beginWord, [0, 1])
    visited.set(endWord, [1, 1])

    // [curWord, originator, curDistance]
    const queue = [[beginWord, 0, 1], [endWord, 1, 1]]
    let head = 0

    wordList.forEach(item => {
        for (let j = 0; j < n; j++) {
            const curPattern = item.slice(0, j) + "*" + item.slice(j + 1)
            if (!bucket.has(curPattern)) bucket.set(curPattern, [])
            bucket.get(curPattern).push(item)
        }
    })

    while (head < queue.length) {
        const [curWord, source, curDistance] = queue[head++]

        for (let i = 0; i < n; i++) {
            const curPattern = curWord.slice(0, i) + "*" + curWord.slice(i + 1)
            for (const next of bucket.get(curPattern) ?? []) {
                const v = visited.get(next)
                if (v) {
                    if (v[0] !== source) return curDistance + v[1]
                    continue
                }
                visited.set(next, [source, curDistance + 1])
                queue.push([next, source, curDistance + 1])
            }
        }
    }
    return 0
}

// Alternate: Simple BFS
/*
var ladderLength = function (beginWord, endWord, wordList) {
    const n = wordList.length
    const wordSet = new Set(wordList)
    const nextWords = (curWord) => {
        const nextNodes = []
        for (let i = 0; i < curWord.length; i++) {
            const c = curWord[i]
            for (let code = 97; code < 123; code++) {
                const char = String.fromCharCode(code)
                if (char === c) continue

                const newWord = curWord.slice(0, i) + char + curWord.slice(i + 1)
                if (wordSet.has(newWord)) nextNodes.push(newWord)
            }
        }
        return nextNodes
    }
    const queue = []
    let head = 0

    queue.push([beginWord, 1])

    if (queue.length === 0) return 0

    while (head < queue.length) {
        const [curWord, seqNum] = queue[head]
        head++
        if (curWord === endWord) return seqNum
        for (const word of nextWords(curWord)) {
            if (wordSet.has(word)) {
                wordSet.delete(word)
                queue.push([word, seqNum + 1])
            }
        }
    }

    return 0
};
*/
