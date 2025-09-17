import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Job'
    },
    applicant:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'User'
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }

},{timeseries:true})

export const Application = mongoose.model('Application',applicationSchema)
