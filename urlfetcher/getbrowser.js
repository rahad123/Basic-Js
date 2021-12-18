const express = require('express')
const app = express();
const axios = require('axios');
const { response } = require('express');

const urlList = [
   "https://www.boredapi.com/api/activity", 
   "https://jsonplaceholder.typicode.com/todos/1", 
   "https://jsonplaceholder.typicode.com/todos/2"
];
  
//const port = 3000 

const allRequests = [];
app.get('/file', (req, resp) => {
  for (let i = 0; i < urlList.length; i++) { 
    let httpRequest = axios.get(urlList[i]);
    allRequests.push(httpRequest)  
  }
  const result = []; 
  Promise.all(allRequests) 
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        result.push(res[i].data); 
      }
        
      // It will wait for event loop and push it to the main thread afterwards
      resp.json(result);

    // It will terminate the main thread
    // resp.json(result);
  })
})
 
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })