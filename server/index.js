import express from "express"
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'

/*Routes*/
import userRoutes from "./routes/userRoutes.js";

dotenv.config()

const app = express()

if(process.env.NODE_ENV === 'dev'){
    app.use(morgan('dev'))
}
app.use(express.json({ extended: true }))

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

function start() {
    try {
        app.listen(
            PORT,
            console.log.bind(console, `Server has been started on port - ${PORT}`.yellow.bold)
        )
    } catch (e) {
        console.log(e)
    }
}
start()
