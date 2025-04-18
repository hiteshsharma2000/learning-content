const mongoose=require('mongoose')
const displaySchema=mongoose.Schema({
    img:String


},{
    versionKey:false
})

const dispalyModel=mongoose.model("display",displaySchema)

module.exports={dispalyModel}