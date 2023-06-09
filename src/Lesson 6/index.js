/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function(letters, target) {


    // if(letters.indexOf(target) === letters.length - 1) 
    //     { return letters[0] } 
    // else { 
    //     return letters[letters.findIndex(function(el) { return el > target })] 
    // } 



    // return letters.lastIndexOf(target) === letters.length - 1 && letters.indexOf(target) == -1
    // ? letters[0] 
    // : letters[letters.findIndex(function(el) { return el > target })]



    return letters[letters.length - 1] < target || letters.lastIndexOf(target) === letters.length - 1 ? letters[0] 
    : letters[letters.findIndex(function(el) { return el > target })] 

    
    
};

// const letters = ["x","x","y","y"]
// const target = "z"

// const letters = ["c","f","j"]
// const target = "j"

console.log(nextGreatestLetter(letters, target))