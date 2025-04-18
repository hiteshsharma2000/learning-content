const mongoose=require('mongoose')
const sliderSchema=mongoose.Schema({
    img:String

},{
    versionKey:false
})

const SliderModel=mongoose.model('slider',sliderSchema)

module.exports={SliderModel}