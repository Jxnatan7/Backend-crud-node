import express from "express"
import userRouter from "./routes/userRoutes.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({
    path: ".env"
})

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRouter)

app.listen(process.env.PORT, () => console.log(`Http server is running in port ${process.env.PORT}...`))