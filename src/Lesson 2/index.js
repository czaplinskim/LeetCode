// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {

    const array = Array.from(String(x), Number);
    let trueCounter = 0

    for (let i = 0; i < array.length; i++) {
        
        const reversedIndex = array.length - i - 1
        if(array[i] == array[reversedIndex]){ trueCounter++ }

    }

    return (trueCounter == array.length ? true : false)
    
};


console.log(isPalindrome(122221))