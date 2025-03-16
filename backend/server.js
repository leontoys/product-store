import express from "express";
import dotenv from "dotenv";
dotenv.config()
import { connectDB } from "./config/db.js";

//express app
const app = express()

//routes
app.get("/",(req,res)=>{
    res.send("Server Ready")
})

//server listening on port
const PORT = process.env.PORT || 50000

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server listening on http://localhost:${PORT}/`)
})

//