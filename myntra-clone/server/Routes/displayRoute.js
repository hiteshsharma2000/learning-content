const express=require('express')
const {dispalyModel}=require('../models/displayModel')

const displayRoute=express.Router()

displayRoute.get("/getdata",async(req,res)=>{
    try {
        
   const data=await dispalyModel.find()
   res.send({"data":data})


    } catch (error) {
    res.status(404).send({"error":error})     
    }
})
displayRoute.post("/add",async(req,res)=>{
    const payload=req.body;

    try {
         const newdata=new dispalyModel(payload)
         await newdata.save()
         res.status(200).send({msg:"data has been added"})
         
    } catch (error) {
         res.status(404).send({"error":error})
    }
})

module.exports={displayRoute}