
module.exports=(app)=>{
    const controller=require("../controllers/admin.controler")
    const controller2=require("../controllers/commande.controller")
    const multer=require("../controllers/multer")
app.post('/ajout',multer.uploadphoto,controller.ajoutermakloub)
app.post('/ajoutpizza',multer.uploadphoto,controller.ajoutpizza)
app.post('/ajoutingrd',multer.uploadphoto,controller.ajoutingred)
app.get('/pizza',controller2.getallpizza)
app.get('/makloub',controller2.getallmakloubs)
app.get('/ingredients',controller2.getallingredients)
app.post('/ajoutcommande',controller2.addcommande)
app.get('/getcommande',controller2.getcommande)
} 