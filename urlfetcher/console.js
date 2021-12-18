const axios = require('axios');
const fs = require('fs');

const urlList = [
    "https://jsonplaceholder.typicode.com/todos/1", 
    "https://jsonplaceholder.typicode.com/todos/3"
];
const fileList = [];
const myFunction = async() => {
    try {
        for(let i = 0; i < urlList.length; i++) {
            const urlFetcher = await axios.get(urlList[i]);
            // console.log(urlFetcher.data);
            fileList.push(urlFetcher.data);
        }
        console.log(fileList);

        fs.writeFileSync('filesystem.json', JSON.stringify(fileList), 'utf-8');
    } catch(err){
        console.log(err);
    }
   //fs.writeFileSync("filesystem.json", JSON.stringify(fileList));
}
myFunction();