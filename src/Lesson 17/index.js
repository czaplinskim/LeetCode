/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {


    return nums.sort((a, b) =>  b - a )[Math.floor(nums.sort((a, b) =>  b - a ).length/2)]
    
};

let nums = [3,2,3] // Output: 3
let nums2 = [2,2,1,1,1,2,2] // Output: 2 

console.log(majorityElement(nums2))
