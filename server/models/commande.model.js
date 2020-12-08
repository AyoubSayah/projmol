const mongoose=require('mongoose')
const commandescheme=mongoose.Schema({
    list:{
        harrisa:String,
        ingred:[{
            checked:Boolean,
            nom:String,
            image:String
        }],
        type:{
            image:String,
            prix:Number,
            nom:String
        },
    },
    long:Number,
    latt:Number,
    total:Number

})
module.exports=mongoose.model('commande',commandescheme)