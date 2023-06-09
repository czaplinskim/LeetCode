// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function(letters, target) {

    return letters[letters.length - 1] < target || letters.lastIndexOf(target) === letters.length - 1 
    ? letters[0] 
    : letters[letters.findIndex(function(el) { return el > target })] 
    
};

const letters = ["c","f","j"]
const target = "j"

console.log(nextGreatestLetter(letters, target))