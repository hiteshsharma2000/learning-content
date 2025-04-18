const express=require('express')
const connection=require('./db')
const {UserRoute}=require('./Routes/UserRoute')
const cors=require('cors')
const app=express()
const cookieparser=require('cookie-parser')
const {PostRoute}=require('./Routes/PostRoute')

app.use(express.json())
app.use('cors',{
    origin:"*"
})
app.use(cookieparser())
app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.get("/",async(req,res)=>{
    try {
        
  res.status(200).send({msg:"welcome to home screen"})

    } catch (error) {
        
    res.status(404).send({"error":error})

    }
})

app.listen(2200,async ()=>{
    try {
        await connection
        console.log('connected to database')
        
    } catch (error) {
    console.log('failed to connect')
    }
})