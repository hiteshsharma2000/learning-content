const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
},{
    versionKey:false
})

const UserModel=mongoose.model("collection1",userSchema);

module.exports={UserModel}