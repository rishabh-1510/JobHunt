import {Company } from "../models/company.model.js";

export const registercompany = async(req,res)=>{
    try{    
        const {name} = req.body;
        if(!name){
            return res.status(400).json({
                success:false,
                message:"company name is required"
            })
        }
        let company = await Company.findOne({name});
        if(company){
            return res.status(400).json({
                success:false,
                message:"company already exist"
            })
        };
        company = await Company.create({
            name:name,   
            userId:req.id,

        })
        return res.status(201).json({
            success:true,
            message:"company registered successfully",
            company
        })
    }catch(err){
        console.log(err)
    }
}

export const getcompany = async(req,res)=>{
    try{
        const userId = req.id;
        const companies = await Company.find({userId});
        if(!companies){
            return res.status(401).json({
                success:false,
                message:"Componies not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"company fetched successfully",
            companies
        })
    }catch(err){
        return res.status(401).json({
            success:false,
            message:"erron in fetching company "
        })
        
    }
}

export const getcompanyById = async(req,res)=>{
    try{
        const companyId = req.params.id;
        const company = await Company.findById(companyId)
        if(!company){
            return res.status(400).json({
                success:false,
                message:"company not found"
            })
        }                                                       
        return res.status(200).json({
            success:true,
            company,
            message:"company fetched successfully"
        })

    }catch(err){
        console.log(err)
    }
}

export const updatecompany = async(req,res)=>{
    try{
        const {name , description="" , website="", location="" }=req.body;
        
        //cloudinary
        const updateData = {name , description , website ,location};
        const company = await Company.findByIdAndUpdate({_id:req.params.id},{updateData},{new:true});
        if(!company){
            return res.status(400).json({
                success:false,
                message:"Problem in updating company"
            })
        }

        return res.status(200).json({
            message:"company information updated successfully",
            success:true,
        })

    }catch(err){
        return res.status(400).json({
            success:false,
            message:"Error in updating company"
        })
    }
} 
