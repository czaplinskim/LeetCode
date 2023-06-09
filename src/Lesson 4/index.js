// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {

    let i = init;

    return {
        increment: () => { return ++init },
        decrement: () => { return --init },
        reset: () => { return init = i }
    }
    
};

const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0

