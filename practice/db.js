const mongoose=require('mongoose');

const connection= mongoose.connect('mongodb+srv://Sharmahitesh:Hitesh-sharma@cluster0.4sp0tmd.mongodb.net/evalprac?retryWrites=true&w=majority')


module.exports={connection}