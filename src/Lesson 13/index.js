// https://leetcode.com/problems/equal-row-and-column-pairs/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {


    // let newArray = []
    // let newArray2 = []

    // for(let i = 0; i < grid.length; i++ ) {

    //     let tempArray = []
      
    //         for(let n = 0; n < grid[i].length; n++) {

    //             tempArray.push(grid[n][i])
    //         }

    //     newArray.push(tempArray.join())
    //     newArray2.push(grid[i].join())
    // }

    // newArray = [...newArray, ...newArray2]

    // let counts = newArray.filter((element, index) => {
    // return newArray.indexOf(element) == index; });
     
    // return newArray.length - counts.length



    // for(let i = 0; i < grid.length; i++ ) {

    //     let tempArray = []
      
    //         for(let n = 0; n < grid[i].length; n++) {

    //             tempArray.push(grid[n][i])
    //         }

    //     newArray.push(tempArray.join())
    //     newArray2.push(grid[i].join())
    // }

    // newArray = [...newArray, ...newArray2]

    // let counts = newArray.filter((element, index) => {
    // return newArray.indexOf(element) == index; });
     
    // return newArray.length - counts.length



    let rows = []
    let columns = []

    let counter = 0

    for(let i = 0; i < grid.length; i++ ) {

        let tempArray = []
      
            for(let n = 0; n < grid[i].length; n++) {

                tempArray.push(grid[n][i])
            }

        columns.push(tempArray.join())
        rows.push(grid[i].join())
    }

    

    for (let row of rows) {
        for (let column of columns) {
            if (row === column) counter++
        }
    }

    return counter
    
};

const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]


console.log(equalPairs(grid))