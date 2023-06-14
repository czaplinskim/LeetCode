// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    return JSON.stringify(p)===JSON.stringify(q)
    
};

// let p = [1,2,3]
// let q = [1,2,3]

let p = [1, 2]
let q = [1, null, 2]

console.log(isSameTree(p, q))