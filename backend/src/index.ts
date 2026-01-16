import express, { Application, Request, Response } from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import connectDB from "./config/db"

dotenv.config()


const app=express();
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT

const startServer = async () => {
  await connectDB()

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()


app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
})

