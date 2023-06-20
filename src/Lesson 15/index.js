// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 

// You are given an array prices where prices[i] is the price of a given stock on the ith day. 

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let smallest = Math.min(...prices)
    let smallestIndex = prices.indexOf(smallest)

    if(smallestIndex = prices.indexOf(smallest) == prices.length) { return 0 }
    let biggest = Math.max(...prices.slice(smallestIndex))

    return biggest - smallest
    
};

let prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))