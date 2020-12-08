const mongoose=require("mongoose")
const makloubschema=mongoose.Schema({
    nom:{type:String},
    prix:Number,
    temp:Number,
    image:String

})
module.exports=mongoose.model('makloub',makloubschema) // chnatiiih l'acces mil barra ynajem yestameeel