// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {
    const indexTable = [];
   
       for (let i = 0; i < nums.length; i++) {
   
           const num1 = nums[i]
   
           for (let x = 0; x < nums.length; x++) {
   
              const num2 = nums[x]
   
              if(i != x) {
   
                   if (num1 + num2 === target) {
                       indexTable.push(i, x)
                       break;
                   } 
              }  
           }
           
           if (indexTable.length == 2) { break; }
   
       }
   
       return indexTable
   
       
   };