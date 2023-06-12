//  https://leetcode.com/problems/summary-ranges/solutions/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums, s = nums[0]) {

    return nums.reduce((p,c,i) =>((c+1 !== nums[i+1] ? p.push(s === c ? `${c}` : `${s}->${c}`) : '') && (s = nums[i+1]), p), [])


};

const nums1 = [0,1,2,4,5,7]

console.log(summaryRanges(nums1))