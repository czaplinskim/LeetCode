// Collatz 

// Normal

 function collatzRegular(n) {

    let i = 0

    while(n != 1) {

           if(n % 2 == 0) {
            n = n/2 
            i++
        } else { 
            n = 3 * n + 1
            i++
        }

    }

    return i;

}

console.log(collatzRegular(2))