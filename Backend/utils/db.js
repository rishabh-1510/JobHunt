import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("DB conncetion successful")
    }catch(err){
        console.log("DB Connection Issue")
    }

}
export default connectDB;
