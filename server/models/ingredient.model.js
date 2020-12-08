const mongoose=require("mongoose")
const ingeredientschema=mongoose.Schema({
    nom:{type:String},
    image:String,
    checked:{type:Boolean ,default:true}

})
module.exports=mongoose.model('ingred',ingeredientschema)