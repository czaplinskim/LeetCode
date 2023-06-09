// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// First solution 

var countNegatives = function(grid) {

    let counter = 0

    grid.forEach(element => {
        
        element.findIndex(function(elem){ if(elem > 0) {
            counter++
        }})
        
    });

    return counter
    
};

// Second solution 

var countNegatives = function(grid) {

    return grid.flat().grid.filter(ele => ele < 0).length 

}

const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
console.log(countNegatives(grid))