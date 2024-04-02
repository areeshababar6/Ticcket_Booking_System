const Model = require("../Models/model")


const createApi=(req,res)=>{
    const user = new Model(req.body);  
    user.save()
        .then((used) => {
            res.status(200).json(used);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}
const showApi=(req,res)=>{
    Model.find((err,user)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(user)
        }
    })
}
module.exports= {createApi,showApi}