/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b)
    let left = 0
    let right = tokens.length - 1
    let bestScore = 0
    let curScore = 0

    while (left <= right){
        if (tokens[left] <= power){
            curScore++
            power -= tokens[left]
            left++
            bestScore = (curScore > bestScore) ? curScore : bestScore
        }
        else if (curScore > 0){
            curScore--
            power += tokens[right]
            right--
        }
        else break
    }
    return bestScore
};