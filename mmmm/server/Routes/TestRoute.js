const express=require('express')
const {TestModel}=require('../Models/TestModel');
const TestRoute=express.Router()


TestRoute.get('/',async (req,res)=>{
        const data=await TestModel.find()
        res.send({'data':data})
})

module.exports={TestRoute}