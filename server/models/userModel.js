import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
    {
        name: String,
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        images: {
            before: String,
            after: String,
        },
    },
    {
        minimize: false, // игнорирует пустые поля и все равно возращает объект с пустыми значениями
        timestamps: true, // добавит поля createdAt и updatedAt и сам автоматически будет их заполнять!
    }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
//pre - перед методом как в yii beforsave and aftrsave
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) { // если не измененный пароль идем дальше
        next()
    }

    const salt = await bcrypt.genSalt(10) // шифруем пароль если его поменяли
    this.password = await bcrypt.hash(this.password, salt) // кладем новый пароль
})

const User = mongoose.model('User', userSchema)

export default User
