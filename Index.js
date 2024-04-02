const express = require("express")
const app = express();
const cors =require("cors")
const bodyParser= require("body-parser")
const mongoose = require("mongoose")
const Model = require("./Models/model");

app.use(cors())
app.use(bodyParser.json())
//port number
const port = 5000;
//connecting Port
app.listen(port,()=>{
   console.log("Port is connected Successfully") ;
})

//DataBase connecting
mongoose.connect("mongodb://127.0.0.1:27017/MovieBooking",{useNewUrlParser:true})
// checking Database Connection
mongoose.connection.once("open",()=>{
    console.log("Database Connected Successfully")
})
// Api for create Data
app.post("/create",(req,res)=>{
    const data = Model(req.body);
    data.save()
    .then((user)=>{
        res.status(200).json(user)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
 })