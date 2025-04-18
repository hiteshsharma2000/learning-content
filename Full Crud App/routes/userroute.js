const express=require('express');
const {UserModel}=require('../model/usermodel')
const userroute=express.Router();
const jwt=require('jsonwebtoken')

userroute.get('/',async (req,res)=>{  
    try {
        const user=await UserModel.find()
        res.send(user)
    } catch (error) {
        console.log(error.message);
    }
})
userroute.post('/register',async (req,res)=>{
const payload=req.body;
    try {
        const newuser=new UserModel(payload)
        await newuser.save()
        res.send("new user has been created")
    } catch (error) {
        console.log(error.message);
    }
})
userroute.post('/login',async (req,res)=>{
const {email,password}=req.body;
    try {
       const getuser=await UserModel.findOne({"email":email})
       if(getuser){
            const token=jwt.sign({"userid":getuser._id},"users")
           res.send({"detail":getuser,"token":token})
       }else{
        res.send('user not found')
       }
    } catch (error) {
        console.log(error.message);
    }
})
userroute.patch('/update/:userid',async (req,res)=>{
    const {userid}=req.params;
    console.log(userid)
const payload=req.body;
    try {

        const newuser=await UserModel.findByIdAndUpdate({_id:userid},payload)
        res.send("user has been updated")
       
    } catch (error) {
        console.log(error.message);
    }
})
userroute.delete('/delete/:userid',async (req,res)=>{
    const {userid}=req.params;
    console.log(userid)
const payload=req.body;
    try {

        const newuser=await UserModel.findByIdAndDelete({_id:userid},payload)
        res.send("user has been deleted")
       
    } catch (error) {
        console.log(error.message);
    }
})


module.exports={userroute}