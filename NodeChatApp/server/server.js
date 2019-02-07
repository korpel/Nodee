const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var server = http.createServer((req,res)=>{

});
var app = express();

app.use(express.static(publicPath));


app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});