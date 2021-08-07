// // server using node
const http = require('http');

http.createServer((req, res) => {
    if(req.url==='/'){
        res.write('home page');
        res.end();
    }
    else{
        res.write("404")
        res.end()
    }
}).listen(3000, () => console.log('port started at 3000'))

// server using express
// install express - npm i express
const express = require('express')

const app = express();
app.get('/', (req, res)=>{
    res.send('hello from express')
}).listen(4000, ()=>console.log('express server at 4000'))