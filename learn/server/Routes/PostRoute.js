const express =require('express')
const PostRoute=express.Router()
const {postModel}=require('../Models/PostModel')
const {auth}=require('../Middleware/auth')

PostRoute.get('/',auth,async(req,res)=>{
    try {
        const data=await postModel.find()
        res.send({"data":data})
    } catch (error) {
        res.send({msg:error})
    }
})

PostRoute.post('/create',auth,async (req,res)=>{
    const data=req.body
    try {
        const newpost=new postModel(data)
        await newpost.save()
        res.send({msg:"new post has been created"})
    } catch (error) {
        res.send({msg:error})
    }
})

module.exports={PostRoute}