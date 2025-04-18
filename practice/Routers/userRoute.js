const express=require('express');
const {UserModel}=require('../Models/usermodel');
const bcrypt=require('bcrypt')
const userRoute=express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
userRoute.post('/register',async(req,res)=>{
const {username,email,password}=req.body;
    try {

        bcrypt.hash(password, 5, function(err, hash) {
            if(hash){
                const registeruser=new UserModel({username,email,password:hash})
                registeruser.save()
                res.send('user has been register')
            }else{
                res.send('something went wrong')
            }
        });
        

    } catch (error) {
        console.log(error.message);
    }
})
userRoute.post('/login',async(req,res)=>{
const {email,password}=req.body;
    try {

      const user=await UserModel.findOne({email});
      if(user){
        bcrypt.compare(password,user.password,function (err,hash){
        if(hash){
            const token=jwt.sign({userid:user._id},"eval",{expiresIn:'1h'})
            const refreshtoken=jwt.sign({userid:user._id},"refresh",{expiresIn:'7d'});
              res.cookie('token',token)
              res.cookie('refreshtoken',refreshtoken)
            res.send({"user":user,"token":token,"refreshtoken":refreshtoken})

        }else{
            res.send("invalid password")
        }

        })
      
      }else{
        res.send("user is not found")
      }
  
        

    } catch (error) {
        console.log(error.message);
    }
})




module.exports={userRoute}