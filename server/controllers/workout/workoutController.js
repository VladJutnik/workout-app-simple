import Workout from '../../models/workoutModel.js'
import asyncHandler from "express-async-handler";

// @desc    Add new workout
// @route   POST /api/workouts
// @access  Private
export const getNewWorkout = asyncHandler(async (req, res) => {
    const {name, exerciseIds} = req.body

    const workout = await Workout.create({name, exercises: exerciseIds})
    res.json({workout})
})
