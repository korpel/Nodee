const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const {generateMessage, generateLocationMessage} = require('./utils/message')
const {isRealString} = require('./utils/validation');


const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));


    socket.on('join', (params, callback) =>{
        if (!isRealString(params.name) || (!isRealString(params.room)) {
            
        }
    });


    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();


        // socket.broadcast.emit('newMessage'.{
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });
   
    socket.on('createLocationMessage', (coords)=>{
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude,coords.longtitude));
    });

    socket.on('disconnect',()=>{
        console.log('User disconnected');
    });
});



server.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});