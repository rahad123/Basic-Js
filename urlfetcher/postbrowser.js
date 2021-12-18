
const express = require('express')
const app = express();
const axios = require('axios');

// let storeData = [];
// app.get('/url', (res, req) => {
//   axios.all([
//     axios.get("https://jsonplaceholder.typicode.com/todos/1"),
//     axios.get("https://jsonplaceholder.typicode.com/todos/2")
//   ])
//     .then(res => {
//       for(let i = 0; i < res.length; i++) {
//         console.log(res[i].data);
//         //res.json(res[i].data);
//         storeData.push(res[i].data);

//       }
//     })
//     res.json(storeData);
// })



let storeData = [];
  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/todos/1"),
    axios.get("https://jsonplaceholder.typicode.com/todos/2")
  ])
    .then(res => {
      for(let i = 0; i < res.length; i++) {
        //res.json(res[i].data);
        console.log(res[i].data);
        storeData.push(res[i].data);

      }
    })


