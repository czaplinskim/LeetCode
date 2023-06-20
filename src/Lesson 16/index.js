// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {

    if (nums.length === 1 && nums[0] === 1) { return true }

    let i = 0;
    let n = 0;

    // console.log(nums.length)

    while (n < nums.length) {

        console.log(i)
        console.log(nums[nums.length - 1])

        console.log('----')

        if(nums[i] === 0 && nums.length > 1) {return false}


        if(nums.indexOf(nums[i]) >= nums[nums.length - 1]) { return true }

        let index = i + nums[i]
        i = index

        n++

    }
    
    return false
};

// let nums = [1,2]
// let nums = [2, 0]
// let nums = [3,2,1,0,4]
// let nums = [2,3,1,1,4]
let nums = [1,0,1,0]

console.log(canJump(nums))

