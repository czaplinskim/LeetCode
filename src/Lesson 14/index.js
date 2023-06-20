
const arr = [1, 2, 3, 4, 5, 6, 8, 9]

// Regular

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {

        let avg = Math.floor((left + right)/2);

        if(arr[avg] === target) {
            return true;
        } else if(arr[avg] < target) {
            left = avg  + 1
        } else {
            right = avg - 1 
        }

    }

    return false;

}

document.write(`Binary search result is: ${binarySearch(arr, 2)}`)

// Recursive


function recursiveBinarySearch(arr, target, start, end ) {
 
// wyrzucamy error 
    if(start > end) { return false }

    let avg = Math.floor((start + end)/2);

    if(arr[avg] === target) {

        return true;

    } else if(arr[avg] > target) {

        return recursiveBinarySearch(arr, target, start, avg-1);

    } else if(arr[avg] < target) {

        return recursiveBinarySearch(arr, target, avg + 1, end)

    } 
    
    return false

}

document.write(`<p>Recursive binary search result is: ${recursiveBinarySearch(arr, 1, 0, arr.length - 1)}</p>`)




