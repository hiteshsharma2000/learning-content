const express=require('express')

const mongoose=require('mongoose')

const TestSchema=mongoose.Schema({
    name:String
},{versionKey:false})

const TestModel=mongoose.model("test",TestSchema)

module.exports = {TestModel}