const mongoose=require('mongoose')

const noteSchema=mongoose.Schema({
    title:{type:String,require:true,unique:true},
    description:{type:String,require:true,unique:true}
})
const NoteModel=mongoose.model("note",noteSchema)

module.exports={NoteModel}