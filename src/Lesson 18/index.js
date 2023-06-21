// https://leetcode.com/problems/length-of-last-word/ 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    s = s.replace(/\s+/g, ' ').trim()
    s = s.split(" ")
    
    lw = Array.from(s[s.length - 1])

    return lw.length

};

let s = "   fly me   to   the moon  "

console.log(lengthOfLastWord(s))