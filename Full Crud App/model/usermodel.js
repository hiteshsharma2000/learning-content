const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    title:String,
    status:Boolean

},{
    versionKey:false
})
const UserModel=mongoose.model("todo",userSchema)
module.exports={UserModel}

