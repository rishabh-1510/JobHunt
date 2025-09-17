import express from "express"
import resgister from "../controller/User.controller"
import  login  from "../controller/User.controller";
import updateProfile from "../controller/Profile.controller"
const router = express.Router();

router.post("/register",resgister);
router.post("/login",login);
router.post("/profile/update", updateProfile)

