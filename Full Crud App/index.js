const express=require('express');
const connection=require('./db')
const app=express();
const port=8080;
const {userroute}=require('./routes/userroute')
app.use(express.json())
app.use("/user",userroute)
app.get('/',(req,res)=>{
    res.send("end page")
})

app.listen(8080,async ()=>{
    await connection
    console.log(`your server is live on ${port} port`);
})