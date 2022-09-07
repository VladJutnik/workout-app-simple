import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        const {
            MONGO_INITDB_ROOT_USERNAME: username,
            MONGO_INITDB_ROOT_PASSWORD: password,
            MONGO_HOST: host,
        } = process.env

        const uri = `mongodb://${username}:${password}@${host}/workout?authSource=admin`
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected`.cyan.underline)
    } catch (e){
        console.error(`Error: ${e.message}`.red.underline.bold)
        process.exit(1)
    }
}