// https://leetcode.com/problems/equal-row-and-column-pairs/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {

     // for(let i = 0; i < grid.length; i++ ) {

    //     let tempArray = []
      
    //         for(let n = 0; n < grid[i].length; n++) {
    //             tempArray.push(grid[n][i])
    //         }

    //     columns.push(tempArray.join())
    //     rows.push(grid[i].join())
    // }

    // OR:

    let rows = grid.map(el => el.join())
    let columns = grid.map((el, i) => el.map((e, n) => grid[n][i]).join())

    // 

    let counter = 0

    for (let row of rows) {
        for (let column of columns) {
            if (row === column) { counter++ }
        }
    }

    return counter
    
};

const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]


console.log(equalPairs(grid))