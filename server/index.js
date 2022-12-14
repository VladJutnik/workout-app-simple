import express from "express"
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path'

/*DB*/
import {connectDB} from "./db/db.js";
/*Middleware*/
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";

/*Routes*/
import userRoutes from "./routes/userRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'dev')
{
    app.use(morgan('dev'))
}
app.use(express.json({extended: true}))

const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes)
app.use('/api/workouts', workoutRoutes)

if (process.env.NODE_ENV === 'prod') {
    // Step 1:
    app.use(express.static(path.resolve(__dirname, './client/build')))
    // Step 2:
    app.get('*', function (request, response) {
        response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
    })
}

app.use(errorHandler)
app.use(notFound)
const PORT = process.env.PORT || 5000

async function start()
{
    try
    {
        await connectDB()
        app.listen(
            PORT,
            console.log.bind(console, `Server has been started on port - ${PORT}`.yellow.bold)
        )
    } catch (e)
    {
        console.log(e)
    }
}

start()
