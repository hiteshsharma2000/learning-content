const mongoose=require('mongoose')

const connection =mongoose.connect('mongodb+srv://Sharmahitesh:Hitesh-sharma@cluster0.4sp0tmd.mongodb.net/learn-backend-again?retryWrites=true&w=majority&appName=Cluster0')

module.exports=connection