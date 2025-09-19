import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

import User  from "../models/user.model.js";

const auth = async(req,res,next)=>{
    try{
        const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "") || req.body.token;

        if(!token){
            return res.status(400),json({
                success:false,
                message:"Token not found"
            })
        }


        try{
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            req.id =decode.userId;
        }catch(err){
            //verification issue
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next();

    }catch(err){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while validating the token",
        })
    }
    
}

export default auth;

