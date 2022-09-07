import express from "express";
import {registerUser} from "../controllers/user/regController.js";

const router = express.Router()
router.route('/').post(registerUser)

export default router