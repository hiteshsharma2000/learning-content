const express=require('express')
const connection=require('./db')
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
const {displayRoute}=require('./Routes/displayRoute')
const {sliderRoute}=require('./Routes/SliderRoute')


app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/display",displayRoute)
app.use("/slider",sliderRoute)
app.get("/",async (req,res)=>{
    try {
        res.status(200).send({msg:"welcome to home"})

    } catch (error) {
        res.send({"error":error})
    }
})

app.listen(8080,async ()=>{
  
  await connection
  console.log("connected on 8080")
})