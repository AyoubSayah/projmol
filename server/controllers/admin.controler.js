const ingred = require('../models/ingredient.model');
const makloub=require('../models/makloub');
const pizza = require('../models/pizza');


exports.ajoutermakloub=async(req,res)=>{
    try {
        const url=req.protocol + '://' + req.get("host");
req.body.image=url  + "/uploads/" + req.file.filename
console.log(req.body)
        Makloub= await makloub.create(req.body) // creation f base insert
        res.status(200).json({    // 
            status :"fine"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status :"err"
        })
    }
}
exports.ajoutpizza=async(req,res)=>{
    try {
    const url =req.protocol + '://' + req.get("host")
    req.body.image=url  + "/uploads/" + req.file.filename
Pizza = await pizza.create(req.body)

res.status(200).json({
    status :"fine"
})
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status :"err"
        })

    }
}
exports.ajoutingred=async(req,res)=>{
    try {
    const url =req.protocol + '://' + req.get("host")
    req.body.image=url  + "/uploads/" + req.file.filename
     await ingred.create(req.body)

res.status(200).json({
    status :"fine"
})
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status :"err"
        })

    }
}