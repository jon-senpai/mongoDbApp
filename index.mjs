import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
// Connection string
const ATLAS_URI = process.env.ATLAS_URI





const PORT = process.env.PORT || 5050
const app = express()


// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
  })