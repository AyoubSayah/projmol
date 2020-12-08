const express =require("express")
const app=express()
const mongoose = require('mongoose');
const cors=require("cors")
const bodyParser = require('body-parser')
const http = require('http');
const morgan = require('morgan')

const server = http.Server(app)
app.use(morgan('tiny'))

app.use("/uploads", express.static(process.cwd() +"/uploads"))
app.use(bodyParser.json({}));

app.use(cors());
app.use(bodyParser.urlencoded({
    limit : '50mb',
        extended: true
        
      }));


      const db= 'mongodb://127.0.0.1:27017/restau'
  mongoose.connect(db , { useNewUrlParser: true,useUnifiedTopology: true,
  })
  .then(()=> console.log( 'MongoDB Connected...'))
  .catch(err=>console.log(err))
  server.listen(5000);
  require("./routes/admin")(app);