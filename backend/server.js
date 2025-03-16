import express from "express";
import dotenv from "dotenv";
dotenv.config()
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";

//express app
const app = express()

//middleware
app.use(express.json())

//routes
app.get("/",(req,res)=>{
    res.send("Server Ready")
})

//GET ALL
app.get("/api/products",async (req,res)=>{

    try {
        const products = await Product.find({})
        res.status(201).json({status:true,data:products})
        
    } catch (error) {
        console.error("Error getting product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
})

//POST
app.post("/api/products",async (req,res)=>{
    //get body
    const product = req.body

    //validation
    if(!product.name|| !product.price || !product.image){
        res.status(400).json({status:false,message:"Please enter all fields"})
    }

    //create new product
    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({status:true,data:newProduct})
        
    } catch (error) {
        console.error("Error creating product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
})

//PUT
app.put("/api/products/:id",async (req,res)=>{

    //get id
    const {id} = req.params
    console.log("id",id)
    //get body
    const product = req.body

    //validation
    if(!mongoose.Types.ObjectId.isValid(id)){
        req.status(404).json({status:false,message:"Invalid Product Id"})
    }

    try {
        const newProduct = await Product.findByIdAndUpdate(id,product,{new:true})//to get updated product
        res.status(200).json({status:true,data:newProduct})
        
    } catch (error) {
        console.error("Error updating product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
})

//DELETE
app.delete("/api/products/:id",async (req,res)=>{

    //get id
    const {id} = req.params

    //validation
    if(!mongoose.Types.ObjectId.isValid(id)){
        req.status(404).json({status:false,message:"Invalid Product Id"})
    }

    try {
        await Product.findByIdAndDelete(id)//to get updated product
        res.status(200).json({status:true,message:"Product Deleted"})
        
    } catch (error) {
        console.error("Error Deleting product",error.message)
        res.status(500).json({status:false,message:"Server Error"})
    }
})

//server listening on port
const PORT = process.env.PORT || 50000

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server listening on http://localhost:${PORT}/`)
})

//