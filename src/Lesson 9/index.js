

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

// const xhr = new XMLHttpRequest


// xhr.onload = function() {
//          return xhr.response
// }

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
// xhr.send()

// const statusInfo = new Promise((resolve, reject) => {

//         resolve(xhr.responseText)
//         reject(xhr.readyState)

// })

// statusInfo
// .then(result => {
//     console.log(result)
// })
// .catch(err => {
//     console.log(err)
// })



// function loadImageFromULR(url) {
//     return new Promise((resolve, reject) => {

//         const img = new Image()

//         img.addEventListener('load', event => { resolve(img) })
//         img.addEventListener('error', reason => { `Reason is ${reason}`})

//         img.src = url
//     })
// }

// loadImageFromULR("https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg")
// .then(result => {
//     console.log(result)
//     document.querySelector("body").appendChild(result)})
// .catch(err => {console.log(err)})

// const img2 = new Image()
// img2.src = 'https://cdn2.thecatapi.com/images/ebv.jpg'
// document.querySelector("body").appendChild(img2)



// console.log('1')

// const movies = [{ id: 1, categoryId: 1, name: "Titanic"}]
// const categories = [{id: 1, categoryName: "SciFi"}]

// function findMovie(id) {
//     return new Promise((resolve, reject) => {
//         const movie = movies.find( movie => movie.id == id)
//         resolve(movie)
//     })
// }

// function findCategory(movie) {
//     return new Promise((resolve, result) => {
//         const category = categories.find( category => category.id == movie.id)

//         resolve(category)
//     })
// }

// findMovie(1)
// .then(result => findCategory(result))
// .then(console.log)

console.log('r')

const api = "https://api.spotify.com/v1"
const artistId = "3WrFJ7ztbogyGnTHbHJFl2"

console.log(`${api}/artists/${artistId}`)
axios.get('https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });