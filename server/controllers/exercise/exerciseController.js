import Exercise from '../../models/exerciseModel.js'
import asyncHandler from "express-async-handler";

// @desc    Add new exercise
// @route   POST /api/exercises
// @access  Private
export const getNewExercise = asyncHandler(async (req, res) => {
    const {name, times, imageName} = req.body

    const exercise = await Exercise.create({name, times, imageName})
    res.json({exercise})
})