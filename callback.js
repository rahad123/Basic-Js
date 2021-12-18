const axios = require('axios');
var express = require('express');
var app = express();

let storeData = [];
app.get('/', (req, res) => {
  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/todos/1"),
    axios.get("https://jsonplaceholder.typicode.com/todos/2")
  ])
    .then(response => {
      for(let i = 0; i < response.length; i++) {
        //res.json(res[i].data);
        //console.log(res[i].data);
        storeData.push(response[i].data);
      }
      for(let i = 0; i < storeData.length; i++) {
        console.log(storeData[i]);
      }
      res.send(storeData);
    }) 
})
    
app.listen(3000);
