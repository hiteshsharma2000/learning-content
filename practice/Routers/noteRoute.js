const express=require('express')

const {NoteModel}=require('../Models/notemodel');
const noteRoute=express.Router();

const {auth}=require('../Middlewares/auth');

noteRoute.get("/",async(req,res)=>{
    try {
        const allnotes=await NoteModel.find()
        res.send(allnotes)
        
    } catch (error) {
        
    }
})

noteRoute.post('/create',auth,async (req,res)=>{
    
    try {
         const note=new NoteModel(req.body)
         note.save()
         res.send('note has been created')
        
    } catch (error) {
        console.log("something went wrong");
    }
})
noteRoute.patch('/update/:noteid',auth,async (req,res)=>{
    const {noteid}=req.params;

    try {
   const updateuser=await NoteModel.findByIdAndUpdate({_id:noteid},req.body);
              res.send("note has been updated")    
    } catch (error) {
        console.log(error.message);
    }
})
noteRoute.delete('/delete/:noteid',auth,async (req,res)=>{
    const {noteid}=req.params;

    try {
   const deletenote=await NoteModel.findByIdAndDelete({_id:noteid},req.body);
              res.send("note has been deleted")    
    } catch (error) {
        console.log(error.message);
    }
})


module.exports={noteRoute}