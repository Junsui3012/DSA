// Original Logic
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tMap = new Map()
    for(let i=0; i<t.length; i++){
        tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1)
    }

    let resMap = new Map()
    let start = 0
    let end = Math.min()
    let l = 0

    for(let r=0; r<s.length; r++){
        if (tMap.has(s[r])) resMap.set(s[r], (resMap.get(s[r]) ?? 0) + 1)
        while (checkMaps(tMap, resMap)){
            const curWidth = end-start+1
            const window = r-l+1
            if (window<curWidth){
                start = l
                end = r
            }
            if (tMap.has(s[l])) resMap.set(s[l], resMap.get(s[l]) - 1)
            l++
        }
    }
    return (end-start+1)===Math.min() ? "" : s.slice(start, end+1)
};

const checkMaps = (tMap, sMap) => {
    if (tMap.size !== sMap.size) return false
    for (const [key, value] of tMap){
        if (!(sMap.has(key) && sMap.get(key)>=value)) return false
    }
    return true
}

// Optimal Logic
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length<t.length) return ""

    const need = new Map()
    for(const c of t){
        need.set(c, (need.get(c) ?? 0) + 1)
    }
    const required = need.size

    let window = new Map()
    let start = 0
    let minLen = Infinity

    let formed = 0

    let l = 0

    for(let r=0; r<s.length; r++){
        const right = s[r]
        window.set(right, (window.get(right) ?? 0) + 1)

        if (need.has(right) && window.get(right)===need.get(right)) formed++

        while (formed === required){
            const left = s[l]
            const windowWidth = r-l+1
            if (windowWidth<minLen){
                start = l
                minLen = windowWidth
            }
            window.set(left, window.get(left)-1)
            l++
            if(need.has(left) && window.get(left)<need.get(left)) formed--
        }
    }
    return (minLen)===Infinity ? "" : s.slice(start, start+minLen)
};