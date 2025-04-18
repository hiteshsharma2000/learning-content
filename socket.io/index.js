const express=require('express')
const http=require('http')
const path = require('path')
const app=express()

const server=http.createServer(app)

const {Server}=require('socket.io')
const io=new Server(server)

app.get('/',(req,res)=>{
    res.sendFile(path.resolve( './index.html'));
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
server.listen(2000,()=>{
    console.log('listen on 2000')
})
