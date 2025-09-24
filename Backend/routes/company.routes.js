import express from "express"
import { registercompany , updatecompany , getcompany ,getcompanyById } from "../controller/compony.controller.js";
import auth from "../middleware/auth.js";

const Router = express.Router();
Router.post("/register",auth ,registercompany);
Router.post("/update/:id",auth ,updatecompany);
Router.get("/getcompany/:id",auth,getcompanyById);
Router.get("/getcompanies/:userId",auth,getcompany);

    

export default Router;
