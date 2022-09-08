import express from "express";
import { getNewExercise } from "../controllers/exercise/exerciseController.js";
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()
router.route('/').post(protect, getNewExercise)

export default router