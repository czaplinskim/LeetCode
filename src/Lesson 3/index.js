// NOT FROM LEET

// const arr = [5, 4, 3, 101, 9, 99]

// const sortFunc = (a, b) => {
//     console.log(`porównanie ${a} z ${b}`)
//     return a - b
// }

// console.log(arr.sort(sortFunc))

// const elem1 = 'Jeden'
// const elem2 = 'Dwa'
// console.log(new Array(elem1, elem2))

// const tab = new Array('Ala', 'Michał', 'Tomek')

// let iterator = tab[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// const obj = new Object({

//     names: ["Ala", "Bala", "Cala"],

//     [Symbol.iterator] : function() {

//         let index = 0;
//         const names = this.names;

//         return {
//             next() {
//                 if(index >= names.length) {
//                     index = 0;
//                     return { value: undefined, done: true} 
//                 } else {
//                     return { value: names[index++], done: false}
//                 }
//             }
//         }
//     }
// })

// const obj = new Object({
//     names: [1, 2, 3],

//     [Symbol.iterator]: function() {
        
//         let index = 0;
//         const names = this.names;

//         return {
//             next() {
//                 if(index >= names.length) {
//                     index = 0;
//                     return { value: undefined, done: true }
//                 } else {
//                     return { value: names[index++], done: false}
//                 }
//             }
//         }  
//     }
// })

// let iterator = obj[Symbol.iterator]()

// const obj = new Object({
//     names: [1, 2, 3],

//     *[Symbol.iterator]() {
//         for(const el in this.names) {
//             yield el
//         }
//     }
        
    
// })

// const iterator = obj[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


const obj = [
    {
        value: 1,
        name: 'Ala'
    },
    {
        value: 2,
        name: 'Ola'
    },
    {
        value: 3,
        name: 'Basia'
    }
]

for (let el of obj) {

    for (let [i, y] of Object.entries(el)) {
        console.log(`${i} oraz ${y}`)
    }
}