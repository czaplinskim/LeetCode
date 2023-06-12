// https://leetcode.com/problems/missing-number/

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.



/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let len = nums.length;
    let sum = len;
    for(let i = 0; i < len; i++) {
        sum = sum + i - nums[i];
    }
    return sum;
        
    };

// const nums = [0, 1, 3]
const nums = [1]

console.log(missingNumber(nums))