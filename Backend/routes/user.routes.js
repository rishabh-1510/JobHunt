import express from "express"
import {logout, register} from "../controller/User.controller.js"
import  {login}  from "../controller/User.controller.js";
import {updateProfile} from "../controller/Profile.controller.js"
import auth from "../middleware/auth.js";


const Router = express.Router();
Router.post("/register",register);
Router.post("/login",login);
Router.post("/profile/update", auth,updateProfile)
Router.get("/logout",logout);
export default Router;
