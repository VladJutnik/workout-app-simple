import User from '../../models/userModel.js'
import asyncHandler from "express-async-handler";

// @desc    Register user
// @route   POST /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) =>{
    const user = await User.findById(req.user._id).select('-password')

    res.json({user})
})