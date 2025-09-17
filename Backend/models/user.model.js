import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Student','Recruiter'],
        required:true
    },
    profile:{
        bio:{type:String },
        skills:{type:String},
        resume:{type:String}, //URL
        resumeOriginalName:{type:String},
        compony:{type:mongoose.Schema.ObjectId , ref:'Compony'},
        profilePhoto:{type:String , default:""}

    }

},{timestamps:true})

export const User = mongoose.model('User',userSchema);

// 40