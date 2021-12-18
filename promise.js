// Basic promise

//const axios = require("axios");
const axios = require('axios');


// promise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// const axios = require('axios');

// async function fetchData(url) {
//     const promise = await axios.get(url);

//     console.log(promise.data)
// }

const urlList = [
    "https://www.boredapi.com/api/activity", 
    "https://jsonplaceholder.typicode.com/todos/1", 
    "https://jsonplaceholder.typicode.com/todos/2"
];

let promiseList = [];

// async function myFunction() {
//     for(let i = 0; i < urlList.length; i++) {
//         const urlFetcher = await axios.get(urlList[i]);
//         console.log(urlFetcher.data);
//     }
// }
//myFunction();

for(let i = 0; i < urlList.length; i++) {
    const urlFether = axios.get(urlList[i]);
    // urlFether.then((response) => {
    //     console.log(response.data);
    // }).catch((err) => {
    //     console.log(err);
    // })
    promiseList.push(urlFether);

}

Promise.all(promiseList).then((response) => {
    console.log(response[2].data);
})
//fetchData(url);
//let promise = axios(url);
  
// promise
//     .then((res) => {
//         console.log(res.data)
//     })
//     .catch((err) => {
//         console.log(err.response.data)
//     })


// async function myPromise(promise) {
//     const value = await promise;
//     console.log(value);
// }
// myPromise(promise);
// console.log("rahad saidul");
