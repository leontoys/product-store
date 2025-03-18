import express from "express";
//dotenv for .env
import dotenv from "dotenv";
dotenv.config()
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.router.js"

//express app
const app = express()

//middleware
app.use(express.json())
//everything moved to router
app.use("/api/products",productRouter)


//server listening on port
const PORT = process.env.PORT || 50000

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server listening on http://localhost:${PORT}/`)
})

//