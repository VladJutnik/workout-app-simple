import express from "express"
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'

/*DB*/
import {connectDB} from "./db/db.js";
/*Middleware*/
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";

/*Routes*/
import userRoutes from "./routes/userRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'dev')
{
    app.use(morgan('dev'))
}
app.use(express.json({extended: true}))

app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes)
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
