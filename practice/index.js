const express=require('express');
const {connection}=require('./db')
const app=express();
const {userRoute}=require('./Routers/userRoute')
const {noteRoute}=require('./Routers/noteRoute')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use('/user',userRoute)
app.use('/note',noteRoute)
app.get('/home',(req,res)=>{
res.send('home screen')
})

app.listen(8080,async (req,res)=>{
    await connection
    console.log("server is running on 8080");
})