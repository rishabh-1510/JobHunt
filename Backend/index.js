import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRoutes from "./routes/user.routes.js"
import companyRoutes from "./routes/company.routes.js";
import jobRoutes from "./routes/jobs.routes.js";
dotenv.config()
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const PORT = process.env.PORT;
const Option = {
    origin:`http//localhost:${PORT}`,
    credential:true
}


app.use("/api/v1/user",userRoutes);
app.use("/api/v1/company",companyRoutes);
app.use("/api/v1/job",jobRoutes);


app.use(cors(Option));
app.listen(PORT,()=>{
    connectDB();
    console.log(`App is running at PORT no ${PORT}`)
})



