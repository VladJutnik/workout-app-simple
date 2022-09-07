
// @desc   Get user profile
// @rout   GET /api/users/profile
// @access Private
export const getUserProfile = (req, res) =>{
    const user = {
        name: 'Va',
        age: '27'
    }

    res.json(user)
}