import mongoose from "mongoose";

const componySchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    website:{
        type:String,
    },
    location:{
        type:String
    },
    logo:{
        type:String, //url
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },


    
},{timestamps:true})

export const Job = mongoose.model("Compony",componySchema)