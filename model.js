const mongoose =require("mongoose")
const userSchema = mongoose.Schema({
    Id:{
        type:"",
        required:true
    },
    movieName:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    ReleaseDate:{
        type:String,
        required:true
    }
    
})
module.exports= mongoose.model("Movies",userSchema)
