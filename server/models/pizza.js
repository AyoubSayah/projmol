const mongoose=require("mongoose")
const pizzascheme=mongoose.Schema({
    nom:String,
    description:String,
    prixm:Number,
    prixl:Number,
    prixxl:Number,
    image:String
})
module.exports=mongoose.model('pizza',pizzascheme)