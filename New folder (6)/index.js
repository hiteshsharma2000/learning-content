const express=require('express');
const {connection}=require('./db');

const app=express()
const {userRoute}=require('./Routes/UserRoute')

app.use(express.json())
app.use('/user',userRoute)

app.get('/',async (req,res)=>{
    try {
        res.send('welcome to home page')
    } catch (error) {
        res.send(error)
    }
})

app.listen(8080,async (req,res)=>{
    try {
        await connection
    console.log("connected successfully")
    } catch (error) {
        console.log(error)
    }
    
})