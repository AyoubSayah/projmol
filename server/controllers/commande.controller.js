const ingred = require('../models/ingredient.model');
const makloub=require('../models/makloub');
const pizza = require('../models/pizza');
const commande=require('../models/commande.model')
exports.getallpizza=async(req,res)=>{
    try {
        Pizza=await pizza.find()
        res.status(200).json({    // 
            status :"fine",
            Pizza
        }) 

    } catch (error) {
        console.log(error)
        
    }

}
exports.getallmakloubs=async(req,res)=>{
    try {
        Makloub=await makloub.find()
        res.status(200).json({
            status :'succes',
            Makloub
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getallingredients=async(req,res)=>{
    try {
        Ingred=await ingred.find()
        res.status(200).json({
            status :'succes',
            Ingred
        })
    } catch (error) {
        console.log(error);
    }
}
exports.addcommande=async(req,res)=>{
    try {
        console.log('heyc')
    Commande=await commande.create(req.body)
    res.status(200).json({
        status:'succes'
    })
    console.log(Commande);
    } catch (error) {
        console.log(error)
        console.log("hey")
    }
}
exports.getcommande=async(req,res)=>{
    try {
        Commande=await commande.find()
        res.status(200).json({
            status:'succses',
            Commande
        })
    } catch (error) {
        console.log(error);
    }
}