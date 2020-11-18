const express =require("express")
const app=express()
const cors=require("cors")
const bodyParser = require('body-parser')
const http = require('http');
const server = http.Server(app)
app.use(bodyParser.json({}));

app.use(cors());
app.use(bodyParser.urlencoded({
    limit : '50mb',
        extended: true
        
      }));
const admin = require("firebase-admin");

const  serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://projet-84405.firebaseio.com"
});
const db = admin.firestore();

app.get('/', function (req, res) {
    res.send('Hello World')

  })
  app.post('/api' ,async(req,res)=>{
    console.log("affff")

      console.log(req.body)
      try{
    await db.collection('apis').doc("/6/")
    .create({item: req.body.item});
return res.status(200).send("ok");
} catch (error) {
    console.log("a")
console.log(error);
res.status(500).send(error);
}
  })
  app.get("/api",async(req,res)=>{
      try {
         result= await db.collection("apis").get()
         res.send(result.docs)
      } catch (error) {
          console.log(error);
      }
  })
  server.listen(5000);