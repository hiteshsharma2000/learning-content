const express=require('express')
const userRoute=express.Router()

const {UserModel}=require('../Models/userModel')

userRoute.get('/',async (req,res)=>{
    try {
        const userdata=await UserModel.find()
        res.status(200).send({"user":userdata})  

    } catch (error) {
        res.send({"msg":error})
    }
})

userRoute.post('/add',async (req,res)=>{
    payload=req.body
    try {
          
        const newuser=new UserModel(payload)
        await newuser.save()
        res.send({msg:"user has been added"})

    } catch (error) {

        res.send({"msg":error})
    }
})

module.exports={userRoute}