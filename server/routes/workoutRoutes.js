import express from "express";
import { getNewWorkout } from "../controllers/workout/workoutController.js";
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()
router.route('/').post(protect, getNewWorkout)

export default router