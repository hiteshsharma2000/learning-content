const express=require('express')
const {SliderModel}=require('../models/SliderModel')
const sliderRoute=express.Router()



sliderRoute.get('/getdata',async(req,res)=>{
    try {
        const data=await SliderModel.find()
        res.send({"data":data
        })        
    } catch (error) {
        res.status(404).send({"error":error})     
    }
})

sliderRoute.post("/add",async (req,res)=>{
    payload=req.body
    try {
        const newslide=new SliderModel(payload)
        await newslide.save()
        res.status(200).send({msg:"new slide has been added"})

    } catch (error) {
        res.status(404).send({"error":error})
    }
})

module.exports={sliderRoute}