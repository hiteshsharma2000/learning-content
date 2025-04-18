const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    NO:Number,
    title:String,
    description:String

},{versionKey:false})


const postModel=mongoose.model('post',PostSchema)

module.exports={postModel}