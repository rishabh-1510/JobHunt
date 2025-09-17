import mongoose from "mongoose";

const jobSchema =new mongoose.Schema({
    title:{
        type:String,
        reqiured:true,
    },
    description:{
        type:String,
        reqiured:true,
    },
    requirements:{
        type:String,
        reqiured:true,
    },
    salary:{
        type:Number,
        reqiured:true,
    },
    location:{
        type:String,
        reqiured:true,
    },
    jobType:{
        type:String,
        reqiured:true,
    },
    position:{
        type:String,
        reqiured:true,
    },
    compony:{
        type:mongoose.Schema.ObjectId,
        ref:"Compony",
        reqiured:true,
    },
    created_by:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        reqiured:true,  
    },
    applications:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"User",
        }
    ]

});

export const Job = mongoose.model("Job",jobSchema);

