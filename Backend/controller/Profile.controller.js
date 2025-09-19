import User from '../models/user.model.js';

export const updateProfile=async(req,res)=>{
    try{
        const{fullName , email , mobileNumber ,bio="" ,skills ="" } = req.body;
        const file  = req.file;
        const userId = req.id
        if(!fullName , !email , !mobileNumber , !bio , !skills){
            return res.status(401).json({
                message:"Fill all the field properly",
                success:false
            });
        };

        //cloudinary
        
        const skillsArray = skills.split(",");
        let user = await User.findById(userId);
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not exist"
            })
        };

        user.fullName = fullName;
        user.email = email;
        user.mobileNumber = mobileNumber;
        user.profile.bio = bio;
        user.profile.skills =skillsArray

        await user.save();

        user={
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            mobileNumber:user.mobileNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).json({
            message:"Profile updated succcessfully",
            success:true,
            user
        })
    }catch(err){
        console.log(err);
        return res.status(404).json({
            success:false,
            message:err.message
        })
    }
}