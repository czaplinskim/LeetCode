// const burger = new Promise((resolve, reject) => {

//     const success = false 

//     setTimeout(() => { 

//         if(success) {
//             resolve(success)
//         } else {
//             reject(success)
//         }
                
//     }, 3000)


// })


// burger
// .then((result) => {
//     console.log('raz')
// })

const xhr = new XMLHttpRequest


xhr.onload = function() {
         return xhr.response
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
xhr.send()

const statusInfo = new Promise((resolve, reject) => {

        resolve(xhr.responseText)
        reject(xhr.readyState)

})

statusInfo
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})

