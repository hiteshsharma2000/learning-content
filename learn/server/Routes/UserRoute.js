const express=require('express')
const UserRoute=express.Router()
const {UserModel}=require('../Models/UserModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookieparser=require('cookie-parser')

UserRoute.post('/register',async(req,res)=>{
    const {name,email,password}=req.body
        try {
            bcrypt.hash(password, 5, function(err, hash) {
                if(hash){
                    const newuser=new UserModel({name,email,"password":hash})
                    newuser.save()
                    res.send({msg:"new user has been register successful"})
                }else{
                    res.send({msg:"error in hashing"})
                }
            });
      
    } catch (error) {
        res.send({msg:error})
    }
})

UserRoute.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try {
       const userexist=await UserModel.findOne({email}) 
       if(userexist){
        bcrypt.compare(password,userexist.password,function(err,result){
            if(result){
                var token = jwt.sign({ email }, 'practice',{ expiresIn: '1m' });
                res.cookie('token',token)
                res.send({msg:"login successful",token})
            }
            else{
                res.send({msg:"password is not matched"})
            }
        })
       }
       else{
        res.send({msg:"email is not regitered"})
       }


    } catch (error) {
        res.send({msg:error})
    }
})




module.exports={UserRoute}